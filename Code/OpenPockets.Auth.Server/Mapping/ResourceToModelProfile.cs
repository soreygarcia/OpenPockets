using AutoMapper;
using OpenPockets.Auth.Server.Controllers.Resources;
using OpenPockets.Auth.Server.Core.Models;

namespace OpenPockets.Auth.Server.Mapping
{
    public class ResourceToModelProfile : Profile
    {
        public ResourceToModelProfile()
        {
            CreateMap<UserCredentialsResource, User>();
        }
    }
}