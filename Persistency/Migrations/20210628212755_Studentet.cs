using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistency.Migrations
{
    public partial class Studentet : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Studentet",
                columns: table => new
                {
                    StudentiId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    Mbiemri = table.Column<string>(type: "TEXT", nullable: true),
                    Niveli = table.Column<string>(type: "TEXT", nullable: true),
                    Drejtimi = table.Column<string>(type: "TEXT", nullable: true),
                    Date = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Studentet", x => x.StudentiId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Notat_StudentiId",
                table: "Notat",
                column: "StudentiId");

            migrationBuilder.AddForeignKey(
                name: "FK_Notat_Studentet_StudentiId",
                table: "Notat",
                column: "StudentiId",
                principalTable: "Studentet",
                principalColumn: "StudentiId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Notat_Studentet_StudentiId",
                table: "Notat");

            migrationBuilder.DropTable(
                name: "Studentet");

            migrationBuilder.DropIndex(
                name: "IX_Notat_StudentiId",
                table: "Notat");
        }
    }
}
