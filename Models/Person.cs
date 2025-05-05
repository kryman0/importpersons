using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ImportPersons.Models;

[Table("Persons")]
public class Person
{
    [Column("Person_id")]
    public int Id { get; set; }
    
    [Column("Firstname")]
    [MaxLength(128)]
    [Required]
    public string FirstName { get; set; }
    
    [Column("Lastname")]
    [MaxLength(128)]
    [Required]
    public string LastName { get; set; }
    
    [Column("Ssn")]
    [MaxLength(13)]
    [Required]
    public string SSN { get; set; }
    
    [Column("Address")]
    [MaxLength(128)]
    [Required]
    public string Address { get; set; }
    
    [Column("Postcode")]
    [MaxLength(32)]
    [Required]
    public string PostCode { get; set; }
    
    [Column("Country")]
    [MaxLength(64)]
    [Required]
    public string Country { get; set; }
}