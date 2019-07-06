
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Store.Data.Models;

namespace Store.Data.Repositories {
    public class ProductsRepository : IProductsRepository {
        static int _id = 0;
        static IDictionary<int, Product> _products = new Dictionary<int, Product>();

       // Returns all products in the database.
        public async Task<IList<Product>> GetAllAsync() {
            return _products.Values.ToList();
        }

        // Returns a product with product id.
        // Returns null if not found.
        public async Task<Product> GetAsync(int id) {
            return _products.ContainsKey(id) ? _products[id] : null;
        }

        // Returns a list of products for a category.
        public async Task<IList<Product>> GetProductsByCategoryAsync(string category) {
            return _products.Values.Where(p => p.Category == category).ToList();
        }

        // Adds a new product.
        // Returns the product created in the database.
        public async Task<Product> AddAsync(Product product) {
            product.Id = _id++;
            _products.Add(product.Id, product);
            return product;
        }

        // Updates a product.
        // Returns the updated product or null if the product doesn't exist.
        public async Task<Product> UpdateAsync(int id, Product product) {
            if (_products.ContainsKey(id)) {
                _products[id] = product;
                return product;
            } else {
                return null;
            }
        }

        // Deletes a product.
        // Returns the deleted product or null if the product doesn't exist.
        public async Task<Product> DeleteAsync(int id) {
            if (_products.ContainsKey(id)) {
                var product = _products[id];
                _products.Remove(id);
                return product;
            } else {
                return null;
            }
        }

    }
}