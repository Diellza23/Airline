using Domain;
using FluentValidation;

namespace Application.Notat
{
    public class NotaValidator : AbstractValidator<Nota>
    {
        public NotaValidator()
        {
            RuleFor(x => x.Nota_Std).NotEmpty();
            RuleFor(x => x.Date).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
            RuleFor(x => x.StudentiId).NotEmpty();
        }
    }
}