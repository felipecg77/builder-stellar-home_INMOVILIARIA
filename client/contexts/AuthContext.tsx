import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'agent';
  permissions: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  hasPermission: (permission: string) => boolean;
  isAdmin: boolean;
  isAgent: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const MOCK_USERS: User[] = [
  {
    id: 'admin001',
    name: 'Administrador Sistema',
    email: 'admin@inmovision.mx',
    role: 'admin',
    permissions: [
      'properties.create',
      'properties.read',
      'properties.update', 
      'properties.delete',
      'users.manage',
      'agents.manage',
      'reports.view'
    ]
  },
  {
    id: 'agent001',
    name: 'María González',
    email: 'maria.gonzalez@inmovision.mx',
    role: 'agent',
    permissions: [
      'properties.create',
      'properties.read',
      'properties.update.own',
      'properties.delete.own'
    ]
  },
  {
    id: 'agent002',
    name: 'Carlos Mendoza',
    email: 'carlos.mendoza@inmovision.mx',
    role: 'agent',
    permissions: [
      'properties.create',
      'properties.read',
      'properties.update.own',
      'properties.delete.own'
    ]
  }
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored session on app load
    const storedUser = localStorage.getItem('inmovision_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('inmovision_user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call your API
    const foundUser = MOCK_USERS.find(u => u.email === email);
    
    if (foundUser && password === '123456') { // Simple demo password
      setUser(foundUser);
      localStorage.setItem('inmovision_user', JSON.stringify(foundUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('inmovision_user');
  };

  const hasPermission = (permission: string): boolean => {
    if (!user) return false;
    return user.permissions.includes(permission);
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    hasPermission,
    isAdmin: user?.role === 'admin',
    isAgent: user?.role === 'agent'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
