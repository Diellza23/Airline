using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistency.Migrations
{
    public partial class KerkesaUdhetari : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Personat",
                table: "Rezervimet");

            migrationBuilder.AddColumn<string>(
                name: "UdhetariId",
                table: "Kerkesat",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Kerkesat_UdhetariId",
                table: "Kerkesat",
                column: "UdhetariId");

            migrationBuilder.AddForeignKey(
                name: "FK_Kerkesat_Udhetaret_UdhetariId",
                table: "Kerkesat",
                column: "UdhetariId",
                principalTable: "Udhetaret",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Kerkesat_Udhetaret_UdhetariId",
                table: "Kerkesat");

            migrationBuilder.DropIndex(
                name: "IX_Kerkesat_UdhetariId",
                table: "Kerkesat");

            migrationBuilder.DropColumn(
                name: "UdhetariId",
                table: "Kerkesat");

            migrationBuilder.AddColumn<string>(
                name: "Personat",
                table: "Rezervimet",
                type: "TEXT",
                nullable: true);
        }
    }
}
