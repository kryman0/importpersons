using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Text.RegularExpressions;
using ImportPersons.Models;
using Microsoft.AspNetCore.Mvc;

namespace ImportPersons.Controllers;

[ApiController]
[Route("[controller]")]
public class PersonController : ControllerBase
{
    private readonly ImportPersonsContext _context;
    
    private IConfiguration _configuration;
    
    public PersonController(ImportPersonsContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    private static string MaskSSN()
    {
        const string maskedSSN = "XXXXXXXX-XXXX";
        
        return maskedSSN;
    }

    private bool ValidateSSN(string ssn)
    {
        const string pattern = @"^\d{8}-\d{4}$";
        
        var match = Regex.Match(ssn, pattern).Success;

        return match;
    }

    private bool CheckIfSSNAlreadyExists(string ssn)
    {
        return _context.Persons.Any(p => p.SSN == ssn);
    }

    private bool ValidateList(List<Person> persons)
    {
        foreach (var person in persons)
        {
            var runTimeProps = person.GetType().GetRuntimeProperties();

            if (!ValidateProperty(runTimeProps, person))
            {
                return false;
            }
        }

        return true;
    }

    private bool ValidateProperty(IEnumerable<PropertyInfo> runTimeProps, Person person)
    {
        foreach (var runTimeProp in runTimeProps)
        {
            if (runTimeProp.Name == nameof(person.Id))
            {
                continue;
            }

            if (runTimeProp.Name == nameof(person.SSN))
            {
                if (!ValidateSSN(person.SSN) || CheckIfSSNAlreadyExists(person.SSN))
                {
                    return false;
                }
            }

            var propValue = GetPropertyValue(runTimeProp, person);
                
            var isPropValueNotValid = propValue == null || 
                                      string.IsNullOrWhiteSpace(propValue.ToString()) || 
                                      string.IsNullOrEmpty(propValue.ToString());

            if (isPropValueNotValid)
            {
                return false;
            }
        }

        return true;
    }

    private object? GetPropertyValue(PropertyInfo property, Person person)
    {
        return property.GetValue(person);
    }
    
    [HttpGet("/api/persons")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public IResult GetPersons()
    {
        var jsonSerializerOptions = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            WriteIndented = true
        };
        
        var maskSSN = _configuration.GetSection("Masking")["SSN"]?.ToLower();

        if (_context.Persons == null || !_context.Persons.Any())
        {
            return Results.NoContent();
        }

        var persons = _context.Persons.Select(p => new Person
        {
            Id = p.Id,
            FirstName = p.FirstName,
            LastName = p.LastName,
            SSN = string.IsNullOrEmpty(maskSSN) || maskSSN != "true" ? p.SSN : MaskSSN(),
            Address = p.Address,
            PostCode = p.PostCode,
            Country = p.Country
        }).ToList();
        
        return Results.Json(persons, jsonSerializerOptions, "application/json", StatusCodes.Status200OK);
    }

    [HttpPost("/api/persons/import")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public IResult ImportPersons([FromHeader(Name = "X-API-KEY")] string header, List<Person> persons)
    {
        var isApiKeyCorrect = header == _configuration.GetSection("API-KEY").Value;
        
        if (!isApiKeyCorrect)
        {
            return Results.Unauthorized();
        }
        
        if (persons == null || !persons.Any())
        {
            return Results.BadRequest("No persons imported. Please import at least one person.");
        }

        if (!ValidateList(persons))
        {
            return Results.Problem(detail: "List has incorrect values.", statusCode: StatusCodes.Status400BadRequest);
        }
        
        _context.AddRange(persons);
        _context.SaveChanges();

        return Results.Created("/api/persons/import", "Persons created!");
    }
}