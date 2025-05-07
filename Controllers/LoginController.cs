using ImportPersons.Models;
using Microsoft.AspNetCore.Mvc;

namespace ImportPersons.Controllers;

[ApiController]
[Route("[controller]")]
public class LoginController : ControllerBase
{
    private readonly ImportPersonsContext _context;
    
    public LoginController(ImportPersonsContext context)
    {
        _context = context;
    }

    [HttpPost("/api/login")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public IResult Login([FromBody] User user)
    {
        if (string.IsNullOrWhiteSpace(user.Password) || string.IsNullOrEmpty(user.Password))
        {
            return Results.BadRequest("Password is empty.");
        }
        
        var userRegistered = _context.Users.FirstOrDefault(u => u.Username == user.Username);

        if (userRegistered == null)
        {
            return Results.Unauthorized();
        }
        
        var doesPasswordMatch = BCrypt.Net.BCrypt.Verify(user.Password, userRegistered.Password);
        
        if (!doesPasswordMatch)
        {
            return Results.Unauthorized();
        }

        return Results.Ok("You have successfully logged in!");
    }
}