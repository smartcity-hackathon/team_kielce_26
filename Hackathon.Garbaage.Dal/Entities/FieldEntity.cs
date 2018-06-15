﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Garbage.Dal.Entities
{
    public class FieldEntity : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CordinatesId { get; set; }

        public virtual List<CordinatesEntity> Cordinates { get; set; }
    }
}
