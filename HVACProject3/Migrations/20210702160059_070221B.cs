using Microsoft.EntityFrameworkCore.Migrations;

namespace HVACProject3.Migrations
{
    public partial class _070221B : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
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
    }
}
