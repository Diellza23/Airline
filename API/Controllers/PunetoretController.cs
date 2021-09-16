using System;
using System.Threading.Tasks;
using Application.Punetoret;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class PunetoretController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetPunetoret()
        {
            return HandleResult(await Mediator.Send(new ListaP.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPunetori(Guid id)
        {
            return HandleResult(await Mediator.Send(new Detajet.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> KrijoPunetori(Punetori punetori) //kur e dergojme nje objekt brenda body request, i tregon qe me kqyr brenda body request pe rme mar at objekt edhe kqyr me i pershtat parametrat a jon tnjejta nbody
        {
            return HandleResult(await Mediator.Send(new KrijoP.Command { Punetori = punetori }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ModifikoPunetori(Guid id, Punetori punetori)
        {
            punetori.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Punetori = punetori}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> FshijPunetori(Guid id)
        {
            return HandleResult(await Mediator.Send(new Fshij.Command { Id = id }));
        }
    }
}