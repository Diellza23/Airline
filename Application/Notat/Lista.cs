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

namespace Application.Notat
{
    public class Lista
    {
        public class Query : IRequest<Result<List<Nota>>> { }

        public class Handler : IRequestHandler<Query, Result<List<Nota>>>
        {
            private readonly DataContext _context;
            private readonly ILogger<Lista> _logger;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Nota>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Nota>>.Success(await _context.Notat.ToListAsync(cancellationToken));
            }
        }
    }
}