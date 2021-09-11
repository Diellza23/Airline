using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Udhetaret;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class UdhetariController : BaseApiController
    {

        [HttpGet]
        public async Task<IActionResult> GetUdhetaret()
        {
            return HandleResult(await Mediator.Send(new ListaU.Query()));
        }
    
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUdhetarin(string id)
        {
            return HandleResult(await Mediator.Send(new Detajet.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateUdhetarin(Udhetari udhetari)
        {
            return Ok(await Mediator.Send(new KrijoU.Command{Udhetari = udhetari}));
        }

        // [HttpPut("{id}")]
        // public async Task<IActionResult> EditUdhetarin(string id, Udhetari udhetari)
        // {
        //     Udhetari actualUdhetari = (await Mediator.Send(new Detajet.Query{Id= id})); 

        //     udhetari.Id = id;
        //     udhetari.PasswordHash = actualUdhetari.PasswordHash;
        //     udhetari.NormalizedEmail = actualUdhetari.NormalizedEmail;
        //     udhetari.NormalizedUserName = actualUdhetari.NormalizedUserName;

        //     return Ok(await Mediator.Send(new Edit.Command{Udhetari = udhetari}));
        // }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> EditUdhetarin(string id, Udhetari udhetari)
        {
            // Udhetari actualUdhetari = await Mediator.Send(new Detajet.Query{Id= id}); 

            udhetari.Id = id;
            udhetari.PasswordHash = udhetari.PasswordHash;
            udhetari.NormalizedEmail = udhetari.NormalizedEmail;
            udhetari.NormalizedUserName = udhetari.NormalizedUserName;
            return Ok(await Mediator.Send(new Edit.Command{Udhetari = udhetari}));
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUdhetarin(string id)
        {
            return Ok(await Mediator.Send(new Fshij.Command{Id = id}));
        }
    }
}