import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  Home,
  Building,
  TreePine,
  Scale,
  Users,
  Star,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Filter,
} from "lucide-react";

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const propertyTypes = [
    {
      id: "terrenos",
      name: "Terrenos",
      icon: TreePine,
      color: "bg-green-500",
      count: 45,
    },
    { id: "casas", name: "Casas", icon: Home, color: "bg-blue-500", count: 87 },
    {
      id: "comerciales",
      name: "Locales Comerciales",
      icon: Building,
      color: "bg-purple-500",
      count: 23,
    },
  ];

  const featuredProperties = [
    {
      id: 1,
      title: "Casa Moderna en Polanco",
      type: "Casa",
      price: "$4,500,000",
      location: "Polanco, CDMX",
      image:
        "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=800",
      bedrooms: 3,
      bathrooms: 2,
      area: "180 m²",
      featured: true,
    },
    {
      id: 2,
      title: "Terreno Comercial Centro",
      type: "Terreno",
      price: "$2,800,000",
      location: "Centro Histórico, CDMX",
      image:
        "https://images.pexels.com/photos/9666115/pexels-photo-9666115.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "500 m²",
      featured: true,
    },
    {
      id: 3,
      title: "Local Comercial Roma Norte",
      type: "Local Comercial",
      price: "$3,200,000",
      location: "Roma Norte, CDMX",
      image:
        "https://images.pexels.com/photos/303317/pexels-photo-303317.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "120 m²",
      featured: false,
    },
  ];

  const services = [
    {
      title: "Asesoría Jurídica",
      description: "Apoyo legal completo en transacciones inmobiliarias",
      icon: Scale,
      features: [
        "Revisión de documentos",
        "Trámites notariales",
        "Asesoría fiscal",
        "Resolución de conflictos",
      ],
    },
    {
      title: "Agentes Especializados",
      description: "Profesionales certificados en bienes raíces",
      icon: Users,
      features: [
        "Agentes certificados",
        "Experiencia comprobada",
        "Cobertura nacional",
        "Atención personalizada",
      ],
    },
    {
      title: "Valuación Profesional",
      description: "Avalúos comerciales y residenciales",
      icon: CheckCircle,
      features: [
        "Avalúos certificados",
        "Análisis de mercado",
        "Reportes detallados",
        "Precios competitivos",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Encuentra tu
              <span className="text-primary block">Propiedad Ideal</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Descubre las mejores oportunidades en bienes raíces con asesoría
              profesional y agentes especializados. Tu nuevo hogar o inversión
              te está esperando.
            </p>

            {/* Search Bar */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Buscar por ubicación, tipo de propiedad..."
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <select
                    className="w-full py-3 px-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="all">Todos los tipos</option>
                    <option value="terrenos">Terrenos</option>
                    <option value="casas">Casas</option>
                    <option value="comerciales">Locales Comerciales</option>
                  </select>
                </div>
                <div>
                  <select
                    className="w-full py-3 px-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                  >
                    <option value="all">Cualquier precio</option>
                    <option value="0-1000000">Hasta $1,000,000</option>
                    <option value="1000000-2500000">
                      $1,000,000 - $2,500,000
                    </option>
                    <option value="2500000-5000000">
                      $2,500,000 - $5,000,000
                    </option>
                    <option value="5000000-10000000">
                      $5,000,000 - $10,000,000
                    </option>
                    <option value="10000000+">Más de $10,000,000</option>
                  </select>
                </div>
                <div>
                  <Button className="w-full h-12">
                    <Search className="w-5 h-5 mr-2" />
                    Buscar
                  </Button>
                </div>
              </div>
            </div>

            {/* Property Type Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {propertyTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Card
                    key={type.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 ${type.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {type.name}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {type.count} propiedades disponibles
                      </p>
                      <Button variant="outline" size="sm">
                        Ver {type.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Propiedades Destacadas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestras mejores oportunidades seleccionadas
              especialmente para ti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  {property.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Destacada
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{property.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {property.price}
                    </span>
                    <span className="text-muted-foreground">
                      {property.area}
                    </span>
                  </div>
                  {property.bedrooms && (
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <span className="mr-4">
                        {property.bedrooms} habitaciones
                      </span>
                      <span>{property.bathrooms} baños</span>
                    </div>
                  )}
                  <Button className="w-full">Ver Detalles</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/propiedades">
              <Button size="lg" variant="outline">
                Ver Todas las Propiedades
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos un servicio integral para todas tus necesidades
              inmobiliarias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center justify-center"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6" variant="outline">
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para encontrar tu propiedad ideal?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Contáctanos hoy y déjanos ayudarte a encontrar la propiedad perfecta
            con la mejor asesoría del mercado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar Mensaje
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
