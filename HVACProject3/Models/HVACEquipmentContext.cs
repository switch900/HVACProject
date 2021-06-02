using Microsoft.EntityFrameworkCore;

namespace HVACProject3.Models
{
    public class HVACEquipmentContext : DbContext
    {

        public HVACEquipmentContext(DbContextOptions<HVACEquipmentContext> options)
            : base(options)
        {
        }

        public DbSet<HVACEquipment> HVACEquipments { get; set; }
    }
}

