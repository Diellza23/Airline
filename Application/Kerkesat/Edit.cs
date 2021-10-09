using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistency;

namespace Application.Kerkesat
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Kerkesa Kerkesa { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Kerkesa).SetValidator(new KerkesaValidator());
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
                var kerkesa = await _context.Kerkesat.FindAsync(request.Kerkesa.Id);

                if(kerkesa == null) return null;

                _mapper.Map(request.Kerkesa, kerkesa);
                
                var result = await _context.SaveChangesAsync() >0;

                if(!result) return Result<Unit>.Failure("Modifikimi deshtoi");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}