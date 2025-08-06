import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Asesoria() {
  return (
    <Layout>
      <div className="min-h-screen bg-muted/50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Card className="p-8">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Asesoría Jurídica Inmobiliaria</CardTitle>
              <CardDescription className="text-lg">
                Esta sección está en desarrollo. Aquí encontrarás nuestros servicios de asesoría legal especializada en bienes raíces.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Servicios que estarán disponibles:
              </p>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Revisión y análisis de documentos legales</li>
                <li>• Asesoría en trámites notariales</li>
                <li>• Consultoría fiscal inmobiliaria</li>
                <li>• Resolución de conflictos y disputas</li>
                <li>• Verificación de títulos de propiedad</li>
                <li>• Consultas en línea y presenciales</li>
                <li>• Formularios de contacto para consultas</li>
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
