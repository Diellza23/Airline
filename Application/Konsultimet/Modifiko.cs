// using System.Threading;
// using System.Threading.Tasks;
// using Application.Core;
// using AutoMapper;
// using Domain;
// using FluentValidation;
// using MediatR;
// using Persistency;

// namespace Application.Konsultimet
// {
//     public class Modifiko
//     {
//         public class Command : IRequest<Result<Unit>>
//         {
//             public Konsultime Konsultime { get; set; }
//         }

//         public class CommandValidator : AbstractValidator<Command>
//         {
//             public CommandValidator()
//             {
//                 RuleFor(x => x.Konsultime).SetValidator(new KonsultimetValidator());
//             }
//         }

//         public class Handler : IRequestHandler<Command, Result<Unit>> //type ne kete rast eshte komanda 
//         {
//             private readonly DataContext _context;
//             private readonly IMapper _mapper;
//             public Handler(DataContext context, IMapper mapper)
//             {
//                 _mapper = mapper;
//                 _context = context;
//             }

//             public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
//             {
//                 var konsultime = await _context.Konsultimet.FindAsync(request.Konsultime.Id);

//                 if(konsultime ==null) return null;

//                 _mapper.Map(request.Konsultime, konsultime);
                
//                 var result = await _context.SaveChangesAsync() >0;

//                 if(!result) return Result<Unit>.Failure("Failed to update konsultime");

//                 return Result<Unit>.Success(Unit.Value);
//             }
//         }
//     }
// }