// using System;
// using System.Collections.Generic;
// using System.Threading;
// using System.Threading.Tasks;
// using Application.Core;
// using Domain;
// using MediatR;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.Extensions.Logging;
// using Persistency;

// namespace Application.Konsultimet
// {
//     public class List
//     {
//         public class Query : IRequest<Result<List<Konsultime>>> { }

//         public class Handler : IRequestHandler<Query, Result<List<Konsultime>>>
//         {
//             private readonly DataContext _context;
//             private readonly ILogger<List> _logger;
//             public Handler(DataContext context)
//             {
//                 _context = context;
//             }

//             public async Task<Result<List<Konsultime>>> Handle(Query request, CancellationToken cancellationToken)
//             {
//                 return Result<List<Konsultime>>.Success(await _context.Konsultimet.ToListAsync(cancellationToken));
//             }
//         }
//     }
// }