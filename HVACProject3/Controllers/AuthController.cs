using HVACProject3.Models;
using HVACProject3.ViewModels;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace HVACProject3.Controllers
{
    [EnableCors("HVACEquipmentPolicy")]
    [Route("[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly UserManager<Employee> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly IConfiguration _configuration;

        public AuthController(UserManager<Employee> userManager, RoleManager<ApplicationRole> roleManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;
            _roleManager = roleManager;
        }

        [Route("register")]
        [HttpPost]
        public async Task<ActionResult> InsertUser([FromBody] Employee model)
        {
            var user = new Employee
            {
                Email = model.Email,
                UserName = model.UserName,
                FirstName = model.FirstName,
                LastName = model.LastName,
                BirthDate = model.BirthDate,
                Street = model.Street,
                City = model.City,
                Province = model.Province,
                PostalCode = model.PostalCode,
                Country = model.Country,
                DateCreated = model.DateCreated,
                SecurityStamp = Guid.NewGuid().ToString()
            };

            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                var role = "Technician";
                await _userManager.AddToRoleAsync(user, role);
            }
            return Ok(new { Username = user.UserName });
        }

        [Route("login")]
        [HttpPost]
        public async Task<ActionResult> Login([FromBody] LoginViewModel model)
            {
                var user = await _userManager.FindByNameAsync(model.Username);
                var role = await _roleManager.FindByIdAsync(user.Id);

                if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
                {
                    var claim = new List<Claim> {
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName)
                };

                    var userRoles = await _userManager.GetRolesAsync(user);

                    claim.Add(new Claim("roles", string.Join(",", userRoles.ToArray())));
                    claim.Add(new Claim("users", string.Join(",", user.Id)));

                    var signinKey = new SymmetricSecurityKey(
                      Encoding.UTF8.GetBytes(_configuration["Jwt:SigningKey"]));

                    int expiryInMinutes = Convert.ToInt32(_configuration["Jwt:ExpiryInMinutes"]);

                    var token = new JwtSecurityToken(
                      issuer: _configuration["Jwt:Site"],
                      audience: _configuration["Jwt:Site"],
                      claims: claim,
                      expires: DateTime.UtcNow.AddMinutes(expiryInMinutes),
                      signingCredentials: new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256)
                    );

                    return Ok(
                      new
                      {
                          token = new JwtSecurityTokenHandler().WriteToken(token),
                          expiration = token.ValidTo,
                          userName = token.Claims.ElementAt(0).Value,
                          credential = token.Claims.ElementAt(1).Value,
                          id = token.Claims.ElementAt(2).Value
                      });
                }
                return Unauthorized();
            }
        }

}
