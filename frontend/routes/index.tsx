import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/lib/store';
import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

const Login = lazy(() => import('../pages/auth/login'));
const Register = lazy(() => import('../pages/auth/register'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const AdminDashboard = lazy(() => import('../pages/admin/dashboard'));
const UsersPage = lazy(() => import('../pages/admin/users'));

function PrivateRoute({ children, requiredRole = 'user' }: { children: React.ReactNode; requiredRole?: 'admin' | 'user' }) {
  const { isAuthenticated, user } = useAuthStore();
  
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (requiredRole === 'admin' && user?.role !== 'admin') return <Navigate to="/dashboard" />;
  
  return children;
}

function LoadingSpinner() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute requiredRole="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <PrivateRoute requiredRole="admin">
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Suspense>
  );
}