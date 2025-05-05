using Microsoft.Data.SqlClient;

namespace ImportPersons.DB;

public class DbConnection
{
    private static string _connectionString;

    private static SqlConnectionStringBuilder BuildSqlConnectionFromConnectionString()
    {
        var sqlConnStringBuilder = new SqlConnectionStringBuilder { ConnectionString = _connectionString };
        
        return sqlConnStringBuilder;
    }
    
    private static SqlConnection CreateConnectionToDb()
    {
        var sqlConnStringBuilder = BuildSqlConnectionFromConnectionString();
        
         return new SqlConnection(sqlConnStringBuilder.ConnectionString);
    }

    public static void SetConnectionString(string? connectionString)
    {
        if (string.IsNullOrEmpty(connectionString))
        {
            throw new ArgumentNullException(nameof(connectionString), "Connection string cannot be null or empty.");
        }
        
        _connectionString = connectionString;
    }

    public static SqlConnection GetSqlConnection()
    {
        return CreateConnectionToDb();
    }
}