using Microsoft.EntityFrameworkCore;
using Planify.API.Models;

namespace Planify.API.Data
{
    public class EventDbContext(DbContextOptions<EventDbContext> options): DbContext(options)
    {
        public DbSet<Event> Events => Set<Event>();

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var entries = ChangeTracker.Entries<Event>();

            foreach (var entry in entries)
            {
                if (entry.State == EntityState.Added)
                    entry.Entity.CreatedAt = DateTime.UtcNow;

                if (entry.State == EntityState.Modified)
                    entry.Entity.LastModifiedAt = DateTime.UtcNow;
            }

            return await base.SaveChangesAsync(cancellationToken);
        }
    }
}
