using OpenPockets.Auth.Server.Core.Security.Hashing;
using OpenPockets.Auth.Server.Persistence;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace OpenPockets.Auth.Server
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var host = CreateHostBuilder(args).Build();

			using (var scope = host.Services.CreateScope())
			{
				var services = scope.ServiceProvider;
				var context = services.GetService<AppDbContext>();
				var passwordHasher = services.GetService<IPasswordHasher>();
				DatabaseSeed.Seed(context, passwordHasher);
			}

			host.Run();
		}

		public static IHostBuilder CreateHostBuilder(string[] args)
		{
			return Host.CreateDefaultBuilder(args)
										.ConfigureWebHostDefaults(webBuilder =>
										{
											webBuilder.UseStartup<Startup>();
										});
		}
	}
}