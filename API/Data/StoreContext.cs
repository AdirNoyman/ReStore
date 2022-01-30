using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        // 'base' = the class we inherit from -> DBContext
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        // this is the representaion of our Products table in the ORM
        public DbSet<Product> Products { get; set; }
    }
}