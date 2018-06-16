using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Hackathon.Garbage.Dal.Models;
using Hackathon.Garbage.Dal.NoSql;
using Microsoft.AspNetCore.Mvc;

namespace Hackathon.Garbage.Dal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IJsonFileReader _jsonFileReader;
        private readonly IMapper _mapper;

        public  ValuesController(
            IJsonFileReader jsonFileReader,
            IMapper mapper
            )
        {
            _jsonFileReader = jsonFileReader;
            _mapper = mapper;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var res = _jsonFileReader.GetData<List<JsonDataModel>>();
            //var types = res.Select(x => x.Json_geometry.Type).Distinct();
            var result = _mapper.Map<List<JsonBllModel>>(res);
            return Ok(result);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
