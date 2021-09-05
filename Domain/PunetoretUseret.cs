using System;

namespace Domain
{
    public class PunetoretUseret
    {
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public Guid PunetoriId { get; set; }
        public Punetori Punetori { get; set; }
        public bool IsHost { get; set; }
    }
}