using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Store.Data.Models;

namespace Store.Data.Repositories
{
    // Repository for managing accounts in the database.
    public class AccountRepository : IAccountRepository
    {
        DataContext _context;

        public AccountRepository(DataContext context) {
            _context = context;
        }

        // Gets all users
        async public Task<IList<User>> GetAllUsersAsync() {
            return await _context.Users.ToListAsync();
        }

        // Gets a user by username.
        // Returns the user or null if not found.
        async public Task<User> GetUserAsync(string username)
        {
            return await _context.Users.Include(u => u.Contact)
                .FirstOrDefaultAsync(u => u.UserName == username);
        }
        
        // Adds a new user.
        // Returns the user stored in the database.
        async public Task<User> AddUserAsync(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return await _context.Users.FirstOrDefaultAsync(u => user.Id == user.Id);
        }

        // Updates a user.
        // Returns the updated user.
        async public Task<User> UpdateUserAsync(string username, User user) 
        {
            var userDb = await _context.Users.Include(u => u.Contact)
                .SingleOrDefaultAsync(u => u.UserName == username);
            if (userDb == null) return null;
            UpdateUser(user, userDb);
            await _context.SaveChangesAsync();
            return userDb;
        }
 
        // Deletes a user by username.
        // Returns the deleted user or null if not found.
        async public Task<User> DeleteUserAsync(string username)
        {
            var userDb = await _context.Users.FirstOrDefaultAsync(u => u.UserName == username);
            if (userDb != null) {
                _context.Users.Remove(userDb);
                await _context.SaveChangesAsync();
            }
            return userDb;
        }

        private void UpdateUser(User user, User userDb) {
            userDb.Password = user.Password;
            userDb.FirstName = user.FirstName;
            userDb.LastName = user.LastName;
            userDb.Contact.Address = user.Contact.Address;
            userDb.Contact.City = user.Contact.City;
            userDb.Contact.State = user.Contact.State;
            userDb.Contact.Zip = user.Contact.Zip;
            userDb.Contact.Email = user.Contact.Email;
            userDb.Contact.Phone = user.Contact.Phone;
        }
    }
}