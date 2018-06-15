using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Garbage.Dal.Entities
{
    public class OrderEntity : IEntity
    {
        public int Id { get; set; }
        public int FieldId { get; set; }
        public FieldEntity Field { get; set; }
        public int ExecutiveId { get; set; }
        public ExecutiveEntity Executive { get; set; }
        public DateTime DeadlineDate { get; set; }
        public DateTime FinishDate { get; set; }
    }
}
