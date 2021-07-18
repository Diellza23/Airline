using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistency;

namespace Application.Notat
{
    public class Modifiko
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Nota Nota { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Nota).SetValidator(new NotaValidator());
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
                var nota = await _context.Notat.FindAsync(request.Nota.Id);

                if(nota ==null) return null;

                _mapper.Map(request.Nota, nota);
                
                var result = await _context.SaveChangesAsync() >0;

                if(!result) return Result<Unit>.Failure("Failed to update nota");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}