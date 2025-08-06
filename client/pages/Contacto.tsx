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
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Building,
  Users,
  Shield,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Contacto() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactMethod: "email",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Contact form submitted:", contactForm);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setContactForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        contactMethod: "email",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      title: "Teléfono Principal",
      value: "+52 (55) 1234-5678",
      icon: Phone,
      action: () => window.open("tel:+525512345678"),
      description: "Lunes a Viernes: 9:00 AM - 7:00 PM",
    },
    {
      title: "Correo Electrónico",
      value: "info@inmovision.mx",
      icon: Mail,
      action: () => window.open("mailto:info@inmovision.mx"),
      description: "Respuesta en 24 horas",
    },
    {
      title: "WhatsApp",
      value: "+52 (55) 9876-5432",
      icon: MessageSquare,
      action: () =>
        window.open("https://wa.me/525598765432?text=Hola, me interesa saber más sobre sus propiedades"),
      description: "Disponible 24/7",
    },
    {
      title: "Oficina Principal",
      value: "Polanco, CDMX",
      icon: MapPin,
      action: () =>
        window.open(
          "https://maps.google.com/?q=Polanco,Ciudad+de+México,México"
        ),
      description: "Av. Masaryk 123, Polanco V Sección",
    },
  ];

  const departments = [
    {
      name: "Ventas Residenciales",
      email: "ventas@inmovision.mx",
      phone: "+52 (55) 1234-5679",
      description: "Casas y departamentos",
    },
    {
      name: "Ventas Comerciales",
      email: "comercial@inmovision.mx",
      phone: "+52 (55) 1234-5680",
      description: "Oficinas y locales comerciales",
    },
    {
      name: "Terrenos y Desarrollos",
      email: "terrenos@inmovision.mx",
      phone: "+52 (55) 1234-5681",
      description: "Lotes y proyectos de desarrollo",
    },
    {
      name: "Asesoría Jurídica",
      email: "legal@inmovision.mx",
      phone: "+52 (55) 1234-5682",
      description: "Trámites y documentación legal",
    },
  ];

  const officeHours = [
    { day: "Lunes - Viernes", hours: "9:00 AM - 7:00 PM" },
    { day: "Sábados", hours: "9:00 AM - 3:00 PM" },
    { day: "Domingos", hours: "Cerrado" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-background to-accent/5 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Contáctanos
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Estamos aquí para ayudarte a encontrar la propiedad perfecta.
                Nuestro equipo de expertos está listo para asesorarte en cada
                paso del proceso.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y te contactaremos lo antes posible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitSuccess ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        ¡Mensaje Enviado!
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Gracias por contactarnos. Te responderemos en las
                        próximas 24 horas.
                      </p>
                      <Button
                        onClick={() => setSubmitSuccess(false)}
                        variant="outline"
                      >
                        Enviar Otro Mensaje
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Nombre Completo *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={contactForm.name}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                name: e.target.value,
                              })
                            }
                            placeholder="Tu nombre completo"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={contactForm.email}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                email: e.target.value,
                              })
                            }
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Teléfono
                          </label>
                          <input
                            type="tel"
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={contactForm.phone}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+52 (55) 1234-5678"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Método de Contacto Preferido
                          </label>
                          <select
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={contactForm.contactMethod}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                contactMethod: e.target.value,
                              })
                            }
                          >
                            <option value="email">Email</option>
                            <option value="phone">Teléfono</option>
                            <option value="whatsapp">WhatsApp</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Asunto *
                        </label>
                        <select
                          required
                          className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          value={contactForm.subject}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              subject: e.target.value,
                            })
                          }
                        >
                          <option value="">Seleccionar asunto</option>
                          <option value="compra">Compra de Propiedad</option>
                          <option value="venta">Venta de Propiedad</option>
                          <option value="inversion">Oportunidades de Inversión</option>
                          <option value="asesoria">Asesoría Jurídica</option>
                          <option value="valuacion">Valuación</option>
                          <option value="agente">Ser Agente</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Mensaje *
                        </label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          value={contactForm.message}
                          onChange={(e) =>
                            setContactForm({
                              ...contactForm,
                              message: e.target.value,
                            })
                          }
                          placeholder="Cuéntanos cómo podemos ayudarte..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                            Enviando...
                          </div>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Enviar Mensaje
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <Card
                      key={index}
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={contact.action}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm">
                              {contact.title}
                            </h3>
                            <p className="text-sm font-medium text-primary">
                              {contact.value}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {contact.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Departments */}
              <Card>
                <CardHeader>
                  <CardTitle>Departamentos Especializados</CardTitle>
                  <CardDescription>
                    Contacta directamente al departamento que necesites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div>
                          <h4 className="font-medium">{dept.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {dept.description}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.open(`tel:${dept.phone}`)}
                          >
                            <Phone className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.open(`mailto:${dept.email}`)}
                          >
                            <Mail className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Horarios de Atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <AlertCircle className="w-4 h-4 inline mr-1" />
                      Para emergencias fuera del horario de oficina, utiliza
                      nuestro WhatsApp disponible 24/7.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Nuestra Ubicación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-medium">Av. Masaryk 123</p>
                      <p className="text-sm">Polanco V Sección, CDMX</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() =>
                          window.open(
                            "https://maps.google.com/?q=Polanco,Ciudad+de+México,México"
                          )
                        }
                      >
                        Ver en Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-muted-foreground">
                Las dudas más comunes sobre nuestros servicios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    ¿Cuánto tiempo toma encontrar una propiedad?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Depende de tus criterios específicos, pero normalmente
                    mostramos opciones en 24-48 horas y encontramos la propiedad
                    ideal en 2-4 semanas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    ¿Cobran por la asesoría inicial?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    No, la consulta inicial y asesoría básica son
                    completamente gratuitas. Solo cobramos comisión al cerrar
                    exitosamente una transacción.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    ¿Manejan financiamiento?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Sí, tenemos alianzas con las principales instituciones
                    financieras para ayudarte a conseguir el mejor crédito
                    hipotecario.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    ¿Ofrecen servicios de valuación?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Ofrecemos avalúos profesionales certificados para compra,
                    venta, refinanciamiento o fines fiscales con peritos
                    autorizados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
