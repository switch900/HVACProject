using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace HVACProject3.Models
{
    public class Employee : IdentityUser
    {
        [Key]
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string AccessLevel { get; set; }
        public string Password { get; set; }
    }
}
