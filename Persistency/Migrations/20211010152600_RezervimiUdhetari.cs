using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistency.Migrations
{
    public partial class RezervimiUdhetari : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UdhetariId",
                table: "Rezervimet",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Rezervimet_UdhetariId",
                table: "Rezervimet",
                column: "UdhetariId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rezervimet_Udhetaret_UdhetariId",
                table: "Rezervimet",
                column: "UdhetariId",
                principalTable: "Udhetaret",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rezervimet_Udhetaret_UdhetariId",
                table: "Rezervimet");

            migrationBuilder.DropIndex(
                name: "IX_Rezervimet_UdhetariId",
                table: "Rezervimet");

            migrationBuilder.DropColumn(
                name: "UdhetariId",
                table: "Rezervimet");
        }
    }
}
