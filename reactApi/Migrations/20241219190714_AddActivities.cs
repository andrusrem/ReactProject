using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace reactApi.Migrations
{
    /// <inheritdoc />
    public partial class AddActivities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Activities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    TitleENG = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    TitleEST = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    TitleRUS = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    TitleFIN = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false),
                    BodyENG = table.Column<string>(type: "varchar(248)", maxLength: 248, nullable: false),
                    BodyEST = table.Column<string>(type: "varchar(248)", maxLength: 248, nullable: false),
                    BodyRUS = table.Column<string>(type: "varchar(248)", maxLength: 248, nullable: false),
                    BodyFIN = table.Column<string>(type: "varchar(248)", maxLength: 248, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Activities", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Activities");
        }
    }
}
