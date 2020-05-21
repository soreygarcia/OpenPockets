using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenPockets.DataAccess
{
    public class PocketsContextFactory : IDesignTimeDbContextFactory<PocketsContext>
    {
        public PocketsContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<PocketsContext>();

            return new PocketsContext(optionsBuilder.Options);
        }
    }
}