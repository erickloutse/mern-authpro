import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/lib/store';

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Bienvenue, {user?.name || 'Utilisateur'}
          </h1>
          <p className="text-muted-foreground">
            Voici un aperçu de votre tableau de bord
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Statistiques</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Contenu des statistiques...</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Activités récentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Liste des activités...</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Vos notifications...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}