using Domain;
using FluentValidation;

namespace Application.Studentet
{
    public class StudentiValidator : AbstractValidator<Studenti>
    {
        public StudentiValidator()
        {
            RuleFor(x => x.Emri).NotEmpty();
            RuleFor(x => x.Mbiemri).NotEmpty();
            RuleFor(x => x.Niveli).NotEmpty();
            RuleFor(x => x.Drejtimi).NotEmpty();
            RuleFor(x => x.Date).NotEmpty();


        }
    }
}