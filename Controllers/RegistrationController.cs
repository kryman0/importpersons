using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using ImportPersons.Models;

namespace ImportPersons.Controllers;

[ApiController]
[Route("[controller]")]
public class RegistrationController : ControllerBase
{
    private readonly ImportPersonsContext _context;

    public RegistrationController(ImportPersonsContext context)
    {
        _context = context;
    }

    [HttpPost("/api/register")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public IActionResult Register([FromBody] User user)
    {
        if (!ValidateEmail(user.Username) || string.IsNullOrWhiteSpace(user.Username) || string.IsNullOrEmpty(user.Password))
        {
            return BadRequest();
        }
        
        var doesUserWithEmailAlreadyExist = _context.Users.FirstOrDefault(u => u.Username == user.Username);

        if (doesUserWithEmailAlreadyExist != null)
        {
            return Conflict("User with the same email already exist.");
        }
        
        user.Password = EncryptPassword(user.Password);

        _context.Add(user);
        _context.SaveChanges();

        return CreatedAtAction(nameof(Register), $"Your account {user.Username} has been created.");
    }

    private bool ValidateEmail(string email)
    {
        var atSymbol = @"\@";
        var pattern = @"^\w.*\w.*\@[a-zA-Z]*\.{1}[a-zA-Z]*$";

        return Regex.Count(email, atSymbol) == 1 && Regex.Match(email, pattern).Success; 
    }

    private string EncryptPassword(string password)
    {
        return BCrypt.Net.BCrypt.HashPassword(password);
    }
}