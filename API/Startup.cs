using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Persistency;
using MediatR;
using Application.Notat;
// using Application.Konsultimet;
using Application.Studentet;
using Application.Core;
using AutoMapper;
using FluentValidation.AspNetCore;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
              services.AddDbContext<DataContext>(opt =>{
            opt.UseSqlite(Configuration.GetConnectionString("DefaultConnection"));
            });
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
                });
            });
            services.AddMediatR(typeof(Lista.Handler).Assembly);
            services.AddMediatR(typeof(ListaS.Handler).Assembly);
            // services.AddMediatR(typeof(List.Handler).Assembly);
            services.AddControllers().AddFluentValidation(config =>
            {
                config.RegisterValidatorsFromAssemblyContaining<Krijo>();
                config.RegisterValidatorsFromAssemblyContaining<KrijoS>();
                // config.RegisterValidatorsFromAssemblyContaining<Create>();
            });
            services.AddMvc().AddFluentValidation(cfg =>cfg.RegisterValidatorsFromAssemblyContaining<Krijo>());
            // services.AddMvc().AddFluentValidation(cfg =>cfg.RegisterValidatorsFromAssemblyContaining<Create>());
            services.AddMvc().AddFluentValidation(cfg =>cfg.RegisterValidatorsFromAssemblyContaining<KrijoS>());

            services.AddAutoMapper(typeof(MappingProfiles).Assembly);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // app.UseMiddleware<ExceptionMiddleware>();

            // if (env.IsDevelopment())
            // {
                
            // }

          //  app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CorsPolicy");


            app.UseAuthorization();

           
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
