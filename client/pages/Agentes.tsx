import React, { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  UserPlus,
  Building,
  Upload,
  BarChart3,
  MessageSquare,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Camera,
  FileText,
  CheckCircle,
  AlertCircle,
  Home,
} from "lucide-react";

export default function Agentes() {
  const [isAgent, setIsAgent] = useState(false);
  const [activeTab, setActiveTab] = useState("register");
  const [registrationForm, setRegistrationForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    license: "",
    experience: "",
    specialization: "",
    description: "",
    profileImage: null,
  });

  const [propertyForm, setPropertyForm] = useState({
    title: "",
    type: "",
    price: "",
    location: "",
    description: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    images: [],
  });

  const agentStats = {
    totalProperties: 12,
    activeListings: 8,
    soldThisMonth: 3,
    totalEarnings: 485000,
    averagePrice: 3200000,
    clientViews: 156,
  };

  const agentProperties = [
    {
      id: 1,
      title: "Casa Moderna Polanco",
      type: "Casa",
      price: 4500000,
      location: "Polanco, CDMX",
      status: "Activa",
      views: 45,
      inquiries: 8,
      dateAdded: "2024-01-15",
    },
    {
      id: 2,
      title: "Terreno Comercial",
      type: "Terreno",
      price: 2800000,
      location: "Centro, CDMX",
      status: "Vendida",
      views: 67,
      inquiries: 12,
      dateAdded: "2024-01-10",
    },
    {
      id: 3,
      title: "Local Roma Norte",
      type: "Local Comercial",
      price: 3200000,
      location: "Roma Norte, CDMX",
      status: "Pendiente",
      views: 23,
      inquiries: 4,
      dateAdded: "2024-01-20",
    },
  ];

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Agent registration:", registrationForm);
    setIsAgent(true);
    setActiveTab("dashboard");
    alert("¡Registro exitoso! Bienvenido al portal de agentes.");
  };

  const handlePropertySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New property:", propertyForm);
    alert("¡Propiedad agregada exitosamente!");
    setPropertyForm({
      title: "",
      type: "",
      price: "",
      location: "",
      description: "",
      bedrooms: "",
      bathrooms: "",
      area: "",
      images: [],
    });
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      Activa: "default",
      Vendida: "secondary",
      Pendiente: "outline",
    };
    return <Badge variant={variants[status] as any}>{status}</Badge>;
  };

  if (isAgent) {
    return (
      <Layout>
        <div className="min-h-screen bg-background">
          {/* Agent Header */}
          <div className="bg-gradient-to-r from-primary/10 via-background to-accent/5 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">
                      Portal de Agentes
                    </h1>
                    <p className="text-muted-foreground">
                      Bienvenido, {registrationForm.firstName}{" "}
                      {registrationForm.lastName}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-sm">
                  <Shield className="w-4 h-4 mr-1" />
                  Agente Verificado
                </Badge>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="properties">Mis Propiedades</TabsTrigger>
                <TabsTrigger value="add-property">
                  Agregar Propiedad
                </TabsTrigger>
                <TabsTrigger value="profile">Mi Perfil</TabsTrigger>
              </TabsList>

              {/* Dashboard Tab */}
              <TabsContent value="dashboard" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Propiedades Totales
                      </CardTitle>
                      <Building className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {agentStats.totalProperties}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +2 desde el mes pasado
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Listados Activos
                      </CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {agentStats.activeListings}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        En el mercado actual
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Ventas Este Mes
                      </CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {agentStats.soldThisMonth}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +1 vs mes anterior
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Ingresos Totales
                      </CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        ${agentStats.totalEarnings.toLocaleString()}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Comisiones acumuladas
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Precio Promedio
                      </CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        ${agentStats.averagePrice.toLocaleString()}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        De tus propiedades
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Visualizaciones
                      </CardTitle>
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {agentStats.clientViews}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Esta semana
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Actividad Reciente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            Nueva consulta para Casa Moderna Polanco
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Hace 2 horas
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            Propiedad vista 15 veces hoy
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Hace 4 horas
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            Terreno Comercial marcado como vendido
                          </p>
                          <p className="text-xs text-muted-foreground">Ayer</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Properties Tab */}
              <TabsContent value="properties" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Mis Propiedades</h2>
                  <Button onClick={() => setActiveTab("add-property")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Agregar Propiedad
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {agentProperties.map((property) => (
                    <Card
                      key={property.id}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              {property.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                              <span>{property.type}</span>
                              <span>•</span>
                              <span>{property.location}</span>
                              <span>•</span>
                              <span>Agregada: {property.dateAdded}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary mb-2">
                              ${property.price.toLocaleString()}
                            </div>
                            {getStatusBadge(property.status)}
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-semibold">
                              {property.views}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Visualizaciones
                            </div>
                          </div>
                          <div className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-semibold">
                              {property.inquiries}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Consultas
                            </div>
                          </div>
                          <div className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="text-lg font-semibold">
                              {property.status === "Activa"
                                ? "Activa"
                                : property.status === "Vendida"
                                  ? "Vendida"
                                  : "Pendiente"}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Estado
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Ver
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-2" />
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Consultas
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-destructive"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Eliminar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Add Property Tab */}
              <TabsContent value="add-property" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Plus className="w-5 h-5 mr-2" />
                      Agregar Nueva Propiedad
                    </CardTitle>
                    <CardDescription>
                      Completa la información de la propiedad que deseas
                      publicar
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePropertySubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Título de la Propiedad
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={propertyForm.title}
                            onChange={(e) =>
                              setPropertyForm({
                                ...propertyForm,
                                title: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Tipo de Propiedad
                          </label>
                          <select
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={propertyForm.type}
                            onChange={(e) =>
                              setPropertyForm({
                                ...propertyForm,
                                type: e.target.value,
                              })
                            }
                          >
                            <option value="">Seleccionar tipo</option>
                            <option value="Casa">Casa</option>
                            <option value="Terreno">Terreno</option>
                            <option value="Local Comercial">
                              Local Comercial
                            </option>
                            <option value="Departamento">Departamento</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Precio (MXN)
                          </label>
                          <input
                            type="number"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={propertyForm.price}
                            onChange={(e) =>
                              setPropertyForm({
                                ...propertyForm,
                                price: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Ubicación
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={propertyForm.location}
                            onChange={(e) =>
                              setPropertyForm({
                                ...propertyForm,
                                location: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Área (m²)
                          </label>
                          <input
                            type="number"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={propertyForm.area}
                            onChange={(e) =>
                              setPropertyForm({
                                ...propertyForm,
                                area: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Habitaciones
                          </label>
                          <input
                            type="number"
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={propertyForm.bedrooms}
                            onChange={(e) =>
                              setPropertyForm({
                                ...propertyForm,
                                bedrooms: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Baños
                          </label>
                          <input
                            type="number"
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={propertyForm.bathrooms}
                            onChange={(e) =>
                              setPropertyForm({
                                ...propertyForm,
                                bathrooms: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Descripción
                        </label>
                        <textarea
                          rows={4}
                          required
                          className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Describe las características principales de la propiedad..."
                          value={propertyForm.description}
                          onChange={(e) =>
                            setPropertyForm({
                              ...propertyForm,
                              description: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="border-2 border-dashed border-muted-foreground rounded-lg p-8 text-center">
                        <Camera className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground mb-2">
                          Arrastra y suelta las fotos aquí
                        </p>
                        <p className="text-sm text-muted-foreground">o</p>
                        <Button variant="outline" className="mt-2">
                          <Upload className="w-4 h-4 mr-2" />
                          Seleccionar Fotos
                        </Button>
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Plus className="w-5 h-5 mr-2" />
                        Publicar Propiedad
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mi Perfil de Agente</CardTitle>
                    <CardDescription>
                      Información profesional y credenciales
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-12 h-12 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {registrationForm.firstName}{" "}
                          {registrationForm.lastName}
                        </h3>
                        <p className="text-muted-foreground">
                          {registrationForm.specialization}
                        </p>
                        <Badge variant="secondary" className="mt-2">
                          <Shield className="w-4 h-4 mr-1" />
                          Licencia: {registrationForm.license}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">
                          Información de Contacto
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span className="text-sm">
                              {registrationForm.email}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span className="text-sm">
                              {registrationForm.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">
                          Experiencia Profesional
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span className="text-sm">
                              {registrationForm.experience} años de experiencia
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span className="text-sm">
                              Especialización: {registrationForm.specialization}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">
                        Descripción Profesional
                      </h4>
                      <p className="text-muted-foreground">
                        {registrationForm.description}
                      </p>
                    </div>

                    <Button>
                      <Edit className="w-4 h-4 mr-2" />
                      Editar Perfil
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-background to-accent/5 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Portal de Agentes Inmobiliarios
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Únete a nuestra red de agentes certificados. Gestiona tus
                propiedades, conecta con clientes y haz crecer tu negocio
                inmobiliario.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <UserPlus className="w-6 h-6 mr-2" />
                  Registro de Agente Inmobiliario
                </CardTitle>
                <CardDescription>
                  Complete el formulario para unirse a nuestra red de agentes
                  profesionales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegistration} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={registrationForm.firstName}
                        onChange={(e) =>
                          setRegistrationForm({
                            ...registrationForm,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Apellidos
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={registrationForm.lastName}
                        onChange={(e) =>
                          setRegistrationForm({
                            ...registrationForm,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={registrationForm.email}
                        onChange={(e) =>
                          setRegistrationForm({
                            ...registrationForm,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={registrationForm.phone}
                        onChange={(e) =>
                          setRegistrationForm({
                            ...registrationForm,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Número de Licencia
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={registrationForm.license}
                        onChange={(e) =>
                          setRegistrationForm({
                            ...registrationForm,
                            license: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Años de Experiencia
                      </label>
                      <select
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={registrationForm.experience}
                        onChange={(e) =>
                          setRegistrationForm({
                            ...registrationForm,
                            experience: e.target.value,
                          })
                        }
                      >
                        <option value="">Seleccionar experiencia</option>
                        <option value="1-2">1-2 años</option>
                        <option value="3-5">3-5 años</option>
                        <option value="6-10">6-10 años</option>
                        <option value="10+">Más de 10 años</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">
                        Especialización
                      </label>
                      <select
                        required
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={registrationForm.specialization}
                        onChange={(e) =>
                          setRegistrationForm({
                            ...registrationForm,
                            specialization: e.target.value,
                          })
                        }
                      >
                        <option value="">Seleccionar especialización</option>
                        <option value="Residencial">
                          Propiedades Residenciales
                        </option>
                        <option value="Comercial">
                          Propiedades Comerciales
                        </option>
                        <option value="Terrenos">Terrenos y Desarrollos</option>
                        <option value="Lujo">Propiedades de Lujo</option>
                        <option value="Inversión">
                          Inversión Inmobiliaria
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Descripción Profesional
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Describe tu experiencia y enfoque profesional..."
                      value={registrationForm.description}
                      onChange={(e) =>
                        setRegistrationForm({
                          ...registrationForm,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="border-2 border-dashed border-muted-foreground rounded-lg p-8 text-center">
                    <Camera className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-2">
                      Foto de perfil profesional
                    </p>
                    <Button variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Subir Foto
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" required className="rounded" />
                    <label className="text-sm text-muted-foreground">
                      Acepto los términos y condiciones del portal de agentes
                    </label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Registrarse como Agente
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Beneficios para Agentes
              </h2>
              <p className="text-xl text-muted-foreground">
                Todas las herramientas que necesitas para hacer crecer tu
                negocio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Building className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Gestión de Propiedades
                  </h3>
                  <p className="text-muted-foreground">
                    Panel completo para gestionar tus listados, fotos, y
                    información de propiedades
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <BarChart3 className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Reportes y Analytics
                  </h3>
                  <p className="text-muted-foreground">
                    Estadísticas detalladas de visualizaciones, consultas y
                    rendimiento de ventas
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <MessageSquare className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Comunicación Directa
                  </h3>
                  <p className="text-muted-foreground">
                    Sistema de mensajería integrado para comunicarte con
                    clientes potenciales
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Verificación Profesional
                  </h3>
                  <p className="text-muted-foreground">
                    Badge de agente verificado que genera confianza en tus
                    clientes
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Marketing Digital
                  </h3>
                  <p className="text-muted-foreground">
                    Herramientas de promoción y marketing para destacar tus
                    propiedades
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <DollarSign className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Comisiones Competitivas
                  </h3>
                  <p className="text-muted-foreground">
                    Estructura de comisiones transparente y competitiva del
                    mercado
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para hacer crecer tu negocio?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Únete a nuestra plataforma y accede a las mejores herramientas del
              mercado inmobiliario
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setIsAgent(true)}
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Demo del Portal
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contactar Ventas
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
