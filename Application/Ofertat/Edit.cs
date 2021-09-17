using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistency;

namespace Application.Ofertat
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Oferta Oferta { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Oferta).SetValidator(new OfertaValidator());
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
                var oferta = await _context.Ofertat.FindAsync(request.Oferta.Id);

                if(oferta == null) return null;

                _mapper.Map(request.Oferta, oferta);
                
                var result = await _context.SaveChangesAsync() >0;

                if(!result) return Result<Unit>.Failure("Modifikimi deshtoi");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}