
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Store.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Store.Data.Repositories {
    public class ProductsRepository : IProductsRepository {

        DataContext _context;

        public ProductsRepository(DataContext context) {
            _context = context;
        }
 
        // Returns all products in the database.
        public async Task<IList<Product>> GetAllAsync() {
            return await _context.Products.ToListAsync();
        }

        // Returns a product with product id.
        // Returns null if not found.
        public async Task<Product> GetAsync(int id) {
            return await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
        }

        // Returns a list of products for a category.
        public async Task<IList<Product>> GetProductsByCategoryAsync(string category) {
            return await _context.Products.Where(p => p.Category == category).ToListAsync();
        }

        // Adds a new product.
        // Returns the product created in the database.
        public async Task<Product> AddAsync(Product product) {
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();
            return product;
        }

        // Updates a product.
        // Returns the updated product or null if the product doesn't exist.
        public async Task<Product> UpdateAsync(int id, Product product) {
            var productDb = await _context.Products.SingleOrDefaultAsync(p => p.Id == id);
            if (productDb == null) return null;
            UpdateProduct(product, productDb);
            await _context.SaveChangesAsync();
            return productDb;
        }

        // Deletes a product.
        // Returns the deleted product or null if the product doesn't exist.
        public async Task<Product> DeleteAsync(int id) {
            var productDb = await _context.Products.SingleOrDefaultAsync(p => p.Id == id);
            if (productDb != null) {
                _context.Products.Remove(productDb);
                await _context.SaveChangesAsync();
            }
            return productDb;
        }

        private void UpdateProduct(Product product, Product productDb) {
            productDb.Name = product.Name;
            productDb.Category = product.Category;
        }
    }
}