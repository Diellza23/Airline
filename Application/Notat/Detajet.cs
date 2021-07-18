using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistency;

namespace Application.Notat
{
    public class Detajet
    {
        public class Query : IRequest<Result<Nota>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query,Result<Nota>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Nota>> Handle(Query request, CancellationToken cancellationToken)
            {
                var nota = await _context.Notat.FindAsync(request.Id);
                
                return Result<Nota>.Success(nota);
            }
        }
    }
}