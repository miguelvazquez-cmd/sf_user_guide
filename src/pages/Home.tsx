import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-[#020202]">Manual de Salesforce para CS</h1>
        <p className="text-xl text-[#020202]">Guía completa para el departamento de Customer Success</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-[#26D07C]">
        <h2 className="text-2xl font-bold mb-4 text-[#020202]">Bienvenido al Manual</h2>
        <p className="mb-4">
          Este manual ha sido diseñado para proporcionar una guía completa sobre el uso de Salesforce para el departamento de Customer Success (CS) de Total Pass. Aquí encontrarás información detallada sobre procesos, buenas prácticas y soluciones a problemas comunes.
        </p>
        <p>
          Navega por las diferentes secciones utilizando el menú lateral o los enlaces a continuación para encontrar la información que necesitas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="card hover:border-l-4 hover:border-[#26D07C]">
          <h3 className="text-xl font-semibold mb-2 text-[#020202]">Conceptos Básicos</h3>
          <p className="mb-4">Fundamentos de Salesforce y terminología esencial para el equipo de CS.</p>
          <Link to="/conceptos-basicos" className="inline-flex items-center text-[#26D07C] hover:text-[#3FF49B]">
            Ver más
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="card hover:border-l-4 hover:border-[#26D07C]">
          <h3 className="text-xl font-semibold mb-2 text-[#020202]">Flujo de Trabajo</h3>
          <p className="mb-4">Proceso completo desde la captación de leads hasta la activación de clientes.</p>
          <Link to="/flujo-trabajo" className="inline-flex items-center text-[#26D07C] hover:text-[#3FF49B]">
            Ver más
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="card hover:border-l-4 hover:border-[#26D07C]">
          <h3 className="text-xl font-semibold mb-2 text-[#020202]">Gestión de Cuentas</h3>
          <p className="mb-4">Creación y administración de cuentas de clientes en Salesforce.</p>
          <Link to="/gestion-cuentas" className="inline-flex items-center text-[#26D07C] hover:text-[#3FF49B]">
            Ver más
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="card hover:border-l-4 hover:border-[#26D07C]">
          <h3 className="text-xl font-semibold mb-2 text-[#020202]">Gestión de Oportunidades</h3>
          <p className="mb-4">Seguimiento y gestión de oportunidades de negocio.</p>
          <Link to="/gestion-oportunidades" className="inline-flex items-center text-[#26D07C] hover:text-[#3FF49B]">
            Ver más
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="bg-[#020202] text-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Secciones Principales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: "Introducción", path: "/introduccion" },
            { title: "Conceptos Básicos", path: "/conceptos-basicos" },
            { title: "Flujo de Trabajo", path: "/flujo-trabajo" },
            { title: "Gestión de Cuentas", path: "/gestion-cuentas" },
            { title: "Gestión de Oportunidades", path: "/gestion-oportunidades" },
            { title: "Proceso de Cotización", path: "/proceso-cotizacion" },
            { title: "Gestión Documental", path: "/gestion-documental" },
            { title: "Contratos y Aspectos Legales", path: "/contratos-aspectos-legales" },
            { title: "Activación y Onboarding", path: "/activacion-onboarding" },
            { title: "Reportes y Dashboards", path: "/reportes-dashboards" },
            { title: "Integración con Sistemas", path: "/integracion-sistemas" },
            { title: "Buenas Prácticas", path: "/buenas-practicas" },
            { title: "Solución de Problemas", path: "/solucion-problemas" },
            { title: "Glosario de Términos", path: "/glosario" },
            { title: "Anexos", path: "/anexos" },
          ].map((item, index) => (
            <Link 
              key={index} 
              to={item.path}
              className="bg-[#26D07C] text-[#020202] hover:bg-[#3FF49B] rounded-full p-3 transition-all duration-200 text-center font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 border-l-4 border-[#26D07C]">
        <h2 className="text-xl font-bold mb-2 text-[#020202]">¿Necesitas ayuda adicional?</h2>
        <p className="mb-4">
          Si tienes dudas específicas o necesitas asistencia personalizada, no dudes en contactar al equipo de soporte de Salesforce o a tu supervisor directo.
        </p>
        <div className="flex items-center text-[#020202]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#26D07C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Este manual se actualiza regularmente para reflejar los cambios en los procesos y en la plataforma.</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
