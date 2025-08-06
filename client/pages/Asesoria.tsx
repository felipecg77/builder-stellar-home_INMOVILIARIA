import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Scale, 
  FileText, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Shield,
  FileCheck,
  Users,
  MessageSquare,
  Send,
  Upload
} from 'lucide-react';

export default function Asesoria() {
  const [selectedService, setSelectedService] = useState('');
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [documentForm, setDocumentForm] = useState({
    name: '',
    email: '',
    phone: '',
    documentType: '',
    urgency: 'normal',
    description: ''
  });

  const legalServices = [
    {
      id: 'revision-documentos',
      title: 'Revisión de Documentos',
      icon: FileCheck,
      price: 'Desde $2,500',
      description: 'Análisis exhaustivo de contratos de compraventa, escrituras y documentos legales',
      features: ['Verificación de autenticidad', 'Análisis de cláusulas', 'Detección de irregularidades', 'Reporte detallado'],
      duration: '2-3 días hábiles'
    },
    {
      id: 'tramites-notariales',
      title: 'Trámites Notariales',
      icon: Scale,
      price: 'Desde $5,000',
      description: 'Gestión completa de escrituración y trámites ante notario público',
      features: ['Preparación de documentos', 'Coordinación con notario', 'Seguimiento de proceso', 'Entrega de escrituras'],
      duration: '15-30 días hábiles'
    },
    {
      id: 'asesoria-fiscal',
      title: 'Asesoría Fiscal',
      icon: Shield,
      price: 'Desde $3,000',
      description: 'Consultoría especializada en aspectos fiscales de transacciones inmobiliarias',
      features: ['Cálculo de impuestos', 'Estrategias fiscales', 'Declaraciones', 'Optimización tributaria'],
      duration: '1-2 días hábiles'
    },
    {
      id: 'resolucion-conflictos',
      title: 'Resolución de Conflictos',
      icon: Users,
      price: 'Consultar',
      description: 'Mediación y litigio en disputas inmobiliarias y contractuales',
      features: ['Mediación extrajudicial', 'Representación legal', 'Negociación', 'Litigio especializado'],
      duration: 'Variable'
    }
  ];

  const legalTeam = [
    {
      name: 'Lic. María González',
      title: 'Directora Legal',
      specialization: 'Derecho Inmobiliario',
      experience: '15 años',
      cedula: '1234567',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Lic. Carlos Mendoza',
      title: 'Socio Senior',
      specialization: 'Derecho Fiscal',
      experience: '12 años',
      cedula: '2345678',
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Lic. Ana Patricia Ruiz',
      title: 'Abogada Asociada',
      specialization: 'Derecho Notarial',
      experience: '8 años',
      cedula: '3456789',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const faqData = [
    {
      question: '¿Qué documentos necesito para la compra de una propiedad?',
      answer: 'Para la compra de una propiedad necesitas: identificación oficial, comprobante de ingresos, estados de cuenta bancarios, escritura pública del vendedor, certificado de libertad de gravamen, predial al corriente, y en algunos casos, avalúo comercial.'
    },
    {
      question: '¿Cuánto tiempo toma el proceso de escrituración?',
      answer: 'El proceso de escrituración típicamente toma entre 15 a 30 días hábiles, dependiendo de la complejidad del caso, la disponibilidad del notario, y si todos los documentos están en orden.'
    },
    {
      question: '¿Qué impuestos debo pagar al comprar una propiedad?',
      answer: 'Los principales impuestos son: ISR (si aplica), impuesto de adquisición de inmuebles (2-4% del valor), derechos registrales, y honorarios notariales. El monto exacto depende del valor de la propiedad y su ubicación.'
    },
    {
      question: '¿Es obligatorio contratar un abogado para comprar una casa?',
      answer: 'Aunque no es obligatorio por ley, es altamente recomendable contar con asesoría legal para revisar documentos, verificar la situación jurídica del inmueble y proteger tus intereses durante la transacción.'
    },
    {
      question: '¿Qué hacer si encuentro irregularidades en los documentos?',
      answer: 'Si detectas irregularidades, suspende inmediatamente el proceso de compra y consulta con un abogado especializado. Es importante resolver cualquier problema legal antes de proceder con la transacción.'
    }
  ];

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Consultation form submitted:', consultationForm);
    alert('¡Solicitud enviada! Te contactaremos pronto para confirmar tu cita.');
  };

  const handleDocumentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Document review form submitted:', documentForm);
    alert('¡Solicitud de revisión enviada! Recibirás un presupuesto en 24 horas.');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 via-background to-accent/5 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Asesoría Jurídica Inmobiliaria
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Protege tu inversión con nuestro equipo de abogados especializados en derecho inmobiliario. 
                Te acompañamos en cada paso de tu transacción.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  (55) 1234-5678
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
              <p className="text-xl text-muted-foreground">
                Servicios legales especializados para todas tus necesidades inmobiliarias
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {legalServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                            <Badge variant="secondary">{service.price}</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Tiempo estimado:</p>
                          <p className="text-sm font-medium">{service.duration}</p>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-4" onClick={() => setSelectedService(service.id)}>
                        Solicitar Servicio
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive Forms Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Solicita tu Asesoría</h2>
              <p className="text-xl text-muted-foreground">
                Elige el tipo de servicio que necesitas y agenda tu consulta
              </p>
            </div>

            <Tabs defaultValue="consultation" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="consultation">Consulta Personalizada</TabsTrigger>
                <TabsTrigger value="document">Revisión de Documentos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="consultation">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Agendar Consulta Legal
                    </CardTitle>
                    <CardDescription>
                      Agenda una consulta personalizada con nuestros especialistas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleConsultationSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Nombre Completo</label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={consultationForm.name}
                            onChange={(e) => setConsultationForm({...consultationForm, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email</label>
                          <input
                            type="email"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={consultationForm.email}
                            onChange={(e) => setConsultationForm({...consultationForm, email: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Teléfono</label>
                          <input
                            type="tel"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={consultationForm.phone}
                            onChange={(e) => setConsultationForm({...consultationForm, phone: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Tipo de Servicio</label>
                          <select
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={consultationForm.service}
                            onChange={(e) => setConsultationForm({...consultationForm, service: e.target.value})}
                          >
                            <option value="">Seleccionar servicio</option>
                            <option value="revision-documentos">Revisión de Documentos</option>
                            <option value="tramites-notariales">Trámites Notariales</option>
                            <option value="asesoria-fiscal">Asesoría Fiscal</option>
                            <option value="resolucion-conflictos">Resolución de Conflictos</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Fecha Preferida</label>
                          <input
                            type="date"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={consultationForm.preferredDate}
                            onChange={(e) => setConsultationForm({...consultationForm, preferredDate: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Hora Preferida</label>
                          <select
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={consultationForm.preferredTime}
                            onChange={(e) => setConsultationForm({...consultationForm, preferredTime: e.target.value})}
                          >
                            <option value="">Seleccionar hora</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="17:00">5:00 PM</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Descripción del Caso</label>
                        <textarea
                          rows={4}
                          required
                          className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Describe brevemente tu situación legal..."
                          value={consultationForm.description}
                          onChange={(e) => setConsultationForm({...consultationForm, description: e.target.value})}
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Solicitud
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="document">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileCheck className="w-5 h-5 mr-2" />
                      Revisión de Documentos
                    </CardTitle>
                    <CardDescription>
                      Solicita la revisión profesional de tus documentos inmobiliarios
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleDocumentSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Nombre Completo</label>
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={documentForm.name}
                            onChange={(e) => setDocumentForm({...documentForm, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email</label>
                          <input
                            type="email"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={documentForm.email}
                            onChange={(e) => setDocumentForm({...documentForm, email: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Teléfono</label>
                          <input
                            type="tel"
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={documentForm.phone}
                            onChange={(e) => setDocumentForm({...documentForm, phone: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Tipo de Documento</label>
                          <select
                            required
                            className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            value={documentForm.documentType}
                            onChange={(e) => setDocumentForm({...documentForm, documentType: e.target.value})}
                          >
                            <option value="">Seleccionar tipo</option>
                            <option value="contrato-compraventa">Contrato de Compraventa</option>
                            <option value="escritura-publica">Escritura Pública</option>
                            <option value="contrato-arrendamiento">Contrato de Arrendamiento</option>
                            <option value="fideicomiso">Fideicomiso</option>
                            <option value="otros">Otros</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium mb-2">Urgencia</label>
                          <div className="flex space-x-4">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="urgency"
                                value="normal"
                                checked={documentForm.urgency === 'normal'}
                                onChange={(e) => setDocumentForm({...documentForm, urgency: e.target.value})}
                                className="mr-2"
                              />
                              Normal (2-3 días)
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name="urgency"
                                value="urgent"
                                checked={documentForm.urgency === 'urgent'}
                                onChange={(e) => setDocumentForm({...documentForm, urgency: e.target.value})}
                                className="mr-2"
                              />
                              Urgente (24 horas)
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Descripción</label>
                        <textarea
                          rows={4}
                          required
                          className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Describe qué aspectos específicos quieres que revisemos..."
                          value={documentForm.description}
                          onChange={(e) => setDocumentForm({...documentForm, description: e.target.value})}
                        />
                      </div>
                      <div className="border-2 border-dashed border-muted-foreground rounded-lg p-8 text-center">
                        <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground mb-2">Arrastra y suelta tus documentos aquí</p>
                        <p className="text-sm text-muted-foreground">o</p>
                        <Button variant="outline" className="mt-2">
                          Seleccionar Archivos
                        </Button>
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        <Send className="w-5 h-5 mr-2" />
                        Enviar para Revisión
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Legal Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nuestro Equipo Legal</h2>
              <p className="text-xl text-muted-foreground">
                Abogados especializados con amplia experiencia en derecho inmobiliario
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {legalTeam.map((lawyer, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <CardTitle className="text-xl">{lawyer.name}</CardTitle>
                    <div className="space-y-2">
                      <Badge variant="outline">{lawyer.title}</Badge>
                      <CardDescription className="text-sm">{lawyer.specialization}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{lawyer.experience} de experiencia</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <FileText className="w-4 h-4 mr-2" />
                        <span>Cédula: {lawyer.cedula}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contactar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Preguntas Frecuentes</h2>
              <p className="text-xl text-muted-foreground">
                Resolvemos las dudas más comunes sobre servicios legales inmobiliarios
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas Asesoría Inmediata?</h2>
            <p className="text-xl opacity-90 mb-8">
              Nuestro equipo está disponible para atender tus consultas urgentes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Llámanos</h3>
                <p className="opacity-90">(55) 1234-5678</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Escríbenos</h3>
                <p className="opacity-90">legal@inmovision.mx</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">Visítanos</h3>
                <p className="opacity-90">Polanco, CDMX</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
