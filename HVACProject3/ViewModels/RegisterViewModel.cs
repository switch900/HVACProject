using System.ComponentModel.DataAnnotations;

namespace HVACProject3.ViewModels
{
    public class RegisterViewModel
    {
        [Required]
        [EmailAddress]
        [Key]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
