using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistency
{
   public class Vlerat
   {
       public static async Task SeedData(DataContext context, UserManager<AppUser> userManager) //datacontext si parameter
       {
           if (!userManager.Users.Any())
           {
               var users = new List<AppUser>
               {
                   new AppUser{DisplayName = "Bob", UserName= "bob", Email = "bob@test.com"},
                   new AppUser{DisplayName = "Tom", UserName= "tom", Email = "tom@test.com"},
                   new AppUser{DisplayName = "Didi", UserName= "didi", Email = "didi@test.com"}
               };
               
               foreach (var user in users)
               {
                   await userManager.CreateAsync(user, "Pa$$w0rd");
               }
           }

            if (context.Punetoret.Any()) return;
            
           var punetoret = new List<Punetori>
           {
               new Punetori
               {
                    Emri = "Diellza",
                    Mbiemri = "Kosumi",
                    Date = DateTime.Now.AddMonths(-2),
                    AeroplanId = "Didi"
               },
                                               
           };

           await context.SaveChangesAsync();
       }
       
   }
}