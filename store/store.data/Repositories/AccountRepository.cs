using System.Collections.Generic;
using System.Threading.Tasks;
using Store.Data.Models;

namespace Store.Data.Repositories
{
    // Repository for managing accounts in the database.
    public class AccountRepository : IAccountRepository
    {
        static IDictionary<string, User> _users = new Dictionary<string, User>();
        
        // Adds a new user.
        // Returns the user stored in the database.
        async public Task<User> AddUserAsync(User user)
        {
            _users.Add(user.UserName, user);

            return user;
        }

        // Gets a user by username.
        // Returns the user or null if not found.
        async public Task<User> GetUserAsync(string username)
        {
            return _users.ContainsKey(username) ? _users[username] : null;
        }

        // Deletes a user by username.
        // Returns the deleted user or null if not found.
        async public Task<User> DeleteUserAsync(string username)
        {
            if (_users.ContainsKey(username)) {
                var user = _users[username];
                _users.Remove(username);
                return user;
            }
            else {
                return null;
            }
        }
    }
}