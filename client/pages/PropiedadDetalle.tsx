import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
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
  ArrowLeft,
  MapPin,
  Square,
  Bed,
  Bath,
  Car,
  Wifi,
  Shield,
  Home,
  Building,
  Calendar,
  Eye,
  Heart,
  Share2,
  Phone,
  Mail,
  MessageSquare,
  Star,
  ChevronLeft,
  ChevronRight,
  User,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function PropiedadDetalle() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock property data - in real app, this would be fetched by ID
  const property = {
    id: 1,
    title: "Casa Moderna en Polanco",
    type: "Casa",
    price: 4500000,
    priceFormatted: "$4,500,000",
    location: "Polanco, CDMX",
    address:
      "Calle Masaryk 123, Polanco V Sección, Miguel Hidalgo, 11560 Ciudad de México, CDMX",
    bedrooms: 3,
    bathrooms: 2,
    parkingSpaces: 2,
    area: 180,
    lotSize: 250,
    yearBuilt: 2020,
    description:
      "Hermosa casa moderna con acabados de lujo ubicada en una de las zonas más exclusivas de la Ciudad de México. Esta propiedad cuenta con amplios espacios, jardín privado, estacionamiento para 2 autos y una ubicación privilegiada cerca de los mejores restaurantes, centros comerciales y escuelas de la zona.",
    features: [
      "Cocina integral con isla",
      "Jardín privado",
      "Terraza techada",
      "Estudio/oficina",
      "Cuarto de servicio",
      "Bodega",
      "Sistema de seguridad",
      "Aire acondicionado",
      "Calefacción",
      "Internet de alta velocidad",
    ],
    amenities: [
      "Caseta de vigilancia 24/7",
      "Área verde común",
      "Circuito cerrado",
      "Control de acceso",
      "Recolección de basura",
    ],
    images: [
      "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    agent: {
      name: "María González",
      title: "Agente Inmobiliario Certificado",
      phone: "+52 (55) 1234-5678",
      email: "maria.gonzalez@inmovision.mx",
      image:
        "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=300",
      experience: "8 años de experiencia",
      properties: 45,
    },
    location: {
      lat: 19.4326,
      lng: -99.1332,
      neighborhood: "Polanco V Sección",
      nearbyPlaces: [
        "Antara Polanco - 0.5 km",
        "Parque Lincoln - 0.8 km",
        "Museo Soumaya - 1.2 km",
        "Colegio Peterson - 0.3 km",
      ],
    },
    status: "disponible",
    published: "2024-01-15",
    views: 156,
    favorites: 23,
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1,
    );
  };

  const handleContact = () => {
    window.open(`tel:${property.agent.phone}`);
  };

  const handleEmail = () => {
    window.open(
      `mailto:${property.agent.email}?subject=Consulta sobre ${property.title}`,
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header with breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/propiedades">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver a Propiedades
                  </Button>
                </Link>
                <div className="text-sm text-muted-foreground">
                  <Link to="/" className="hover:text-primary">
                    Inicio
                  </Link>
                  <span className="mx-2">/</span>
                  <Link to="/propiedades" className="hover:text-primary">
                    Propiedades
                  </Link>
                  <span className="mx-2">/</span>
                  <span>{property.title}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "text-red-500" : ""}
                >
                  <Heart
                    className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`}
                  />
                  {isFavorite ? "Guardado" : "Guardar"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={property.images[currentImageIndex]}
                      alt={property.title}
                      className="w-full h-96 object-cover rounded-t-lg"
                    />
                    {property.images.length > 1 && (
                      <>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute left-4 top-1/2 transform -translate-y-1/2"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute right-4 top-1/2 transform -translate-y-1/2"
                          onClick={nextImage}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex space-x-2">
                        {property.images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index === currentImageIndex
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-4 gap-2">
                      {property.images.slice(0, 4).map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`${property.title} ${index + 1}`}
                          className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80"
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property Details */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-3xl mb-2">
                        {property.title}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{property.address}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">
                        {property.priceFormatted}
                      </div>
                      <Badge variant="secondary" className="mt-2">
                        {property.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Square className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-semibold">
                        {property.area} m²
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Construcción
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-semibold">
                        {property.bedrooms}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Habitaciones
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-semibold">
                        {property.bathrooms}
                      </div>
                      <div className="text-xs text-muted-foreground">Baños</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <Car className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-semibold">
                        {property.parkingSpaces}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Estacionamientos
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Descripción</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  {/* Property Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Características
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Amenidades del Desarrollo
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <Shield className="w-4 h-4 text-primary mr-2" />
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Property Info */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Información Adicional
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-muted-foreground mr-2" />
                        <div>
                          <div className="text-sm font-medium">
                            Año de construcción
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {property.yearBuilt}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 text-muted-foreground mr-2" />
                        <div>
                          <div className="text-sm font-medium">Terreno</div>
                          <div className="text-sm text-muted-foreground">
                            {property.lotSize} m²
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 text-muted-foreground mr-2" />
                        <div>
                          <div className="text-sm font-medium">Vistas</div>
                          <div className="text-sm text-muted-foreground">
                            {property.views}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardHeader>
                  <CardTitle>Ubicación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-primary mr-2" />
                      <span className="font-medium">
                        {property.location.neighborhood}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Lugares de interés cercanos:
                      </h4>
                      <ul className="space-y-1">
                        {property.location.nearbyPlaces.map((place, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground"
                          >
                            {place}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="w-8 h-8 mx-auto mb-2" />
                        <p>Mapa interactivo</p>
                        <p className="text-xs">
                          Ubicación exacta disponible tras contacto
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Agent */}
              <Card>
                <CardHeader>
                  <CardTitle>Contactar Agente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{property.agent.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {property.agent.title}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Star className="w-3 h-3 mr-1" />
                        <span>{property.agent.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-center p-2 bg-muted/50 rounded">
                      <div className="font-semibold">
                        {property.agent.properties}
                      </div>
                      <div className="text-muted-foreground">Propiedades</div>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded">
                      <div className="font-semibold">4.9</div>
                      <div className="text-muted-foreground">Rating</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full" onClick={handleContact}>
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar Ahora
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={handleEmail}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Email
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Estadísticas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Estado:
                      </span>
                      <Badge variant="default">Disponible</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Publicado:
                      </span>
                      <span className="text-sm">{property.published}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Vistas:
                      </span>
                      <span className="text-sm">{property.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Favoritos:
                      </span>
                      <span className="text-sm">{property.favorites}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        ID Propiedad:
                      </span>
                      <span className="text-sm font-mono">
                        INM-{property.id.toString().padStart(6, "0")}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Visit */}
              <Card>
                <CardHeader>
                  <CardTitle>Agendar Visita</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Fecha preferida
                      </label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Hora preferida
                      </label>
                      <select className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Seleccionar hora</option>
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                        <option>5:00 PM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                    <Button className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar Visita
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
