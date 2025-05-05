using Microsoft.EntityFrameworkCore;

namespace ImportPersons.Models;

public class ImportPersonsContext : DbContext
{
    public ImportPersonsContext(DbContextOptions<ImportPersonsContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Person> Persons { get; set; }
}