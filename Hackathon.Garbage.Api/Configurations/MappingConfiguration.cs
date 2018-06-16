using AutoMapper;
using Hackathon.Garbage.Dal.Models;
using Hackathon.Garbage.Dal.Entities;
using System.Collections.Generic;

namespace Hackathon.Garbage.Dal.Configurations
{
    public class MappingConfiguration : Profile
    {
        public MappingConfiguration()
        {
            CreateMap<CordinatesEntity, CordinatesBllModel>().ReverseMap();
            CreateMap<ExecutiveBllModel, ExecutiveEntity>().ReverseMap();
            CreateMap<FieldBllModel, FieldEntity>().ReverseMap();
            CreateMap<OrderBllModel, OrderEntity>().ReverseMap();
            CreateMap<RatingBllModel, RatingEntity>().ReverseMap();
            CreateMap<AlertBllModel, AlertsEntity>().ReverseMap();

            CreateMap<JsonDataModel, JsonBllModel>().
                ForMember(x => x.Id, opt => opt.MapFrom(src => src.Id)).
                ForMember(x => x.Category, opt => opt.MapFrom(src => src.Kategoria)).
                ForMember(x => x.Geometry, opt => opt.MapFrom(src => new JsonGeometryBllModel(src.Json_geometry)));


        }
    }
}
