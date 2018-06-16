using System;
using System.Collections.Generic;
using System.Text;

namespace Hackathon.Garbage.Dal.Models
{
    public class JsonDataModel
    {
        public int? Id { get; set; }
        public string Kategoria { get; set; }
        public JsonGeometryDataModel Json_geometry { get; set; }
    }

    public class JsonGeometryDataModel
    {
        public string Type { get; set; }
        public List<List<object>> Coordinates { get; set; }
    }


    public class JsonBllModel
    {
        public int? Id { get; set; }
        public string Category { get; set; }
        public JsonGeometryBllModel Geometry { get; set; }
    }
    public class JsonGeometryBllModel
    {
        public JsonGeometryBllModel()
        {
        }

        public JsonGeometryBllModel(JsonGeometryDataModel data)
        {
            Polygon = new List<decimal[]>();
            MultiPolygon = new List<decimal[][]>();
            if (data.Type.Equals("Polygon"))
            {
                data.Coordinates.ForEach(x =>
                {
                    x.ForEach(y =>
                    {
                        decimal[] tmp = new decimal[2];
                        Polygon.Add((decimal[])y);
                });
                });
            }
            else if (data.Type.Equals("MultiPolygon"))
            {
                data.Coordinates.ForEach(x =>
                {
                    x.ForEach(y =>
                    {
                        MultiPolygon.Add((decimal[][])y);
                    });
                });
            }
        }

        public List<decimal[]> Polygon { get; set; }
        public List<decimal[][]> MultiPolygon { get; set; }
    }
    public class Cordinates
    {
        public decimal[] Cords { get; set; }
    }
}
