using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistency
{
   public class Vlerat
   {
       public static async Task SeedData(DataContext context) //datacontext si parameter
       {
            if (context.Punetoret.Any()) return;
            
           var notat = new List<Punetori>
           {
               new Punetori
               {
                    Emri = "Diellza",
                    Mbiemri = "Kosumi",
                    Date = DateTime.Now.AddMonths(-2),
                    AeroplanId = 7
               },
                                               
           };

        //     if (context.Konsultimet.Any()) return;

        //    var konsultimet = new List<Konsultime>
        //    {
        //        new Konsultime
        //        {
        //            Koha = DateTime.Now.AddMonths(-2),
        //            Description = "Data e konsultimeve",
                       
        //        },
                                          
        //    };

            // await context.Konsultimet.AddRangeAsync(konsultimet);
           // await context.Notat.AddRangeAsync(notat);
           await context.SaveChangesAsync();
       }
       
   }
}