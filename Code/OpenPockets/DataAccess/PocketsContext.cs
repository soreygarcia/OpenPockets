using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace OpenPockets.DataAccess
{
    public class PocketsContext : DbContext
    {
        public PocketsContext(DbContextOptions<PocketsContext> options)
            : base(options)
        { }

        public DbSet<Models.CheckPoint> CheckPoints { get; set; }
        public DbSet<Models.Movement> Movements { get; set; }
        public DbSet<Models.Organization> Organizations { get; set; }
        public DbSet<Models.Person> People { get; set; }
        public DbSet<Models.Pocket> Pockets { get; set; }
        public DbSet<Models.Supplier> Suppliers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                   .SetBasePath(Directory.GetCurrentDirectory())
                   .AddJsonFile("appsettings.json")
                   .Build();
                var connectionString = configuration.GetConnectionString("PocketDb");
                optionsBuilder.UseSqlServer(connectionString);
            }
        }
    }
}
