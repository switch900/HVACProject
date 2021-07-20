using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;

namespace HVACProject3.Models
{
    public class HVACCompanyContext : IdentityDbContext<Employee,ApplicationRole, string>
    {

        public HVACCompanyContext(DbContextOptions<HVACCompanyContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //builder.Entity<HVACEquipment>().Property(p => p.EquipmentId);
            //builder.Entity<HVACEquipmentLocation>().Property(p => p.LocationId);
            //builder.Entity<HVACCustomer>().Property(p => p.CustomerId);
            //builder.Entity<Employee>().Property(p => p.Id);
            //builder.Entity<IdentityRole>().HasData(
            //     new { Name = "Admin", NormalizedName = "ADMIN" },
            //     new { Name = "Technician", NormalizedName = "TECHNICIAN" }
            // );

            //builder.Entity<IdentityUserLogin<string>>().HasKey(k => k.UserId);
            //builder.Entity<IdentityUserRole<string>>().HasKey(k => k.UserId);
            //builder.Entity<IdentityUserToken<string>>().HasKey(k => k.UserId);


            //builder.Seed();
        }

        public DbSet<HVACCustomer> HVACCustomers { get; set; }
        public DbSet<HVACEquipment> HVACEquipments { get; set; }
        public DbSet<HVACEquipmentLocation> HVACEquipmentLocations { get; set; }
        //public DbSet<Employee> Employees { get; set; }
        //public DbSet<Account> Account { get; set; }
        //public DbSet<Owner> Owner { get; set; }
        public DbSet<Employee> Employee { get; set; }
    }
}

