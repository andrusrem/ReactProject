using Microsoft.EntityFrameworkCore;
using reactApi.Models;
using DotNetEnv;


namespace reactApi
{
    public static class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            //Load .env file
            DotNetEnv.Env.Load();
            var connectionString = Environment.GetEnvironmentVariable("DB_CONNECTION_STRING");

            if (string.IsNullOrEmpty(connectionString))
            {
                throw new Exception("Connection string not found in environment variables.");
            }
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
            options.UseMySQL(
                connectionString,
                mySqlOptions => mySqlOptions.EnableRetryOnFailure()
            ));
            Console.WriteLine(connectionString);
            // Add services to the container.
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddControllers();

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();

        }
    }
}
