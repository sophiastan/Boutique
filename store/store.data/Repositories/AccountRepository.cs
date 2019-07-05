using System.Collections.Generic;
using System.Threading.Tasks;
using Store.Data.Models;

namespace Store.Data.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        static IDictionary<string, User> _users = new Dictionary<string, User>();
        
        async public Task<User> AddUserAsync(User user)
        {
            _users.Add(user.UserName, user);

            return user;
        }

        async public Task<User> GetUserAsync(string username)
        {
            return _users.ContainsKey(username) ? _users[username] : null;
        }

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