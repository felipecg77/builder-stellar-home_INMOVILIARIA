import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  X,
  Send,
  CheckCircle,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [activeTab, setActiveTab] = useState("quick");
  const [quickForm, setQuickForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Quick contact submitted:", quickForm);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setQuickForm({ name: "", phone: "", message: "" });
    }, 1000);
  };

  const contactOptions = [
    {
      title: "Llamar Ahora",
      description: "Atención inmediata",
      icon: Phone,
      action: () => window.open("tel:+525512345678"),
      color: "bg-green-500",
    },
    {
      title: "WhatsApp",
      description: "Respuesta rápida",
      icon: MessageSquare,
      action: () =>
        window.open(
          "https://wa.me/525598765432?text=Hola, me interesa saber más sobre sus propiedades",
        ),
      color: "bg-green-600",
    },
    {
      title: "Email",
      description: "Consulta detallada",
      icon: Mail,
      action: () => window.open("mailto:info@inmovision.mx"),
      color: "bg-blue-500",
    },
    {
      title: "Visitar Oficina",
      description: "Atención personalizada",
      icon: MapPin,
      action: () =>
        window.open(
          "https://maps.google.com/?q=Polanco,Ciudad+de+México,México",
        ),
      color: "bg-purple-500",
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-xl">Contacto Rápido</CardTitle>
            <CardDescription>
              Elige la forma más conveniente para contactarnos
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
            <button
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "quick"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("quick")}
            >
              Contacto Rápido
            </button>
            <button
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "form"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("form")}
            >
              Formulario
            </button>
          </div>

          {activeTab === "quick" ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        option.action();
                        onClose();
                      }}
                      className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors text-left"
                    >
                      <div
                        className={`w-10 h-10 ${option.color} rounded-full flex items-center justify-center`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">{option.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t">
                <div className="text-center space-y-2">
                  <h3 className="font-medium">Información de Contacto</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>📞 +52 (55) 1234-5678</div>
                    <div>✉️ info@inmovision.mx</div>
                    <div>💬 WhatsApp 24/7</div>
                    <div>📍 Polanco, CDMX</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Te contactaremos en las próximas horas.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitSuccess(false);
                      onClose();
                    }}
                  >
                    Cerrar
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={quickForm.name}
                      onChange={(e) =>
                        setQuickForm({ ...quickForm, name: e.target.value })
                      }
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={quickForm.phone}
                      onChange={(e) =>
                        setQuickForm({ ...quickForm, phone: e.target.value })
                      }
                      placeholder="+52 (55) 1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mensaje Breve
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={quickForm.message}
                      onChange={(e) =>
                        setQuickForm({ ...quickForm, message: e.target.value })
                      }
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      type="submit"
                      className="flex-1"
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
                          Enviar
                        </>
                      )}
                    </Button>
                    <Button type="button" variant="outline" onClick={onClose}>
                      Cancelar
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
