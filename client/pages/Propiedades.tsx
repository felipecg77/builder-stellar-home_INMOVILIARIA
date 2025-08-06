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
  Filter,
  Grid3X3,
  List,
  Heart,
  Star,
  Bath,
  Bed,
  Square,
} from "lucide-react";

export default function Propiedades() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [location, setLocation] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const properties = [
    {
      id: 1,
      title: "Casa Moderna en Polanco",
      type: "Casa",
      price: 4500000,
      priceFormatted: "$4,500,000",
      location: "Polanco, CDMX",
      image:
        "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=800",
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      description:
        "Hermosa casa moderna con acabados de lujo, jardín privado y estacionamiento para 2 autos.",
      featured: true,
    },
    {
      id: 2,
      title: "Terreno Comercial Centro",
      type: "Terreno",
      price: 2800000,
      priceFormatted: "$2,800,000",
      location: "Centro Histórico, CDMX",
      image:
        "https://images.pexels.com/photos/9666115/pexels-photo-9666115.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: 500,
      description:
        "Excelente terreno comercial en zona de alta plusvalía, ideal para desarrollo comercial.",
      featured: true,
    },
    {
      id: 3,
      title: "Local Comercial Roma Norte",
      type: "Local Comercial",
      price: 3200000,
      priceFormatted: "$3,200,000",
      location: "Roma Norte, CDMX",
      image:
        "https://images.pexels.com/photos/303317/pexels-photo-303317.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: 120,
      description:
        "Local comercial en excelente ubicación, perfecto para restaurante o tienda.",
      featured: false,
    },
    {
      id: 4,
      title: "Casa Familiar Coyoacán",
      type: "Casa",
      price: 6200000,
      priceFormatted: "$6,200,000",
      location: "Coyoacán, CDMX",
      image:
        "https://images.pexels.com/photos/22707294/pexels-photo-22707294.jpeg?auto=compress&cs=tinysrgb&w=800",
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      description:
        "Amplia casa familiar con patio trasero, cerca de escuelas y parques.",
      featured: false,
    },
    {
      id: 5,
      title: "Terreno Residencial Satélite",
      type: "Terreno",
      price: 1800000,
      priceFormatted: "$1,800,000",
      location: "Ciudad Satélite, Edo. México",
      image:
        "https://images.pexels.com/photos/10555518/pexels-photo-10555518.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: 300,
      description:
        "Terreno plano en fraccionamiento residencial con todos los servicios.",
      featured: false,
    },
    {
      id: 6,
      title: "Oficina Corporativa Santa Fe",
      type: "Local Comercial",
      price: 8500000,
      priceFormatted: "$8,500,000",
      location: "Santa Fe, CDMX",
      image:
        "https://images.pexels.com/photos/33308476/pexels-photo-33308476.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: 200,
      description:
        "Oficina ejecutiva en torre corporativa con vista panorámica.",
      featured: true,
    },
  ];

  const filteredProperties = properties.filter((property) => {
    // Filter by search term
    if (
      searchTerm &&
      !property.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !property.location.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Filter by property type
    if (propertyType !== "all") {
      const typeMap = {
        casas: "Casa",
        terrenos: "Terreno",
        comerciales: "Local Comercial",
      };
      if (property.type !== typeMap[propertyType]) {
        return false;
      }
    }

    // Filter by price range
    if (priceRange !== "all") {
      const price = property.price;
      if (priceRange === "0-1000000" && price > 1000000) return false;
      if (
        priceRange === "1000000-2500000" &&
        (price < 1000000 || price > 2500000)
      )
        return false;
      if (
        priceRange === "2500000-5000000" &&
        (price < 2500000 || price > 5000000)
      )
        return false;
      if (
        priceRange === "5000000-10000000" &&
        (price < 5000000 || price > 10000000)
      )
        return false;
      if (priceRange === "10000000+" && price < 10000000) return false;
    }

    return true;
  });

  const PropertyCard = ({ property }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {property.featured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            <Star className="w-3 h-3 mr-1" />
            Destacada
          </Badge>
        )}
        <Badge variant="secondary" className="absolute top-3 right-3">
          {property.type}
        </Badge>
        <Button
          size="sm"
          variant="secondary"
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">
          {property.title}
        </h3>
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {property.description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-primary">
            {property.priceFormatted}
          </span>
          <div className="flex items-center text-muted-foreground text-sm">
            <Square className="w-4 h-4 mr-1" />
            <span>{property.area} m²</span>
          </div>
        </div>
        {property.bedrooms && (
          <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
          </div>
        )}
        <div className="flex gap-2">
          <Link to={`/propiedades/${property.id}`} className="flex-1">
            <Button className="w-full">Ver Detalles</Button>
          </Link>
          <Button variant="outline" size="sm">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const PropertyListItem = ({ property }) => (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-64 h-48">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover rounded-lg"
            />
            {property.featured && (
              <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
                <Star className="w-3 h-3 mr-1" />
                Destacada
              </Badge>
            )}
            <Badge variant="secondary" className="absolute top-2 right-2">
              {property.type}
            </Badge>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{property.title}</h3>
              <span className="text-2xl font-bold text-primary">
                {property.priceFormatted}
              </span>
            </div>
            <div className="flex items-center text-muted-foreground mb-3">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{property.location}</span>
            </div>
            <p className="text-muted-foreground mb-4">{property.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center">
                  <Square className="w-4 h-4 mr-1" />
                  <span>{property.area} m²</span>
                </div>
                {property.bedrooms && (
                  <>
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex gap-2">
                <Link to={`/propiedades/${property.id}`}>
                  <Button>Ver Detalles</Button>
                </Link>
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 via-background to-accent/5 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Catálogo de Propiedades
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Descubre nuestra selección de terrenos, casas y locales
                comerciales en las mejores ubicaciones
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Buscar por ubicación o nombre..."
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
                  <Filter className="w-5 h-5 mr-2" />
                  Filtrar
                </Button>
              </div>
            </div>

            {/* Results and View Toggle */}
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">
                {filteredProperties.length} propiedades encontradas
              </p>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid/List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                No se encontraron propiedades
              </h3>
              <p className="text-muted-foreground">
                Intenta ajustar tus filtros de búsqueda para ver más resultados
              </p>
            </div>
          ) : (
            <>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredProperties.map((property) => (
                    <PropertyListItem key={property.id} property={property} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Load More */}
        {filteredProperties.length > 0 && (
          <div className="text-center pb-12">
            <Button variant="outline" size="lg">
              Cargar Más Propiedades
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
