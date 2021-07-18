using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistency;

namespace Application.Studentet
{
    public class Modifiko
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Studenti Studenti { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Studenti).SetValidator(new StudentiValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>> //type ne kete rast eshte komanda 
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var studenti = await _context.Studentet.FindAsync(request.Studenti.StudentiId);

                if(studenti ==null) return null;

                _mapper.Map(request.Studenti, studenti);
                
                var result = await _context.SaveChangesAsync() >0;

                if(!result) return Result<Unit>.Failure("Failed to update student info");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}