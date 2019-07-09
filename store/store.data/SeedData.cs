using System.Linq;
using Microsoft.EntityFrameworkCore;
using Store.Data.Models;

namespace Store.Data
{
    // Class for populating database.
    public class SeedData : ISeedData
    {
        DataContext _context;

        public SeedData(DataContext context) {
            _context = context;
        }

        // Populates data in the database.
        public void SeedDatabase() {
            _context.Database.Migrate();
            PopulateAccounts();
            PopulateProducts();
        }

        // Populates users in the database.
        private void PopulateAccounts() {
            if (!_context.Users.Any()) {
                AddUser(CreateUser(userName: "johns", password: "passj", firstName: "John", lastName: "Smith",
                    contact: CreateContact(address: "123 Street Ave.", city: "San Jose", state: "CA",
                        zip: "95148", country: "USA", email: "johns@yahoo.com", phone: "408-444-5555")));
                AddUser(CreateUser("michellew", "passw", "Michelle", "Wu",
                    CreateContact("205 Washington St.", "Santa Clara", "CA", "95135", "USA",
                        "michellew@yahoo.com", "408-232-2901")));

                _context.SaveChanges();
            }
        }

        // Populates products in the database.
        private void PopulateProducts() {
            if (!_context.Products.Any()) {
                // Fruit category
                AddProduct(CreateProduct(name: "Strawberry", category: "Fruit", quantity: 5, price: 1.20));
                AddProduct(CreateProduct("Banana", "Fruit", 2, 0.75));

                // Sport category
                AddProduct(CreateProduct("Baseball", "Sport", 12, 3.99)); 
                AddProduct(CreateProduct("Volleyball", "Sport", 20, 5.99));

                _context.SaveChanges();
            }
        }

        // Adds a user to the database.
        private void AddUser(User user) {
            _context.Users.Add(user);
        }

        // Adds a product to the database.
        private void AddProduct(Product product) {
            _context.Products.Add(product);
        }

        // Creates a user.
        private User CreateUser(string userName, string password,
            string firstName, string lastName, Contact contact)
        {
            return new User() {
                UserName = userName,
                Password = password,
                FirstName = firstName,
                LastName = lastName,
                Contact = contact
            };
        }

        // Creates contact for a user.
        private Contact CreateContact(string address, string city,
            string state, string zip, string country,
            string email, string phone) 
        {
            return new Contact() {
                Address = address,
                City = city,
                State = state,
                Zip = zip,
                Country = country,
                Email = email,
                Phone = phone
            };
        }

        // Creates product.
        private Product CreateProduct(string name, string category, int quantity, double price) {
            return new Product() {
                Name = name,
                Category = category,
                Quantity = quantity,
                Price = price
            };
        }
    }
}