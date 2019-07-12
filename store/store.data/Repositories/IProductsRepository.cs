using System.Collections.Generic;
using System.Threading.Tasks;
using Store.Data.Models;

namespace Store.Data.Repositories {
    // Repository for managing products in the database.
    public interface IProductsRepository {

        // Returns all products in the database.
        Task<IList<Product>> GetAllAsync();

        // Returns a product with product id.
        // Returns null if not found.
        Task<Product> GetAsync(int id);

        // Returns a list of products for a category.
        Task<IList<Product>> GetProductsByCategoryAsync(string category);

        // Returns a list of categories.
        Task<IList<string>> GetCategories();

        // Adds a new product.
        // Returns the product created in the database.
        Task<Product> AddAsync(Product product);

        // Updates a product.
        // Returns the updated product or null if the product doesn't exist.
        Task<Product> UpdateAsync(int id, Product product);

        // Deletes a product.
        // Returns the deleted product or null if the product doesn't exist.
        Task<Product> DeleteAsync(int id);
    }
}