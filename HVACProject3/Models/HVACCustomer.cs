using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace HVACProject3.Models
{
    public class HVACCustomer
    {
        [Key]
        public long CustomerId { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }

        public ICollection<HVACEquipment> HVACEquipments { get; set; }
    }
}
