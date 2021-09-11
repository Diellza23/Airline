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
       public static async Task SeedDataUdhetaret(DataContext context, UserManager<Udhetari> userManager)
        {
            if (!userManager.Users.Any())
            {
                var udhetaret = new List<Udhetari>
                {
                    new Udhetari{DisplayName = "DiellzaKosumi", Emri = "Diellza", Mbiemri = "Kosumi", Birthday = new DateTime(2001, 12, 12), UserName= "diellzakosumi", Email= "diellza@airline.net"},
                    new Udhetari{DisplayName = "Melanie B", Emri = "Melanie", Mbiemri = "Halliwel", Birthday = new DateTime(2002, 10, 05), UserName= "melb", Email= "melb@airline.net"},
                };

                foreach (var udhetari in udhetaret)
                {
                    await userManager.CreateAsync(udhetari, "Pa$$w0rd");
                }
            }

        }
       
   }
}