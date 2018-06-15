using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Hackathon.Garbage.Api.DbContext;
using Microsoft.EntityFrameworkCore;
namespace Hackathon.Garbage.Api.Context 
{
    public class GarbageDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public GarbageDbContext(DbContextOptions<GarbageDbContext> options) : base(options)
        {
        }
        
        public DbSet<ProblemNotification> ProblemNotifications { get; set; }
    }
}
