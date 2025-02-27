using Microsoft.EntityFrameworkCore;

namespace reactApi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options){

        }

        public DbSet<Accommodation> Accommodations { get; set; }
        public DbSet<Activity> Activities {get; set;}
        public DbSet<Image> Images  {get; set;}
    }
}