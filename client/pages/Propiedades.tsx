import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Propiedades() {
  return (
    <Layout>
      <div className="min-h-screen bg-muted/50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Card className="p-8">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Construction className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Catálogo de Propiedades</CardTitle>
              <CardDescription className="text-lg">
                Esta sección está en desarrollo. Aquí podrás navegar por nuestro catálogo completo de terrenos, casas y locales comerciales.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Funcionalidades que estarán disponibles:
              </p>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Búsqueda avanzada por ubicación, precio y características</li>
                <li>• Filtros por tipo de propiedad (terrenos, casas, locales)</li>
                <li>• Galería de fotos de cada propiedad</li>
                <li>• Información detallada y especificaciones</li>
                <li>• Herramientas de comparación</li>
                <li>• Mapa interactivo con ubicaciones</li>
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
