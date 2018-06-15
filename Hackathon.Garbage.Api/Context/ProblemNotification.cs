using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hackathon.Garbage.Api.DbContext
{
    [Table(name: "ProblemNotification")]
    public class ProblemNotification
    {
        [Key]
        public int Id { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public string UrlImage { get; set; }
    }
}
