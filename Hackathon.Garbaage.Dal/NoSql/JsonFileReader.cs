using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using Newtonsoft.Json;

namespace Hackathon.Garbage.Dal.NoSql
{
    public class JsonFileReader : IJsonFileReader
    {
        private string ReadFile(string path)
        {
            return File.ReadAllText(path);
        }

        public T GetData<T>()
        {
            var data = ReadFile("D:\\dev\\c#\\hackathon\\JSON\\szata_11_trawniki_polyg.json");
            var res =JsonConvert.DeserializeObject<T>(data);
            return res;
        }
    }
}
