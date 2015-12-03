using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PetShopAngular.Models
{
    public class Pet
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Species { get; set; }
        [Range(0, double.MaxValue)]
        public double Weight { get; set; }

        public string ImageUrl { get; set; }
    }
}