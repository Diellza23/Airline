// using System;
// using System.Collections.Generic;
// using System.Threading;
// using System.Threading.Tasks;
// using Application.Konsultimet;
// using Domain;
// using Microsoft.AspNetCore.Mvc;

// namespace API.Controllers
// {
//     public class KonsultimetController : BaseApiController
//     {
//         [HttpGet]
//         public async Task<IActionResult> GetKonsultimet()
//         {
//             return HandleResult(await Mediator.Send(new List.Query()));
//         }

//         [HttpGet("{id}")]
//         public async Task<IActionResult> GetKonsultime(Guid id)
//         {
//             return HandleResult(await Mediator.Send(new Detajet.Query { Id = id }));
//         }

//         [HttpPost]
//         public async Task<IActionResult> KrijoKonsultime(Konsultime konsultime) //kur e dergojme nje objekt brenda body request, i tregon qe me kqyr brenda body request pe rme mar at objekt edhe kqyr me i pershtat parametrat a jon tnjejta nbody
//         {
//             return HandleResult(await Mediator.Send(new Create.Command { Konsultime = konsultime }));
//         }

//         [HttpPut("{id}")]
//         public async Task<IActionResult> ModifikoKonsultime(Guid id, Konsultime konsultime)
//         {
//             konsultime.Id = id;
//             return HandleResult(await Mediator.Send(new Modifiko.Command { Konsultime = konsultime }));
//         }

//         [HttpDelete("{id}")]
//         public async Task<IActionResult> FshijKonsultime(Guid id)
//         {
//             return HandleResult(await Mediator.Send(new Fshij.Command { Id = id }));
//         }
//     }
// }