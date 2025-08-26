const Glosario = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">14. Glosario de Términos</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Terminología específica de Salesforce</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Account (Cuenta)</h3>
            <p>Representa a una empresa cliente o prospecto dentro del sistema. Contiene información fundamental como nombre, RFC, dirección y otros datos identificativos.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Lead</h3>
            <p>Referencia inicial o prospecto que aún no ha sido calificado o convertido. Representa el primer contacto con un potencial cliente.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Opportunity (Oportunidad)</h3>
            <p>Representa una posible venta o negocio con una cuenta. Contiene información sobre el estado de la negociación, montos y probabilidad de cierre.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Quote (Cotización)</h3>
            <p>Propuesta formal enviada a un cliente, con detalles específicos sobre precios, condiciones y servicios ofrecidos.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Contract (Contrato)</h3>
            <p>Acuerdo formal establecido con un cliente, que incluye términos, condiciones, fechas de inicio y fin, entre otros detalles legales.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Task (Tarea)</h3>
            <p>Actividad específica asignada a un usuario para dar seguimiento a procesos o interacciones con clientes.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Event (Evento)</h3>
            <p>Registro de una actividad programada, como una reunión o llamada, con fecha, hora y participantes definidos.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Dashboard</h3>
            <p>Representación visual que agrupa varios reportes en una sola pantalla, proporcionando una visión consolidada de diferentes métricas y KPIs.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Report (Reporte)</h3>
            <p>Herramienta que permite visualizar, filtrar y analizar la información registrada en el sistema según criterios específicos.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Object (Objeto)</h3>
            <p>Estructura de datos en Salesforce que representa una entidad específica, como cuentas, oportunidades o tareas.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Field (Campo)</h3>
            <p>Elemento individual dentro de un objeto que almacena un dato específico, como nombre, teléfono o monto.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Record (Registro)</h3>
            <p>Instancia específica de un objeto, por ejemplo, una cuenta particular o una oportunidad concreta.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Pipeline</h3>
            <p>Representación visual del conjunto de oportunidades en diferentes etapas del proceso de venta.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Stage (Etapa)</h3>
            <p>Fase específica dentro del ciclo de vida de una oportunidad, que indica su progreso hacia el cierre.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Workflow (Flujo de trabajo)</h3>
            <p>Automatización que ejecuta acciones específicas cuando se cumplen determinados criterios.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Validation Rule (Regla de validación)</h3>
            <p>Criterio que verifica que los datos ingresados en un campo cumplan con ciertos requisitos antes de guardar el registro.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-blue-700">Approval Process (Proceso de aprobación)</h3>
            <p>Mecanismo que requiere la revisión y aprobación de ciertos cambios o acciones por parte de usuarios designados.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Términos propios del negocio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">Total Pass</h3>
            <p>Nombre de la empresa y del servicio principal ofrecido.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">Justo Total Pass</h3>
            <p>Nombre de la aplicación específica de Salesforce utilizada por el equipo de CS en México.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">CS (Customer Success)</h3>
            <p>Departamento encargado de gestionar la relación con los clientes, asegurando su satisfacción y retención.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">SDR (Sales Development Representative)</h3>
            <p>Rol encargado de la gestión inicial de leads y su calificación.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">B2B (Business to Business)</h3>
            <p>Modelo de negocio enfocado en transacciones entre empresas, no con consumidores finales.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">Elegibles</h3>
            <p>Colaboradores de una empresa cliente que pueden acceder a los servicios contratados.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">Fee</h3>
            <p>Tarifa o costo asociado a los servicios prestados, puede ser fijo o variable.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">Fee variable</h3>
            <p>Modelo de cobro que varía según el uso o cantidad de usuarios.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">Fee fijo</h3>
            <p>Modelo de cobro con una tarifa establecida independientemente del uso.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">Copago</h3>
            <p>Monto que el usuario final debe pagar directamente por ciertos servicios, complementando lo cubierto por la empresa.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">Onboarding</h3>
            <p>Proceso de activación y configuración inicial de un nuevo cliente.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">Cadastro</h3>
            <p>Registro o alta de información en el sistema administrativo.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">Portal RH</h3>
            <p>Plataforma destinada al departamento de Recursos Humanos del cliente para gestionar los beneficios.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">TPW (TP Web)</h3>
            <p>Referencia a leads o clientes que provienen específicamente de la plataforma web de Total Pass.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">Razón social</h3>
            <p>Nombre legal registrado de una empresa.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-green-700">RFC (Registro Federal de Contribuyentes)</h3>
            <p>Clave que identifica fiscalmente a personas físicas o morales en México.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Abreviaturas comunes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-purple-700">MX</h3>
            <p>Abreviatura para México, utilizada para distinguir configuraciones específicas para este país.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-purple-700">BR</h3>
            <p>Abreviatura para Brasil, utilizada para distinguir configuraciones específicas para este país.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-purple-700">RH</h3>
            <p>Recursos Humanos, departamento dentro de las empresas cliente que suele ser el principal punto de contacto.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-purple-700">FI</h3>
            <p>Fecha de Inicio, generalmente referida al comienzo de la facturación o del contrato.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-purple-700">KPI</h3>
            <p>Key Performance Indicator (Indicador Clave de Desempeño), métrica utilizada para evaluar el éxito en el logro de objetivos.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-purple-700">CRM</h3>
            <p>Customer Relationship Management (Gestión de Relaciones con Clientes), categoría de software a la que pertenece Salesforce.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-purple-700">CDMX</h3>
            <p>Ciudad de México, frecuentemente utilizada en direcciones y ubicaciones.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-purple-700">SADCV</h3>
            <p>Sociedad Anónima de Capital Variable, tipo de constitución legal de empresas en México.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-purple-700">CPF</h3>
            <p>Cadastro de Pessoas Físicas, equivalente brasileño del RFC para personas físicas.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-purple-700">TP</h3>
            <p>Abreviatura común para referirse a Total Pass.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-purple-700">GD</h3>
            <p>Gerente de Departamento, nivel jerárquico con ciertos permisos especiales en Salesforce.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/solucion-problemas" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Solución de Problemas
        </a>
        <a href="/anexos" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Anexos
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Glosario;
