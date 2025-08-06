import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import ProtectedRoute from "@/components/ProtectedRoute";
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
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  Shield,
  User,
  Building,
  Search,
  Filter,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Calendar,
  MapPin,
  DollarSign,
  Square,
  Users,
  Home,
  TreePine,
  Save,
  X,
  Upload,
  Camera,
  TrendingUp,
} from "lucide-react";

export default function Administrar() {
  const { user, isAdmin, isAgent, hasPermission } = useAuth();
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const [propertyForm, setPropertyForm] = useState({
    id: "",
    title: "",
    type: "",
    price: "",
    location: "",
    description: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    status: "activa",
    agentId: "",
    images: [],
    featured: false,
  });

  const properties = [
    {
      id: 1,
      title: "Casa Moderna en Polanco",
      type: "Casa",
      price: 4500000,
      priceFormatted: "$4,500,000",
      location: "Polanco, CDMX",
      status: "activa",
      agentId: "agent001",
      agentName: "María González",
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      description: "Hermosa casa moderna con acabados de lujo",
      featured: true,
      views: 156,
      inquiries: 12,
      dateCreated: "2024-01-15",
      dateUpdated: "2024-01-20",
    },
    {
      id: 2,
      title: "Terreno Comercial Centro",
      type: "Terreno",
      price: 2800000,
      priceFormatted: "$2,800,000",
      location: "Centro Histórico, CDMX",
      status: "vendida",
      agentId: "agent002",
      agentName: "Carlos Mendoza",
      area: 500,
      description: "Excelente terreno comercial en zona de alta plusvalía",
      featured: true,
      views: 89,
      inquiries: 8,
      dateCreated: "2024-01-10",
      dateUpdated: "2024-01-18",
    },
    {
      id: 3,
      title: "Local Comercial Roma Norte",
      type: "Local Comercial",
      price: 3200000,
      priceFormatted: "$3,200,000",
      location: "Roma Norte, CDMX",
      status: "pendiente",
      agentId: "agent001",
      agentName: "María Gonz��lez",
      area: 120,
      description: "Local comercial en excelente ubicación",
      featured: false,
      views: 45,
      inquiries: 3,
      dateCreated: "2024-01-20",
      dateUpdated: "2024-01-22",
    },
    {
      id: 4,
      title: "Casa Familiar Coyoacán",
      type: "Casa",
      price: 6200000,
      priceFormatted: "$6,200,000",
      location: "Coyoacán, CDMX",
      status: "inactiva",
      agentId: "agent003",
      agentName: "Ana Patricia Ruiz",
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      description: "Amplia casa familiar con patio trasero",
      featured: false,
      views: 78,
      inquiries: 5,
      dateCreated: "2024-01-12",
      dateUpdated: "2024-01-19",
    },
  ];

  const agents = [
    { id: "agent001", name: "María González", properties: 2, active: true },
    { id: "agent002", name: "Carlos Mendoza", properties: 1, active: true },
    { id: "agent003", name: "Ana Patricia Ruiz", properties: 1, active: false },
  ];

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || property.status === filterStatus;
    const matchesType = filterType === "all" || property.type === filterType;
    const matchesAgent =
      isAdmin || property.agentId === user?.id; // Show all for admin, only own for agents

    return matchesSearch && matchesStatus && matchesType && matchesAgent;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      activa: {
        variant: "default",
        icon: CheckCircle,
        color: "text-green-600",
      },
      vendida: {
        variant: "secondary",
        icon: CheckCircle,
        color: "text-blue-600",
      },
      pendiente: {
        variant: "outline",
        icon: AlertTriangle,
        color: "text-orange-600",
      },
      inactiva: {
        variant: "destructive",
        icon: XCircle,
        color: "text-red-600",
      },
    };
    const config = variants[status] || variants["activa"];
    const Icon = config.icon;
    return (
      <Badge variant={config.variant as any} className="flex items-center">
        <Icon className="w-3 h-3 mr-1" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const handleEdit = (property) => {
    setSelectedProperty(property);
    setPropertyForm({
      id: property.id,
      title: property.title,
      type: property.type,
      price: property.price.toString(),
      location: property.location,
      description: property.description,
      bedrooms: property.bedrooms?.toString() || "",
      bathrooms: property.bathrooms?.toString() || "",
      area: property.area.toString(),
      status: property.status,
      agentId: property.agentId,
      images: [],
      featured: property.featured,
    });
    setIsEditing(true);
  };

  const handleAdd = () => {
    setPropertyForm({
      id: "",
      title: "",
      type: "",
      price: "",
      location: "",
      description: "",
      bedrooms: "",
      bathrooms: "",
      area: "",
      status: "activa",
      agentId: isAgent ? user?.id || "" : "",
      images: [],
      featured: false,
    });
    setIsAdding(true);
  };

  const handleSave = () => {
    console.log("Saving property:", propertyForm);
    alert(
      isAdding
        ? "¡Propiedad agregada exitosamente!"
        : "¡Propiedad actualizada exitosamente!",
    );
    setIsEditing(false);
    setIsAdding(false);
    setSelectedProperty(null);
  };

  const handleDelete = (propertyId) => {
    if (confirm("¿Estás seguro de que quieres eliminar esta propiedad?")) {
      console.log("Deleting property:", propertyId);
      alert("Propiedad eliminada exitosamente");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsAdding(false);
    setSelectedProperty(null);
  };

  // Property Form Component
  const PropertyForm = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          {isAdding ? (
            <Plus className="w-5 h-5 mr-2" />
          ) : (
            <Edit className="w-5 h-5 mr-2" />
          )}
          {isAdding ? "Agregar Nueva Propiedad" : "Editar Propiedad"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Título</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={propertyForm.title}
                onChange={(e) =>
                  setPropertyForm({ ...propertyForm, title: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tipo</label>
              <select
                className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={propertyForm.type}
                onChange={(e) =>
                  setPropertyForm({ ...propertyForm, type: e.target.value })
                }
              >
                <option value="">Seleccionar tipo</option>
                <option value="Casa">Casa</option>
                <option value="Terreno">Terreno</option>
                <option value="Local Comercial">Local Comercial</option>
                <option value="Departamento">Departamento</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Precio (MXN)
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={propertyForm.price}
                onChange={(e) =>
                  setPropertyForm({ ...propertyForm, price: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Ubicación
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={propertyForm.location}
                onChange={(e) =>
                  setPropertyForm({ ...propertyForm, location: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Área (m²)
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={propertyForm.area}
                onChange={(e) =>
                  setPropertyForm({ ...propertyForm, area: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Estado</label>
              <select
                className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={propertyForm.status}
                onChange={(e) =>
                  setPropertyForm({ ...propertyForm, status: e.target.value })
                }
              >
                <option value="activa">Activa</option>
                <option value="vendida">Vendida</option>
                <option value="pendiente">Pendiente</option>
                <option value="inactiva">Inactiva</option>
              </select>
            </div>
            {propertyForm.type === "Casa" && (
              <>
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
              </>
            )}
            {isAdmin && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Agente Asignado
                </label>
                <select
                  className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={propertyForm.agentId}
                  onChange={(e) =>
                    setPropertyForm({
                      ...propertyForm,
                      agentId: e.target.value,
                    })
                  }
                >
                  <option value="">Seleccionar agente</option>
                  {agents.map((agent) => (
                    <option key={agent.id} value={agent.id}>
                      {agent.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Descripción
            </label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={propertyForm.description}
              onChange={(e) =>
                setPropertyForm({
                  ...propertyForm,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="featured"
              checked={propertyForm.featured}
              onChange={(e) =>
                setPropertyForm({ ...propertyForm, featured: e.target.checked })
              }
              className="rounded"
            />
            <label htmlFor="featured" className="text-sm font-medium">
              Marcar como destacada
            </label>
          </div>

          <div className="border-2 border-dashed border-muted-foreground rounded-lg p-8 text-center">
            <Camera className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-2">
              Subir fotos de la propiedad
            </p>
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Seleccionar Fotos
            </Button>
          </div>

          <div className="flex space-x-4">
            <Button onClick={handleSave} className="flex-1">
              <Save className="w-4 h-4 mr-2" />
              {isAdding ? "Agregar Propiedad" : "Guardar Cambios"}
            </Button>
            <Button variant="outline" onClick={handleCancel} className="flex-1">
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );

  return (
    <ProtectedRoute requiredPermissions={["properties.read"]}>
      <Layout>
        <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 via-background to-accent/5 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Administrar Propiedades
                  </h1>
                  <p className="text-muted-foreground">
                    {isAdmin
                      ? "Panel de administrador - Gestión completa"
                      : "Panel de agente - Mis propiedades"}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    {isAdmin ? (
                      <Shield className="w-5 h-5 text-primary" />
                    ) : (
                      <User className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{user?.name}</div>
                    <Badge variant={isAdmin ? "default" : "secondary"} className="text-xs">
                      {user?.role === "admin" ? "Administrador" : "Agente"}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="properties">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="properties">Propiedades</TabsTrigger>
              {isAdmin && (
                <TabsTrigger value="agents">Agentes</TabsTrigger>
              )}
              <TabsTrigger value="stats">Estadísticas</TabsTrigger>
            </TabsList>

            {/* Properties Tab */}
            <TabsContent value="properties" className="space-y-6">
              {/* Add Property Form */}
              {(isAdding || isEditing) && <PropertyForm />}

              {/* Filters and Actions */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
                    <div className="flex flex-col sm:flex-row gap-4 flex-1">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Buscar propiedades..."
                          className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <select
                        className="px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                      >
                        <option value="all">Todos los estados</option>
                        <option value="activa">Activa</option>
                        <option value="vendida">Vendida</option>
                        <option value="pendiente">Pendiente</option>
                        <option value="inactiva">Inactiva</option>
                      </select>
                      <select
                        className="px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                      >
                        <option value="all">Todos los tipos</option>
                        <option value="Casa">Casa</option>
                        <option value="Terreno">Terreno</option>
                        <option value="Local Comercial">Local Comercial</option>
                      </select>
                    </div>
                    <Button
                      onClick={handleAdd}
                      disabled={isAdding || isEditing}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Nueva Propiedad
                    </Button>
                  </div>

                  <div className="text-sm text-muted-foreground mb-4">
                    Mostrando {filteredProperties.length} propiedades
                  </div>
                </CardContent>
              </Card>

              {/* Properties List */}
              <div className="space-y-4">
                {filteredProperties.map((property) => (
                  <Card
                    key={property.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Property Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                {property.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {property.location}
                                </div>
                                <div className="flex items-center">
                                  <Building className="w-4 h-4 mr-1" />
                                  {property.type}
                                </div>
                                <div className="flex items-center">
                                  <Square className="w-4 h-4 mr-1" />
                                  {property.area} m²
                                </div>
                                {property.bedrooms && (
                                  <div className="flex items-center">
                                    <Home className="w-4 h-4 mr-1" />
                                    {property.bedrooms} hab,{" "}
                                    {property.bathrooms} baños
                                  </div>
                                )}
                              </div>
                              {isAdmin && (
                                <div className="flex items-center text-sm text-muted-foreground mb-2">
                                  <User className="w-4 h-4 mr-1" />
                                  Agente: {property.agentName}
                                </div>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary mb-2">
                                {property.priceFormatted}
                              </div>
                              {getStatusBadge(property.status)}
                              {property.featured && (
                                <Badge variant="outline" className="ml-2">
                                  <Eye className="w-3 h-3 mr-1" />
                                  Destacada
                                </Badge>
                              )}
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4">
                            {property.description}
                          </p>

                          {/* Stats */}
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div className="text-center p-3 bg-muted/50 rounded-lg">
                              <div className="text-lg font-semibold">
                                {property.views}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Vistas
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
                                {property.dateCreated}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Creada
                              </div>
                            </div>
                            <div className="text-center p-3 bg-muted/50 rounded-lg">
                              <div className="text-lg font-semibold">
                                {property.dateUpdated}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Actualizada
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-wrap gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(property)}
                              disabled={isAdding || isEditing}
                            >
                              <Edit className="w-4 h-4 mr-2" />
                              Editar
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              Ver Público
                            </Button>
                            {(isAdmin || (isAgent && property.agentId === user?.id)) && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-destructive"
                                onClick={() => handleDelete(property.id)}
                                disabled={isAdding || isEditing}
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Eliminar
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Building className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      No se encontraron propiedades
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Ajusta los filtros o agrega una nueva propiedad
                    </p>
                    <Button onClick={handleAdd}>
                      <Plus className="w-4 h-4 mr-2" />
                      Agregar Primera Propiedad
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Agents Tab (Admin Only) */}
            {isAdmin && (
              <TabsContent value="agents" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Gestión de Agentes</CardTitle>
                    <CardDescription>
                      Administra los agentes y sus propiedades asignadas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {agents.map((agent) => (
                        <div
                          key={agent.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{agent.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {agent.properties} propiedades asignadas
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={agent.active ? "default" : "secondary"}
                            >
                              {agent.active ? "Activo" : "Inactivo"}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-2" />
                              Editar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}

            {/* Stats Tab */}
            <TabsContent value="stats" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Total Propiedades
                        </p>
                        <p className="text-2xl font-bold">
                          {properties.length}
                        </p>
                      </div>
                      <Building className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Activas
                        </p>
                        <p className="text-2xl font-bold text-green-600">
                          {
                            properties.filter((p) => p.status === "activa")
                              .length
                          }
                        </p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Vendidas
                        </p>
                        <p className="text-2xl font-bold text-blue-600">
                          {
                            properties.filter((p) => p.status === "vendida")
                              .length
                          }
                        </p>
                      </div>
                      <DollarSign className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Valor Total
                        </p>
                        <p className="text-2xl font-bold">$16.7M</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
