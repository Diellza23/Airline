using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Persistency;

namespace Application.Studentet
{
    public class Fshij
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid StudentiId { get; set; }
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
                var studenti = await _context.Studentet.FindAsync(request.StudentiId); //guid id

                if(studenti == null) return null;
            
                _context.Remove(studenti);

                var result = await _context.SaveChangesAsync()>0;

                if(!result) return Result<Unit>.Failure("Failded to delete student");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}