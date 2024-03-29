﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HVACProject3.Models
{
    public class HVACEquipmentLocation
    {
        [Key]
        public int LocationId { get; set; }
        public string LocationName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string PostalCode { get; set; }

        public ICollection<HVACEquipment> HvacEquipment { get; set; }
    }
}
