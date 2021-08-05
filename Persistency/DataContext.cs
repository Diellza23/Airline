using Domain;
using Microsoft.EntityFrameworkCore;
// using Persistency.Migrations;

namespace Persistency
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Punetori> Punetoret { get; set; }
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            // base.OnModelCreating(builder);
            // builder.Entity<Studenti>(x => x.HasKey(nn => new {nn.Id, nn.Nota.Id}));

            // builder.Entity<Studenti>()
            // .HasOne(ns => ns.StudentiId)
            // .WithOne(n => n.Notat)
            // .HasForeignKey(nn => nn.StudentiId);
        }
    }
}