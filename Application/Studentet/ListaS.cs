using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistency;

namespace Application.Studentet
{
    public class ListaS
    {
        public class Query : IRequest<Result<List<Studenti>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Studenti>>>
        {
            private readonly DataContext _context;
            private readonly ILogger<ListaS> _logger;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Studenti>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Studenti>>.Success(await _context.Studentet.ToListAsync(cancellationToken));
            }
        }
    }
}