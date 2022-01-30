using System;
using API.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
           var host = CreateHostBuilder(args).Build();
           // 'using' key word instruct .NET to release memory (Garbage collect) that the services we run in scope, are using
           using var scope = host.Services.CreateScope();
           var context = scope.ServiceProvider.GetRequiredService<StoreContext>();
           // If there we will exceoptions, we will catch them and logg them otherwise they will be unhandeled exceptions and they will crash our app
           var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
           try {

               context.Database.Migrate();
               DbInitilaizer.Initialize(context);

           } catch (Exception ex) {

               logger.LogError(ex, "Probelm migrating data");
           }
          
          host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
