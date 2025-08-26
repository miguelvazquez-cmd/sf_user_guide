const ActivacionOnboarding = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">9. Activación y Onboarding</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Proceso de activación</h2>
        
        <p>
          Una vez que el contrato ha sido firmado por ambas partes, la cuenta pasa de estar en etapa de "negociación" a estar en etapa de "onboarding", indicando que ya es un cliente activo que requiere ser configurado en los sistemas operativos. Esta etapa es crucial para asegurar que el cliente pueda comenzar a utilizar los servicios contratados de manera efectiva y sin contratiempos.
        </p>
        
        <p>
          El proceso de activación es la fase final del ciclo de ventas y la primera del ciclo de servicio, representando un punto crítico de transición en la relación con el cliente. Una activación exitosa sienta las bases para una relación duradera y satisfactoria, mientras que problemas en esta etapa pueden generar una impresión negativa difícil de revertir.
        </p>
        
        <p>
          Como se mencionó en la reunión, la etapa de activación y onboarding en Salesforce para el departamento de CS incluye tres pasos principales:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Cadastro en admin</strong>: Creación de los registros necesarios en el sistema administrativo.
          </li>
          <li>
            <strong>Portal RH</strong>: Configuración del portal para el departamento de Recursos Humanos del cliente.
          </li>
          <li>
            <strong>Activación</strong>: Habilitación de los servicios contratados para que los empleados del cliente puedan comenzar a utilizarlos.
          </li>
        </ol>
        
        <p>
          Es importante destacar que esta parte del proceso aún está en desarrollo y podría beneficiarse de mejoras adicionales para hacerlo más detallado y estructurado. Durante la reunión se mencionó que se está trabajando en refinar este flujo para proporcionar mayor claridad y control sobre cada paso.
        </p>
        
        <div className="bg-blue-50 p-4 border-l-4 border-blue-400 my-6">
          <p className="font-medium">Consejo</p>
          <p>Mantén una comunicación constante con el cliente durante todo el proceso de activación, informándole sobre el avance y los próximos pasos. Esta transparencia ayuda a gestionar expectativas y demuestra profesionalismo en la gestión del proyecto.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Configuración en sistemas administrativos</h2>
        
        <p>
          El primer paso en el proceso de activación es la configuración del cliente en los sistemas administrativos internos. Este paso, denominado "Cadastro en admin" en el flujo de Salesforce, implica la creación de los registros necesarios para que el cliente pueda ser gestionado correctamente desde el punto de vista operativo y financiero.
        </p>
        
        <p>
          Aunque este proceso se realiza principalmente en sistemas externos a Salesforce, es fundamental registrar su avance y completitud en la plataforma para mantener una visión integral del estado del cliente. Para ello, Salesforce incluye campos específicos y tareas que permiten dar seguimiento a esta actividad.
        </p>
        
        <p>
          La configuración en sistemas administrativos generalmente incluye:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Creación del perfil del cliente con sus datos fiscales y de contacto</li>
          <li>Configuración de las condiciones comerciales acordadas</li>
          <li>Establecimiento de los parámetros de facturación</li>
          <li>Asignación de identificadores internos necesarios para la operación</li>
          <li>Vinculación con otros sistemas relevantes (CRM, ERP, etc.)</li>
        </ul>
        
        <p>
          Es importante que esta configuración sea precisa y completa, ya que errores en esta etapa pueden generar problemas posteriores en la facturación, el servicio o el soporte al cliente. La información registrada en Salesforce durante las etapas previas (negociación, cotización, contrato) debe ser la base para esta configuración, asegurando consistencia en los datos.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Configuración del Portal RH</h2>
        
        <p>
          El segundo paso en el proceso de activación es la configuración del Portal RH, que es la plataforma a través de la cual el departamento de Recursos Humanos del cliente gestionará los beneficios contratados para sus colaboradores. Este portal es una herramienta clave para el cliente, ya que le permite administrar de manera autónoma aspectos como altas, bajas y modificaciones de usuarios.
        </p>
        
        <p>
          La configuración del Portal RH implica:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Creación de las credenciales de acceso para los administradores del cliente</li>
          <li>Configuración de los permisos y niveles de acceso según lo acordado</li>
          <li>Personalización de la interfaz con elementos de la marca del cliente si aplica</li>
          <li>Carga inicial de datos si el cliente proporciona información de usuarios previamente</li>
          <li>Configuración de reportes y dashboards específicos según las necesidades del cliente</li>
        </ol>
        
        <p>
          Una vez completada la configuración técnica, es fundamental proporcionar capacitación adecuada a los usuarios del cliente que utilizarán el portal. Esta capacitación puede realizarse de manera presencial o virtual, y debe documentarse en Salesforce como parte del proceso de onboarding.
        </p>
        
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6">
          <p className="font-medium">Importante</p>
          <p>La experiencia del cliente con el Portal RH influirá significativamente en su percepción del servicio en general. Asegúrate de que la configuración sea intuitiva y que los usuarios reciban el soporte necesario durante sus primeras interacciones con la plataforma.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Activación de servicios</h2>
        
        <p>
          El tercer y último paso en el proceso de onboarding es la activación propiamente dicha de los servicios contratados. Este paso representa la culminación del proceso de venta y configuración, y marca el inicio de la fase operativa de la relación con el cliente.
        </p>
        
        <p>
          La activación de servicios implica:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Habilitación de los planes contratados en los sistemas operativos</li>
          <li>Configuración de los parámetros específicos de servicio según lo acordado</li>
          <li>Verificación de que todos los componentes del servicio estén funcionando correctamente</li>
          <li>Notificación formal al cliente de que el servicio está activo y listo para ser utilizado</li>
          <li>Entrega de materiales informativos o de bienvenida si aplica</li>
        </ul>
        
        <p>
          Es importante coordinar esta activación con el cliente para asegurar que estén preparados para comenzar a utilizar el servicio. Esto puede implicar acordar una fecha específica de lanzamiento o implementar un plan de comunicación interna para informar a los colaboradores sobre el nuevo beneficio.
        </p>
        
        <p>
          Una vez completada la activación, es recomendable realizar un seguimiento cercano durante las primeras semanas para identificar y resolver rápidamente cualquier problema que pueda surgir, asegurando así una experiencia positiva desde el inicio.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Fechas clave y facturación</h2>
        
        <p>
          Un aspecto crucial en el proceso de activación y onboarding es el establecimiento y registro de fechas clave, especialmente la fecha de inicio de facturación. Como se mencionó en la reunión, esta fecha puede depender de diversos factores como la firma del contrato, el lanzamiento del servicio o la activación efectiva.
        </p>
        
        <p>
          Es fundamental que esta fecha se registre claramente en Salesforce, ya que tiene implicaciones financieras significativas tanto para Total Pass como para el cliente. Algunos aspectos importantes a considerar respecto a las fechas son:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Fecha de inicio de contrato</strong>: Marca el comienzo oficial de la relación contractual, generalmente coincide con la fecha de firma del contrato por ambas partes.
          </li>
          <li>
            <strong>Fecha de activación</strong>: Indica cuándo los servicios están técnicamente disponibles para su uso.
          </li>
          <li>
            <strong>Fecha de lanzamiento</strong>: Representa cuándo el cliente comienza a utilizar activamente el servicio, puede ser posterior a la activación técnica.
          </li>
          <li>
            <strong>Fecha de inicio de facturación</strong>: Establece cuándo comienza a generarse el cobro por los servicios. Puede coincidir con alguna de las fechas anteriores o establecerse de manera independiente según lo acordado.
          </li>
        </ul>
        
        <p>
          Estas fechas deben registrarse en los campos correspondientes en Salesforce y comunicarse claramente al cliente para evitar malentendidos. Además, deben compartirse internamente con los equipos relevantes, especialmente con el departamento financiero responsable de la facturación.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Seguimiento post-activación</h2>
        
        <p>
          El proceso de onboarding no termina con la activación técnica de los servicios. Es fundamental realizar un seguimiento adecuado durante las primeras semanas o meses para asegurar que el cliente esté aprovechando efectivamente los servicios contratados y para identificar y resolver cualquier problema que pueda surgir.
        </p>
        
        <p>
          Este seguimiento post-activación puede incluir:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Reuniones de seguimiento</strong>: Programadas a intervalos regulares (por ejemplo, a los 7, 30 y 90 días después de la activación) para evaluar el avance y resolver dudas.
          </li>
          <li>
            <strong>Monitoreo de uso</strong>: Análisis de métricas de utilización para identificar si el cliente está aprovechando efectivamente el servicio o si requiere apoyo adicional.
          </li>
          <li>
            <strong>Encuestas de satisfacción</strong>: Para obtener retroalimentación directa sobre la experiencia de onboarding y los primeros contactos con el servicio.
          </li>
          <li>
            <strong>Capacitación adicional</strong>: Si se identifican necesidades específicas durante el seguimiento.
          </li>
        </ol>
        
        <p>
          Todas estas actividades deben registrarse en Salesforce mediante tareas, eventos o notas, según corresponda. Esto no solo facilita el seguimiento individual de cada cliente, sino que también permite identificar patrones o áreas de mejora en el proceso general de onboarding.
        </p>
        
        <p>
          El seguimiento post-activación representa una oportunidad valiosa para fortalecer la relación con el cliente y sentar las bases para una colaboración duradera y mutuamente beneficiosa. Un cliente que experimenta un proceso de onboarding fluido y bien gestionado tiene más probabilidades de renovar su contrato y de convertirse en un promotor de los servicios de Total Pass.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/contratos-aspectos-legales" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Contratos y Aspectos Legales
        </a>
        <a href="/reportes-dashboards" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Reportes y Dashboards
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ActivacionOnboarding;
