using System.ComponentModel.DataAnnotations;

namespace OpenPockets.Auth.Server.Controllers.Resources
{
    public class RevokeTokenResource
    {
        [Required]
        public string Token { get; set; }
    }
}