using System.Threading.Tasks;
using Store.Data.Models;

namespace Store.Data.Repositories
{
    // User account repository
    public interface IAccountRepository
    {
        // Adds a user.
        // Returns the added user.
        Task<User> AddUserAsync(User user);

        // Gets a user by username.
        // Return the user if found or null if the username doesn't exist.
        Task<User> GetUserAsync(string username);

        // Deletes a user.
        // Returns the removed user or null if the username is not found.
        Task<User> DeleteUserAsync(string username);
    }
}