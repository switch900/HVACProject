using Microsoft.EntityFrameworkCore;

namespace HVACProject3.Models
{
    public class HVACCompanyContext : DbContext
    {

        public HVACCompanyContext(DbContextOptions<HVACCompanyContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<HVACCustomer>().Property(p => p.CustomerId);
            builder.Entity<HVACEquipment>().Property(p => p.EquipmentId);
            builder.Entity<HVACEquipmentLocation>().Property(p => p.LocationId);
            builder.Entity<OfficeAdmin>().Property(p => p.EmployeeId);
            builder.Entity<SystemAdmin>().Property(p => p.EmployeeId);
            builder.Entity<Supervisor>().Property(p => p.EmployeeId);
            builder.Entity<Technician>().Property(p => p.EmployeeId);


            //builder.Seed();
        }

        public DbSet<HVACCustomer> HVACCustomers { get; set; }
        public DbSet<HVACEquipment> HVACEquipments { get; set; }
        public DbSet<HVACEquipmentLocation> HVACEquipmentLocations { get; set; }
        public DbSet<OfficeAdmin> OfficeAdmins { get; set; }
        public DbSet<SystemAdmin> SystemAdmins { get; set; }
        public DbSet<Supervisor> Supervisors { get; set; }
        public DbSet<Technician> Technicians { get; set; }
    }
}

