using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistency;

namespace Application.Studentet
{
    public class Detajet
    {
        public class Query : IRequest<Result<Studenti>>
        {
            public Guid StudentiId { get; set; }
        }

        public class Handler : IRequestHandler<Query,Result<Studenti>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Studenti>> Handle(Query request, CancellationToken cancellationToken)
            {
                var studenti = await _context.Studentet.FindAsync(request.StudentiId);
                
                return Result<Studenti>.Success(studenti);
            }
        }
    }
}