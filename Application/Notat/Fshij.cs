using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistency;

namespace Application.Notat
{
    public class Fshij
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
//guid id
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var nota = await _context.Notat.FindAsync(request.Id); //guid id

                if(nota == null) return null;
            
                _context.Remove(nota);

                var result = await _context.SaveChangesAsync()>0;

                if(!result) return Result<Unit>.Failure("Failded to delete nota");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}