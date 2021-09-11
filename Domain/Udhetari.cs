using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class Udhetari : IdentityUser
    {
        public string DisplayName { get; set; }

        public DateTime Birthday { get; set; }
        public string Emri { get; set; }
        public string Mbiemri { get; set; }
        // public ICollection<Fluturimi> Fluturimet { get; set; }
    
    }
}