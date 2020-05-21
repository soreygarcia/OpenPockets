using System.Threading.Tasks;

namespace OpenPockets.Auth.Server.Core.Repositories
{
    public interface IUnitOfWork
    {
         Task CompleteAsync();
    }
}