import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Agentes() {
  return (
    <Layout>
      <div className="min-h-screen bg-muted/50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Card className="p-8">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Portal de Agentes Inmobiliarios</CardTitle>
              <CardDescription className="text-lg">
                Esta sección está en desarrollo. Aquí los agentes podrán registrarse y gestionar sus propiedades.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Funcionalidades que estarán disponibles:
              </p>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Registro de agentes inmobiliarios honorarios</li>
                <li>• Panel de control para gestión de propiedades</li>
                <li>• Subida de fotos e información de inmuebles</li>
                <li>• Sistema de verificación de credenciales</li>
                <li>• Herramientas de marketing para agentes</li>
                <li>• Reportes de ventas y estadísticas</li>
                <li>• Comunicación directa con clientes potenciales</li>
              </ul>
              <div className="pt-6">
                <Link to="/">
                  <Button>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver al Inicio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
