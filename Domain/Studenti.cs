using System;
using System.Collections.Generic;

namespace Domain
{
    public class Studenti
    {
        public Guid StudentiId { get; set; }
        public string Emri { get; set; }
        public string Mbiemri { get; set; }
        public string Niveli { get; set; }
        public string Drejtimi { get; set; }
        public string Date { get; set; }
        public ICollection<Nota> Nota {get;set;}
        
    }
}