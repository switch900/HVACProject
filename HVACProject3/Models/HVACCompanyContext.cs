using Microsoft.EntityFrameworkCore;
using HVACProject3.Models;

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
            builder.Entity<HVACEquipment>().Property(p => p.EquipmentId);
            builder.Entity<HVACEquipmentLocation>().Property(p => p.LocationId);
            builder.Entity<HVACCustomer>().Property(p => p.CustomerId);
            builder.Entity<Employee>().Property(p => p.EmployeeId);


            //builder.Seed();
        }

        public DbSet<HVACCustomer> HVACCustomers { get; set; }
        public DbSet<HVACEquipment> HVACEquipments { get; set; }
        public DbSet<HVACEquipmentLocation> HVACEquipmentLocations { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<HVACProject3.Models.Account> Account { get; set; }
        public DbSet<HVACProject3.Models.Owner> Owner { get; set; }
        public DbSet<HVACProject3.Models.Employee> Employee { get; set; }
    }
}

