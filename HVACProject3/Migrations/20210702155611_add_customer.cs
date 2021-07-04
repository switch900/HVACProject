using Microsoft.EntityFrameworkCore.Migrations;

namespace HVACProject3.Migrations
{
    public partial class add_customer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HVACEquipments_HVACCustomers_HVACCustomerCustomerId",
                table: "HVACEquipments");

            migrationBuilder.DropIndex(
                name: "IX_HVACEquipments_HVACCustomerCustomerId",
                table: "HVACEquipments");

            migrationBuilder.DropColumn(
                name: "HVACCustomerCustomerId",
                table: "HVACEquipments");

            migrationBuilder.AddColumn<int>(
                name: "CustomerId",
                table: "HVACEquipments",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_HVACEquipments_CustomerId",
                table: "HVACEquipments",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_HVACEquipments_HVACCustomers_CustomerId",
                table: "HVACEquipments",
                column: "CustomerId",
                principalTable: "HVACCustomers",
                principalColumn: "CustomerId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HVACEquipments_HVACCustomers_CustomerId",
                table: "HVACEquipments");

            migrationBuilder.DropIndex(
                name: "IX_HVACEquipments_CustomerId",
                table: "HVACEquipments");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "HVACEquipments");

            migrationBuilder.AddColumn<int>(
                name: "HVACCustomerCustomerId",
                table: "HVACEquipments",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_HVACEquipments_HVACCustomerCustomerId",
                table: "HVACEquipments",
                column: "HVACCustomerCustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_HVACEquipments_HVACCustomers_HVACCustomerCustomerId",
                table: "HVACEquipments",
                column: "HVACCustomerCustomerId",
                principalTable: "HVACCustomers",
                principalColumn: "CustomerId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
