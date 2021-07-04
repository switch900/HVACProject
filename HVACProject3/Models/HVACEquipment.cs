using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HVACProject3.Models
{
    public class HVACEquipment
    {
        [Key]
       
        public int EquipmentId { get; set; }
        public string Name { get; set; }

        public int LocationId { get; set; }
        public HVACEquipmentLocation Location { get; set; }
        //public int HVACCustomerCustomerId { get; internal set; }
        //public HVACCustomer Customer { get; internal set; }
    }
}
