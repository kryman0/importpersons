using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ImportPersons.Models;

[Table("Users")]
public class User
{
    [Column("User_id")]
    public int Id { get; set; }
    
    [Column("Username")]
    [MaxLength(128)]
    [Required]
    public string Username { get; set; }
    
    [Column("Password")]
    [MaxLength(256)]
    [Required]
    public string Password { get; set; }
}