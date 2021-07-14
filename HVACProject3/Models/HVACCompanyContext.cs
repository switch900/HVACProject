using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace HVACProject3.Models
{
    public class HVACCompanyContext : IdentityDbContext<Employee, ApplicationRole, string>
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
            builder.Entity<IdentityRole>().HasData(
           new { Id = "1", Name = "Admin", NormalizedName = "ADMIN" },
           new { Id = "2", Name = "Technician", NormalizedName = "TECHNICIAN" }
       );


            //builder.Seed();
        }

        public DbSet<HVACCustomer> HVACCustomers { get; set; }
        public DbSet<HVACEquipment> HVACEquipments { get; set; }
        public DbSet<HVACEquipmentLocation> HVACEquipmentLocations { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Account> Account { get; set; }
        public DbSet<Owner> Owner { get; set; }
        public DbSet<Employee> Employee { get; set; }
    }
}

