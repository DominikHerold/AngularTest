using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;

namespace AngularTest.Controllers
{
    [Route("api/[controller]")]
    public class EventDataController : Controller
    {
        public class EventData
        {
            public readonly string Id;

            public readonly string Name;

            public readonly string Date;

            public readonly string Time;

            public EventData(string id, string name, string date, string time)
            {
                Id = id;
                Name = name;
                Date = date;
                Time = time;
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<EventData> GetEventData()
        {
            yield return new EventData("1", "FirstName", "FirstDate", "FirstTime");
            yield return new EventData("2", "SecondName", "SecondDate", "SecondTime");
        }
    }
}
