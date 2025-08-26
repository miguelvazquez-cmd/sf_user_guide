const GestionCuentas = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">4. Gestión de Cuentas</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Estructura de cuentas en Salesforce</h2>
        
        <p>
          Las cuentas representan el núcleo central del trabajo del departamento de CS en Salesforce. Una cuenta es la representación de una empresa cliente o prospecto dentro del sistema, y contiene toda la información relevante sobre dicha organización. La correcta gestión de las cuentas es fundamental para mantener la integridad de los datos y facilitar el seguimiento de la relación comercial.
        </p>
        
        <p>
          En Salesforce, las cuentas se crean automáticamente cuando un lead se convierte, heredando la información básica proporcionada durante la fase inicial de contacto. Sin embargo, a medida que la relación avanza, la cuenta se enriquece con datos adicionales que permiten tener una visión más completa del cliente.
        </p>
        
        <p>
          Es importante comprender que la cuenta permanece en el sistema incluso si una oportunidad específica se pierde. Esto permite mantener el histórico de interacciones con la empresa y facilita la gestión de futuras oportunidades que puedan surgir con el mismo cliente.
        </p>
        
        <p>
          Cada cuenta en Salesforce tiene un estado que indica en qué etapa del ciclo de vida se encuentra. Para el departamento de CS, las cuentas pueden estar en estados como "negociación", "onboarding" o "activa", entre otros. Estos estados cambian automáticamente a medida que se avanza en el flujo de trabajo, reflejando la situación actual de la relación con el cliente.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Visualización y filtrado de cuentas</h2>
        
        <p>
          Para acceder a las cuentas en Salesforce, debes utilizar el menú desplegable que aparece al hacer clic en el objeto "Cuentas" y la flecha hacia abajo. Este menú muestra todos los objetos a los que tienes acceso según tu perfil.
        </p>
        
        <p>
          Una vez en la vista de cuentas, Salesforce ofrece potentes herramientas de filtrado que permiten visualizar las cuentas según diferentes criterios. Puedes crear filtros personalizados para ver, por ejemplo:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Todas las cuentas asignadas a ti</li>
          <li>Cuentas en una etapa específica (negociación, onboarding, activas)</li>
          <li>Cuentas creadas en un período determinado</li>
          <li>Cuentas con características específicas</li>
        </ul>
        
        <p>
          Estos filtros pueden guardarse para su uso futuro, lo que agiliza el acceso a la información relevante según las necesidades del momento. La creación de filtros eficientes es una habilidad valiosa que permite optimizar el tiempo de trabajo en la plataforma.
        </p>
        
        <div className="bg-blue-50 p-4 border-l-4 border-blue-400 my-6">
          <p className="font-medium">Consejo</p>
          <p>Es recomendable revisar regularmente todas las cuentas asignadas para asegurar que ninguna quede sin la atención necesaria. Las vistas personalizadas pueden configurarse para mostrar información clave como la fecha de última actividad o tareas pendientes, facilitando la priorización del trabajo.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Grupos empresariales y múltiples razones sociales</h2>
        
        <p>
          En el entorno empresarial, es común encontrar situaciones donde varias razones sociales pertenecen a un mismo grupo empresarial. Salesforce permite gestionar esta complejidad, aunque requiere un enfoque específico.
        </p>
        
        <p>
          Cada razón social debe registrarse como una cuenta independiente con su propio RFC, ya que este identificador fiscal es único y no puede duplicarse. Sin embargo, estas cuentas pueden agruparse conceptualmente para facilitar su gestión conjunta.
        </p>
        
        <p>
          Aunque actualmente no está implementado, se está desarrollando un objeto llamado "grupo" que permitirá agrupar formalmente diferentes marcas o razones sociales bajo una misma estructura corporativa. Esto facilitará la visualización de la relación entre diferentes entidades legales que forman parte de un mismo conglomerado empresarial.
        </p>
        
        <p>
          Esta estructura es particularmente relevante cuando se trabaja con grandes corporaciones que operan a través de múltiples entidades legales pero requieren una gestión comercial unificada. Por ejemplo, si se trabaja con un grupo como "Grupo Salinas", que incluye empresas como Banco Azteca, Elektra y Fundación Azteca, cada una tendría su propia cuenta en Salesforce, pero estarían vinculadas a nivel de grupo.
        </p>
        
        <p>
          Es importante destacar que, aunque las cuentas estén relacionadas a nivel de grupo, cada una mantiene su independencia en términos de contratos, facturación y condiciones comerciales específicas.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Cambios en información de cuentas (RFC, nombre, etc.)</h2>
        
        <p>
          La gestión de cambios en la información fundamental de las cuentas, como el RFC o el nombre de la empresa, representa un desafío particular en Salesforce. Estos cambios pueden ocurrir por diversos motivos, como reestructuraciones corporativas, fusiones, adquisiciones o simplemente actualizaciones legales.
        </p>
        
        <p>
          El enfoque recomendado para manejar estos cambios depende de la naturaleza del cambio:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Cambios menores o correcciones</strong>: Para correcciones ortográficas o actualizaciones menores que no implican un cambio en la identidad legal de la empresa, se puede modificar directamente la información en la cuenta existente. Sin embargo, estos cambios solo pueden ser realizados por personas con los permisos adecuados, como el equipo legal o los gerentes.
          </li>
          <li>
            <strong>Cambios sustanciales o nueva identidad legal</strong>: Cuando una empresa cambia completamente su identidad legal (nuevo RFC), lo ideal es marcar la cuenta antigua como "no existente" o inactiva, y crear una nueva cuenta con la información actualizada. Esto permite mantener la trazabilidad histórica y evita la pérdida de información relevante.
          </li>
        </ol>
        
        <p>
          Este segundo enfoque, aunque más laborioso, ofrece ventajas significativas en términos de integridad de datos y trazabilidad. Permite responder preguntas como "¿cuántas veces ha cambiado esta empresa de nombre o estructura legal?" y mantener un registro claro de la evolución del cliente a lo largo del tiempo.
        </p>
        
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6">
          <p className="font-medium">Importante</p>
          <p>Este proceso de gestión de cambios sustanciales aún está en desarrollo y requiere una coordinación cuidadosa con otros sistemas, como el administrativo, para asegurar la consistencia de la información en toda la organización.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Seguimiento histórico de cuentas</h2>
        
        <p>
          Una de las grandes ventajas de Salesforce es su capacidad para mantener un registro histórico detallado de cada cuenta. Este histórico incluye todas las interacciones, oportunidades, cotizaciones, contratos y actividades relacionadas con el cliente a lo largo del tiempo.
        </p>
        
        <p>
          El seguimiento histórico permite:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Conocer cuántas oportunidades se han trabajado con un mismo cliente</li>
          <li>Identificar patrones en las negociaciones previas</li>
          <li>Comprender la evolución de las condiciones comerciales</li>
          <li>Analizar la rentabilidad del cliente a lo largo del tiempo</li>
          <li>Anticipar necesidades basadas en comportamientos anteriores</li>
        </ul>
        
        <p>
          Para acceder a este histórico, puedes navegar por las diferentes secciones relacionadas dentro de la vista de la cuenta. Las oportunidades, cotizaciones, contratos y actividades pasadas se muestran en secciones específicas, permitiendo una visión cronológica de la relación con el cliente.
        </p>
        
        <p>
          Además, Salesforce registra automáticamente quién realizó cada cambio y cuándo, lo que añade una capa adicional de trazabilidad y responsabilidad en la gestión de la información.
        </p>
        
        <p>
          El aprovechamiento efectivo de este histórico puede marcar la diferencia en las negociaciones y en la calidad del servicio ofrecido, ya que proporciona contexto y profundidad al conocimiento sobre el cliente, permitiendo interacciones más personalizadas y estratégicas.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/flujo-trabajo" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Flujo de Trabajo
        </a>
        <a href="/gestion-oportunidades" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Gestión de Oportunidades
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default GestionCuentas;
