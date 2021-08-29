using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistency;

namespace Application.Punetoret
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Punetori Punetori { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Punetori).SetValidator(new PunetoriValidator());
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
                var punetori = await _context.Punetoret.FindAsync(request.Punetori.Id);

                if(punetori == null) return null;

                _mapper.Map(request.Punetori, punetori);
                
                var result = await _context.SaveChangesAsync() >0;

                if(!result) return Result<Unit>.Failure("Failed to update punetori info");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}