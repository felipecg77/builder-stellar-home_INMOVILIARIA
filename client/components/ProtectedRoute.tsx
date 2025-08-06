import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertCircle } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
  adminOnly?: boolean;
}

export default function ProtectedRoute({
  children,
  requiredPermissions = [],
  adminOnly = false,
}: ProtectedRouteProps) {
  const { isAuthenticated, user, hasPermission, isAdmin } = useAuth();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If admin only and user is not admin
  if (adminOnly && !isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>
            <CardTitle className="text-xl">Acceso Denegado</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Esta sección requiere permisos de administrador.
            </p>
            <p className="text-sm text-muted-foreground">
              Tu rol actual:{" "}
              <span className="font-medium">
                {user?.role === "agent" ? "Agente" : "Usuario"}
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Check specific permissions
  if (requiredPermissions.length > 0) {
    const hasAllPermissions = requiredPermissions.every((permission) =>
      hasPermission(permission),
    );

    if (!hasAllPermissions) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <Card className="max-w-md">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-xl">Permisos Insuficientes</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                No tienes los permisos necesarios para acceder a esta
                funcionalidad.
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">Permisos requeridos:</p>
                <ul className="space-y-1">
                  {requiredPermissions.map((permission, index) => (
                    <li key={index} className="font-mono text-xs">
                      {permission}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }
  }

  return <>{children}</>;
}
