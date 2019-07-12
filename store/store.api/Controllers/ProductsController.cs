using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Store.Data.Models;
using Store.Data.Repositories;

namespace Store.API.Controllers
{
    // REST API for managing products
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        IProductsRepository _repository;

        public ProductsController(IProductsRepository repository) {
            _repository = repository;
        }

        // Get a list of all products
        [HttpGet]
        public async Task<IActionResult> GetAllAsync() {
            return Ok(await _repository.GetAllAsync());
        }

        // Get a product detail
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id) {
            var product = await _repository.GetAsync(id);
            if (product != null) {
                return Ok(product);
            } else {
                return NotFound();
            }
        }

        // Get a list of products by category.
        [HttpGet("categories/{category}")]
        public async Task<IActionResult> GetProductsByCategory(string category) {
            return Ok(await _repository.GetProductsByCategoryAsync(category));
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetCategories() {
            return Ok(await _repository.GetCategories());
        }

        // Adds a new product.
        // Returns the product created in the database.
        [HttpPost]
        public async Task<IActionResult> AddAsync([FromBody] Product product) {
            return Ok(await _repository.AddAsync(product));
        }

        // Updates a product.
        // Returns the updated product or not found if null.
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody] Product product) {
            var productFromDb = await _repository.UpdateAsync(id, product);
            if (productFromDb != null) {
                return Ok(productFromDb);
            } else {
                return NotFound();
            }
        }

        // Deletes a product.
        // Returns the deleted product or not found.
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id) {
            var productFromDb = await _repository.DeleteAsync(id);
            if (productFromDb != null) {
                return Ok(productFromDb);
            } else {
                return NotFound();
            }
        }
    }
}
