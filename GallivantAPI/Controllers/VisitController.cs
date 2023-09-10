using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;

namespace GallivantAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class VisitController : ControllerBase
{
    private readonly IConfiguration _configuration;
    public VisitController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpGet]
    public List<Models.Visit> Get()
    {
        string connString = _configuration.GetConnectionString("Gallivant");
        SqlConnection conn = new SqlConnection(connString);
        DB.Visit visitDB = new DB.Visit(conn);
        List<Models.Visit> visits = visitDB.Read();
        return visits;
    }
}
