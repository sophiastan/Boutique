using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Store.Data.Models;
using Store.Data.Repositories;

namespace store.api.Controllers
{
    // REST API for managing user accounts
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        IAccountRepository _repository;

        public AccountController(IAccountRepository repository) {
            _repository = repository;
        }

        // Signs up for a user account
        [HttpPost("signup")]
        public async Task<IActionResult> SignupAsync([FromBody] User user)
        {
            Console.WriteLine($"Signed up user: {user.UserName}");
            return Ok(await _repository.AddUserAsync(user));
        }

        // Signs in a user
        [HttpPost("signin")]
        public async Task<IActionResult> SigninAsync([FromBody] User user)
        {
            var userFromDb = await _repository.GetUserAsync(user.UserName);
            if (userFromDb != null && userFromDb.Password == user.Password) {
                Console.WriteLine($"Signed in user: {user.UserName}");
                return Ok(userFromDb);
            }
            else {
                Console.WriteLine($"Failed to sign in user: {user.UserName}");
                return NotFound();
            }
        }

        // Signs out a user
        [HttpPost("signout")]
        public async Task<IActionResult> SignoutAsync([FromBody] User user)
        {
            var userFromDb = await _repository.GetUserAsync(user.UserName);
            if (userFromDb != null && userFromDb.Password == user.Password) {
                Console.WriteLine($"Signed out user: {user.UserName}");                
                return Ok(userFromDb);
            }
            else {
                Console.WriteLine($"Failed to sign out user: {user.UserName}");                
                return NotFound();
            }
        }

        // Removes a user account
        [HttpDelete("remove/{username}")]
        public async Task<IActionResult> RemoveAsync(string username)
        {
            var result = await _repository.DeleteUserAsync(username);
            if (result != null) {
                Console.WriteLine($"Deleted user: {username}");                
                return Ok(result);
            }
            else {
                Console.WriteLine($"Failed to delete user: {username}");                    
                return NotFound();
            }
        }
    }
}
