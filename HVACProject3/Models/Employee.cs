namespace HVACProject3.Models
{
    public abstract class Employee
    {
        public long EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string AccessLevel { get; set; }
    }
}
