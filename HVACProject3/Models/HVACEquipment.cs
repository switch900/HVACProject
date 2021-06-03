using System.ComponentModel.DataAnnotations;

namespace HVACProject3.Models
{
    public class HVACEquipment
    {
        [Key]
        public long EquipmentId { get; set; }
        public string Name { get; set; }
        public HVACEquipmentLocation Location { get; set; }
    }
}
