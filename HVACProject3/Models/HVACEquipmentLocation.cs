using System.ComponentModel.DataAnnotations;

namespace HVACProject3.Models
{
    public class HVACEquipmentLocation
    {
        [Key]
        public long LocationId { get; set; }
        public string Address { get; set; }
    }
}
