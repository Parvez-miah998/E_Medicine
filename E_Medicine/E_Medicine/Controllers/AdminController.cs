using E_Medicine.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Data.SqlClient;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace E_Medicine.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public string Token { get; private set; }

        public AdminController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("addUpdateMedicine")]

        public Response addUpdateMedicine(Medicines medicines)
        {
            DAL dal = new DAL();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            Response response = dal.addUpdateMedicine(medicines, connection);
            return response;
        }

        [HttpGet]
        [Route("userList")]
        public Response userList()
        {
            DAL dAL = new DAL();
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("EMedCS").ToString());
            Response response = dAL.userList(connection);
            return response;
        }

        public String GetToken(Users _userData)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                new Claim("ID", _userData.ID.ToString()),
                new Claim("LastName", _userData.LastName),
                new Claim("FirstName", _userData.FirstName),
                new Claim("Email", _userData.Email)
            };

            var key = new SymmetricSecurityKey(Encoding.UFT8.GetBytes(_configuration["Jwt:Key"]));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires:DateTime.UtcNow.AddMinutes(10),
                signingCredentials: signIn                
                );

            string.Token = new JwtSecurityTokenHandler().WriteToken(token);
            return Token;
        }


    }
}
