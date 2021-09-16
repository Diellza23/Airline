using System;
using System.Threading.Tasks;
using Application.Rezervimet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class RezervimetController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetRezervimet()
        {
            return HandleResult(await Mediator.Send(new ListaR.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRezervimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Detajet.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> KrijoRezervimi(Rezervimi rezervimi) //kur e dergojme nje objekt brenda body request, i tregon qe me kqyr brenda body request pe rme mar at objekt edhe kqyr me i pershtat parametrat a jon tnjejta nbody
        {
            return HandleResult(await Mediator.Send(new KrijoR.Command { Rezervimi = rezervimi }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ModifikoRezervimi(Guid id, Rezervimi rezervimi)
        {
            rezervimi.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Rezervimi = rezervimi}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> FshijRezervimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Fshij.Command { Id = id }));
        }
    }
}