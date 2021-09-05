using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistency.Migrations
{
    public partial class PunetoretVizitoret : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PunetoriUserat",
                columns: table => new
                {
                    AppUserId = table.Column<string>(type: "TEXT", nullable: false),
                    PunetoriId = table.Column<Guid>(type: "TEXT", nullable: false),
                    IsHost = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PunetoriUserat", x => new { x.AppUserId, x.PunetoriId });
                    table.ForeignKey(
                        name: "FK_PunetoriUserat_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PunetoriUserat_Punetoret_PunetoriId",
                        column: x => x.PunetoriId,
                        principalTable: "Punetoret",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PunetoriUserat_PunetoriId",
                table: "PunetoriUserat",
                column: "PunetoriId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PunetoriUserat");
        }
    }
}
