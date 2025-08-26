import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/introduccion', label: '1. Introducción' },
    { path: '/conceptos-basicos', label: '2. Conceptos Básicos' },
    { path: '/flujo-trabajo', label: '3. Flujo de Trabajo' },
    { path: '/gestion-cuentas', label: '4. Gestión de Cuentas' },
    { path: '/gestion-oportunidades', label: '5. Gestión de Oportunidades' },
    { path: '/proceso-cotizacion', label: '6. Proceso de Cotización' },
    { path: '/gestion-documental', label: '7. Gestión Documental' },
    { path: '/contratos-aspectos-legales', label: '8. Contratos y Aspectos Legales' },
    { path: '/activacion-onboarding', label: '9. Activación y Onboarding' },
    { path: '/reportes-dashboards', label: '10. Reportes y Dashboards' },
    { path: '/integracion-sistemas', label: '11. Integración con Sistemas' },
    { path: '/buenas-practicas', label: '12. Buenas Prácticas' },
    { path: '/solucion-problemas', label: '13. Solución de Problemas' },
    { path: '/glosario', label: '14. Glosario de Términos' },
    { path: '/anexos', label: '15. Anexos' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar para móvil */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={toggleSidebar}></div>
        <div className="fixed inset-y-0 left-0 flex flex-col w-64 max-w-xs bg-[#020202] text-white overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold">Manual Salesforce CS</h2>
            <button onClick={toggleSidebar} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-[#26D07C] text-[#020202]'
                    : 'text-gray-100 hover:bg-[#26D07C] hover:text-[#020202]'
                }`}
                onClick={toggleSidebar}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Sidebar para desktop */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 sidebar">
        <div className="flex items-center justify-center h-16 px-4 bg-[#020202] border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Manual Salesforce CS</h2>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto bg-[#020202]">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-[#26D07C] text-[#020202]'
                    : 'text-gray-100 hover:bg-[#26D07C] hover:text-[#020202]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Barra superior */}
        <div className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 lg:hidden">
          <button
            onClick={toggleSidebar}
            className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#26D07C]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center">
            <h2 className="text-lg font-medium text-[#020202]">Manual Salesforce CS</h2>
          </div>
          <div className="w-6"></div> {/* Espacio para equilibrar el diseño */}
        </div>

        {/* Contenido de la página */}
        <main className="flex-1 p-4 md:p-8">
          <div className="animate-fadeIn">{children}</div>
        </main>

        {/* Pie de página */}
        <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Total Pass - Manual de Salesforce para CS</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
