using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Notat;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class NotatController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetNotat()
        {
            return HandleResult(await Mediator.Send(new Lista.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetNota(Guid id)
        {
            return HandleResult(await Mediator.Send(new Detajet.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> KrijoNota(Nota nota) //kur e dergojme nje objekt brenda body request, i tregon qe me kqyr brenda body request pe rme mar at objekt edhe kqyr me i pershtat parametrat a jon tnjejta nbody
        {
            return HandleResult(await Mediator.Send(new Krijo.Command { Nota = nota }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ModifikoNota(Guid id, Nota nota)
        {
            nota.Id = id;
            return HandleResult(await Mediator.Send(new Modifiko.Command { Nota = nota }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> FshijNota(Guid id)
        {
            return HandleResult(await Mediator.Send(new Fshij.Command { Id = id }));
        }
    }
}