using System;
using System.Collections.Generic;

namespace Domain
{
    public class Nota
    {
      public Guid Id {get; set;}

      public DateTime Date {get; set;}

      public int Nota_Std {get; set;}

      public string Description {get; set;}

      public Guid StudentiId {get;set;}

      public Studenti Studenti {get;set;}

      

    }
}