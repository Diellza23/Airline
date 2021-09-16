using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistency
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Punetori> Punetoret { get; set; }
        public DbSet<Fluturimi> Fluturimet {get; set;}
        public DbSet<Udhetari> Udhetaret {get; set;}
        public DbSet<Rezervimi> Rezervimet{get;set;}

        // protected override void OnModelCreating(ModelBuilder builder)
        // {
        //     base.OnModelCreating(builder);
        //     builder.Entity<PunetoretUseret>(x => x.HasKey(aa => new {aa.AppUserId, aa.PunetoriId}));
            
        //     builder.Entity<PunetoretUseret>()
        //     .HasOne(u => u.AppUser)
        //     .WithMany(a => a.Punetoret)
        //     .HasForeignKey(aa => aa.AppUserId);

        //     builder.Entity<PunetoretUseret>()
        //     .HasOne(u => u.Punetori)
        //     .WithMany(a => a.Vizitoret)
        //     .HasForeignKey(aa => aa.PunetoriId);
        // }
        
    }
}