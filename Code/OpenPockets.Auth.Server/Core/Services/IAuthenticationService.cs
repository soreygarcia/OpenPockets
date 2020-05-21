using System.Threading.Tasks;
using OpenPockets.Auth.Server.Core.Services.Communication;

namespace OpenPockets.Auth.Server.Core.Services
{
    public interface IAuthenticationService
    {
         Task<TokenResponse> CreateAccessTokenAsync(string email, string password);
         Task<TokenResponse> RefreshTokenAsync(string refreshToken, string userEmail);
         void RevokeRefreshToken(string refreshToken);
    }
}