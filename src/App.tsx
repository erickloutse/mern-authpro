import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import AppRoutes from '@/routes';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <AnimatePresence mode="wait">
          <AppRoutes />
        </AnimatePresence>
      </Router>
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}

export default App;