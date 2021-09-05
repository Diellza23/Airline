using System;
using System.Threading.Tasks;
using Application.Fluturimet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class FluturimetController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetFluturimet()
        {
            return HandleResult(await Mediator.Send(new ListaF.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFluturimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Detajet.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> KrijoFluturimi(Fluturimi fluturimi) //kur e dergojme nje objekt brenda body request, i tregon qe me kqyr brenda body request pe rme mar at objekt edhe kqyr me i pershtat parametrat a jon tnjejta nbody
        {
            return HandleResult(await Mediator.Send(new KrijoF.Command { Fluturimi = fluturimi }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ModifikoFluturimi(Guid id, Fluturimi fluturimi)
        {
            fluturimi.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Fluturimi = fluturimi}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> FshijFluturimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Fshij.Command { Id = id }));
        }
    }
}