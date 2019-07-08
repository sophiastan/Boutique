using Microsoft.EntityFrameworkCore;
using Store.Data.Models;

namespace Store.Data
{
    // Database context
    public class DataContext : DbContext
    {
        // Table of users
        public DbSet<User> Users { get; private set; }

        // Table of products
        public DbSet<Product> Products { get; private set; }

        public DataContext(DbContextOptions options)
        : base(options)
        {
        }

    }
}