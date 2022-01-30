using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
// Here we create the DB tables schemas. Each class here will become a table in the Database
namespace API.Entities
{
    public class Product
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public long Price { get; set; }
        public string ImageUrl { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public int QuantityInStock { get; set; }

    }
}