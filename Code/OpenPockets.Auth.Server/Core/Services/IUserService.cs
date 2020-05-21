using System.Threading.Tasks;
using OpenPockets.Auth.Server.Core.Models;
using OpenPockets.Auth.Server.Core.Services.Communication;

namespace OpenPockets.Auth.Server.Core.Services
{
    public interface IUserService
    {
         Task<CreateUserResponse> CreateUserAsync(User user, params ERole[] userRoles);
         Task<User> FindByEmailAsync(string email);
    }
}