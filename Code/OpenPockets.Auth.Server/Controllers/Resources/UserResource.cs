using System.Collections.Generic;

namespace OpenPockets.Auth.Server.Controllers.Resources
{
    public class UserResource
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public IEnumerable<string> Roles { get; set; }
    }
}