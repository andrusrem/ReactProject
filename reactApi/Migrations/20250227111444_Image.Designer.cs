﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using reactApi.Models;

#nullable disable

namespace reactApi.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20250227111444_Image")]
    partial class Image
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0")
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

            modelBuilder.Entity("reactApi.Models.Activity", b =>
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

                    b.ToTable("Activities");
                });

            modelBuilder.Entity("reactApi.Models.Image", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int?>("AccommodationId")
                        .HasColumnType("int");

                    b.Property<int?>("ActivityId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Path")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("AccommodationId");

                    b.HasIndex("ActivityId");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("reactApi.Models.Image", b =>
                {
                    b.HasOne("reactApi.Models.Accommodation", null)
                        .WithMany("Images")
                        .HasForeignKey("AccommodationId");

                    b.HasOne("reactApi.Models.Activity", null)
                        .WithMany("Images")
                        .HasForeignKey("ActivityId");
                });

            modelBuilder.Entity("reactApi.Models.Accommodation", b =>
                {
                    b.Navigation("Images");
                });

            modelBuilder.Entity("reactApi.Models.Activity", b =>
                {
                    b.Navigation("Images");
                });
#pragma warning restore 612, 618
        }
    }
}
