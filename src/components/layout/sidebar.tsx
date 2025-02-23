import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Moon,
  Sun,
  Menu,
} from 'lucide-react';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, logout } = useAuthStore();
  const { theme, setTheme } = useTheme();

  const menuItems = [
    {
      path: '/dashboard',
      name: 'Tableau de bord',
      icon: LayoutDashboard,
    },
    ...(user?.role === 'admin'
      ? [
          {
            path: '/admin/users',
            name: 'Utilisateurs',
            icon: Users,
          },
        ]
      : []),
    {
      path: '/settings',
      name: 'Paramètres',
      icon: Settings,
    },
  ];

  return (
    <motion.div
      initial={{ width: 250 }}
      animate={{ width: isCollapsed ? 80 : 250 }}
      className="min-h-screen bg-background border-r flex flex-col"
    >
      <div className="p-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          className="font-bold text-xl"
        >
          {!isCollapsed && 'Dashboard'}
        </motion.h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg transition-colors',
                'hover:bg-accent hover:text-accent-foreground',
                isActive && 'bg-accent text-accent-foreground'
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {!isCollapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="mb-2"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        <Button
          variant="ghost"
          className={cn('w-full justify-start gap-2', isCollapsed && 'justify-center')}
          onClick={() => logout()}
        >
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span>Déconnexion</span>}
        </Button>
      </div>
    </motion.div>
  );
}