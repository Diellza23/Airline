using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Studentet;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class StudentetController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetStudentet()
        {
            return HandleResult(await Mediator.Send(new ListaS.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudenti(Guid id)
        {
            return HandleResult(await Mediator.Send(new Detajet.Query { StudentiId = id }));
        }

        [HttpPost]
        public async Task<IActionResult> KrijoStudenti(Studenti studenti) //kur e dergojme nje objekt brenda body request, i tregon qe me kqyr brenda body request pe rme mar at objekt edhe kqyr me i pershtat parametrat a jon tnjejta nbody
        {
            return HandleResult(await Mediator.Send(new KrijoS.Command { Studenti = studenti }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ModifikoStudenti(Guid id, Studenti studenti)
        {
            studenti.StudentiId = id;
            return HandleResult(await Mediator.Send(new Modifiko.Command { Studenti = studenti }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> FshijStudenti(Guid id)
        {
            return HandleResult(await Mediator.Send(new Fshij.Command { StudentiId = id }));
        }
    }
}