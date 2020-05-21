using System.Threading.Tasks;
using OpenPockets.Auth.Server.Core.Models;

namespace OpenPockets.Auth.Server.Core.Repositories
{
    public interface IUserRepository
    {
        Task AddAsync(User user, ERole[] userRoles);
        Task<User> FindByEmailAsync(string email);
    }
}