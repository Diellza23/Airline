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
            if (context.Notat.Any()) return;
            
           var notat = new List<Nota>
           {
               new Nota
               {
                   Nota_Std = 10,
                   Date = DateTime.Now.AddMonths(-2),
                   Description = "Nota e vendosur para ca kohe", //i shton manualisht
                   
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