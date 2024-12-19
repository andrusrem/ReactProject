﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using reactApi.Models;

#nullable disable

namespace reactApi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20241219183759_InitialMigrate")]
    partial class InitialMigrate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("reactApi.Models.Accommodation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("BodyENG")
                        .IsRequired()
                        .HasMaxLength(248)
                        .HasColumnType("varchar(248)");

                    b.Property<string>("BodyEST")
                        .IsRequired()
                        .HasMaxLength(248)
                        .HasColumnType("varchar(248)");

                    b.Property<string>("BodyFIN")
                        .IsRequired()
                        .HasMaxLength(248)
                        .HasColumnType("varchar(248)");

                    b.Property<string>("BodyRUS")
                        .IsRequired()
                        .HasMaxLength(248)
                        .HasColumnType("varchar(248)");

                    b.Property<string>("TitleENG")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("TitleEST")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("TitleFIN")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("TitleRUS")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.ToTable("Accommodations");
                });
#pragma warning restore 612, 618
        }
    }
}