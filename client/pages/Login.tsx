import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  LogIn, 
  Building, 
  Shield, 
  User, 
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/administrar');
      } else {
        setError('Credenciales incorrectas. Verifique su email y contraseña.');
      }
    } catch (err) {
      setError('Error al iniciar sesión. Intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const demoUsers = [
    {
      email: 'admin@inmovision.mx',
      role: 'Administrador',
      description: 'Acceso completo al sistema',
      permissions: ['Gestión completa', 'Usuarios', 'Reportes']
    },
    {
      email: 'maria.gonzalez@inmovision.mx',
      role: 'Agente',
      description: 'Gestión de propiedades propias',
      permissions: ['Crear propiedades', 'Editar propias', 'Eliminar propias']
    },
    {
      email: 'carlos.mendoza@inmovision.mx',
      role: 'Agente',
      description: 'Gestión de propiedades propias',
      permissions: ['Crear propiedades', 'Editar propias', 'Eliminar propias']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Login Form */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
              <CardDescription>
                Accede al panel de administración de InmoVision
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@inmovision.mx"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="w-full px-3 py-2 pr-10 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="flex items-center space-x-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Iniciando sesión...
                    </div>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4 mr-2" />
                      Iniciar Sesión
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link 
                  to="/" 
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  ← Volver al inicio
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demo Users Info */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-2">Usuarios de Demostración</h2>
            <p className="text-muted-foreground">
              Utiliza cualquiera de estos usuarios para acceder al sistema
            </p>
          </div>

          <div className="space-y-4">
            {demoUsers.map((user, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => {
                  setEmail(user.email);
                  setPassword('123456');
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        {user.role === 'Administrador' ? (
                          <Shield className="w-5 h-5 text-primary" />
                        ) : (
                          <User className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{user.role}</h3>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <Badge variant={user.role === 'Administrador' ? 'default' : 'secondary'}>
                      {user.role}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {user.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {user.permissions.map((permission, permIndex) => (
                      <Badge key={permIndex} variant="outline" className="text-xs">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-3 text-xs text-muted-foreground">
                    Contraseña: <span className="font-mono">123456</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Diferencias de Permisos:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Administrador:</strong> Acceso completo a todas las funcionalidades</li>
              <li>• <strong>Agente:</strong> Solo puede gestionar sus propias propiedades</li>
              <li>• Los agentes no pueden eliminar propiedades de otros agentes</li>
              <li>• Solo el administrador puede gestionar usuarios y ver reportes completos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
