// using System;
// using System.Threading;
// using System.Threading.Tasks;
// using Application.Core;
// using Domain;
// using MediatR;
// using Persistency;

// namespace Application.Konsultimet
// {
//     public class Detajet
//     {
//         public class Query : IRequest<Result<Konsultime>>
//         {
//             public Guid Id { get; set; }
//         }

//         public class Handler : IRequestHandler<Query,Result<Konsultime>>
//         {
//             private readonly DataContext _context;
//             public Handler(DataContext context)
//             {
//                 _context = context;
//             }

//             public async Task<Result<Konsultime>> Handle(Query request, CancellationToken cancellationToken)
//             {
//                 var konsultime = await _context.Konsultimet.FindAsync(request.Id);
                
//                 return Result<Konsultime>.Success(konsultime);
//             }
//         }
//     }
// }