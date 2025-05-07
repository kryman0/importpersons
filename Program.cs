using Microsoft.EntityFrameworkCore;
using ImportPersons.Models;
using ImportPersons.DB;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000").AllowAnyHeader();
    });
});

DbConnection.SetConnectionString(builder.Configuration.GetSection("ConnectionStrings:ImportPersons")?.Value);

builder.Services.AddDbContext<ImportPersonsContext>(opts =>
{
    opts.UseSqlServer(DbConnection.GetSqlConnection());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();
app.MapControllers().RequireCors();

app.Run();
