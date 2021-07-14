using System.ComponentModel.DataAnnotations;

namespace HVACProject3.ViewModels
{
    public class LoginViewModel
    {
        [Key]
        public string Username { get; set; }
        public string Password { get; set; }
    }

}
