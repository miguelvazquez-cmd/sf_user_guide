const FlujoTrabajo = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">3. Flujo de Trabajo para CS</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Diagrama completo del flujo de trabajo</h2>
        
        <p>
          El flujo de trabajo en Salesforce para el departamento de CS sigue una secuencia lógica que abarca desde la recepción inicial de un lead hasta la activación y onboarding del cliente. Este proceso está diseñado para garantizar que cada etapa sea debidamente documentada y que se recopile toda la información necesaria para brindar un servicio óptimo al cliente.
        </p>
        
        <p>
          El diagrama de flujo completo representa visualmente la secuencia de pasos y decisiones que conforman el proceso. Es importante familiarizarse con este diagrama para comprender la interrelación entre las diferentes etapas y cómo cada acción influye en el avance del cliente a través del sistema. Aunque el flujo puede parecer extenso, cada paso cumple una función específica y contribuye a la integridad del proceso global.
        </p>
        
        <div className="bg-blue-50 p-4 border-l-4 border-blue-400 my-6">
          <p className="font-medium">Nota</p>
          <p>El flujo de trabajo está diseñado considerando las particularidades de la configuración compartida con Brasil, lo que explica ciertas adaptaciones respecto al comportamiento estándar de Salesforce.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Origen de leads y referencias</h2>
        
        <p>
          El proceso comienza con la recepción de leads o referencias a través de diferentes canales. Para el departamento de CS, existen cuatro orígenes principales de leads:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Formularios web</strong>: Clientes potenciales que completan formularios en el sitio web de Total Pass, proporcionando información básica como nombre, empresa, correo electrónico corporativo, teléfono, rol actual, número de colaboradores y disponibilidad para reuniones.
          </li>
          <li>
            <strong>Referencias de RH</strong>: Contactos proporcionados por departamentos de Recursos Humanos de empresas que ya son clientes o que han mostrado interés en los servicios.
          </li>
          <li>
            <strong>TP Web</strong>: Referencias que provienen específicamente de la plataforma web de Total Pass, que suelen tener condiciones comerciales predefinidas.
          </li>
          <li>
            <strong>Referencias directas</strong>: Contactos proporcionados por otros clientes, colaboradores o fuentes diversas.
          </li>
        </ol>
        
        <p>
          Cada origen tiene sus particularidades en términos de la información inicial disponible y el enfoque de seguimiento requerido. Es importante identificar correctamente el origen de cada lead, ya que esto puede influir en la estrategia de acercamiento y en las condiciones comerciales aplicables.
        </p>
        
        <p>
          Una vez que se recibe un lead, este se registra automáticamente en Salesforce, generalmente en un plazo no mayor a un minuto después de su envío. Esta rapidez permite al equipo de CS comenzar el proceso de seguimiento de manera oportuna.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Conversión de leads a cuentas y oportunidades</h2>
        
        <p>
          Cuando un lead es recibido en Salesforce, el siguiente paso es evaluar su calidad y pertinencia. A diferencia del flujo estándar de Salesforce, donde existe un botón de "Convertir" para transformar un lead en cuenta y oportunidad, en Total Pass este proceso se realiza a través de tareas específicas debido a la configuración compartida con Brasil.
        </p>
        
        <p>
          El proceso de conversión comienza con la tarea "Intenta hacer el primer contacto", que aparece automáticamente asignada al perfil correspondiente. Esta tarea tiene una fecha límite establecida, y si se excede, el sistema la marcará como vencida para alertar sobre la necesidad de darle seguimiento urgente.
        </p>
        
        <p>
          Si después del primer contacto se determina que se requiere un seguimiento adicional, es posible utilizar la opción "Followup", que extenderá la fecha límite de la tarea. Este proceso puede repetirse tantas veces como sea necesario hasta establecer un contacto efectivo.
        </p>
        
        <p>
          Una vez establecido el contacto, se avanza a la siguiente etapa utilizando el botón correspondiente, que registrará que ya se está en contacto con el prospecto. En este punto, el sistema solicitará información adicional sobre el prospecto, como el perfil del contacto (director de RH, gerente, analista, etc.) y otros datos relevantes.
        </p>
        
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6">
          <p className="font-medium">Importante</p>
          <p>Al completar los campos obligatorios (marcados en rosa en el diagrama de flujo), el lead se convierte en una cuenta y una oportunidad. A partir de este punto, se trabaja con estos dos objetos interrelacionados.</p>
        </div>
        
        <p>
          Es importante destacar que, aunque se pierda una oportunidad específica, la cuenta permanece en el sistema. Esto permite vincular futuras referencias o contactos a la misma empresa, facilitando el seguimiento histórico y proporcionando información valiosa para futuras negociaciones.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Proceso de cotización</h2>
        
        <p>
          Una vez que se ha creado la oportunidad, se inicia el proceso de cotización. Este proceso comienza con la programación de una reunión con el cliente, que debe registrarse en el sistema utilizando la funcionalidad de eventos en Salesforce. Es posible sincronizar el calendario de Google con Salesforce para facilitar este proceso, aunque esta configuración debe realizarse de manera individual.
        </p>
        
        <p>
          Después de la reunión inicial, se avanza a la etapa de negociación, donde se deben registrar datos cruciales como la cantidad de colaboradores elegibles. Con esta información, el sistema debería calcular automáticamente una propuesta mínima y una propuesta teórica máxima, estableciendo el rango de negociación.
        </p>
        
        <p>
          En caso de que el cálculo automático no funcione correctamente (como se menciona que ha ocurrido en algunas ocasiones), es posible crear una cotización manualmente. Para ello, se debe seleccionar el tipo de cotización adecuado (MX Cotización para México, no Brasil) y completar los campos requeridos.
        </p>
        
        <p>
          La cotización permite especificar:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Número de elegibles</li>
          <li>Precio por elegible</li>
          <li>Descuentos (que pueden requerir aprobaciones según su porcentaje)</li>
          <li>Forma de pago (mensual, semestral o anual)</li>
        </ul>
        
        <p>
          Es importante destacar que los descuentos entre 4% y 6% requieren aprobación de finanzas, y este proceso está configurado en el sistema. Las reglas de aprobación pueden personalizarse según las necesidades del negocio.
        </p>
        
        <p>
          Una vez configurada la cotización, se guarda y se calculan los valores correspondientes. Es posible modificar estos valores y recalcular si es necesario, proporcionando flexibilidad durante la negociación.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Negociación y documentación</h2>
        
        <p>
          Después de preparar la cotización, se programa una reunión para presentarla al cliente. Esta reunión debe registrarse en el sistema y, una vez realizada, se avanza a la siguiente etapa utilizando el botón correspondiente.
        </p>
        
        <p>
          En esta etapa, se envía la propuesta al cliente. Actualmente, este envío se realiza de manera manual, aunque existe la posibilidad de configurar el sistema para que se envíe automáticamente a través de Salesforce.
        </p>
        
        <p>
          El cliente puede aceptar la propuesta o solicitar modificaciones. Si solicita cambios, se regresa a la etapa de recalcular valores y se envía una nueva propuesta. Este ciclo puede repetirse tantas veces como sea necesario hasta llegar a un acuerdo o determinar que no es posible alcanzarlo.
        </p>
        
        <p>
          Una vez que el cliente acepta la propuesta, se avanza a la etapa de solicitud de documentación. En este punto, se envía un correo al cliente solicitando los documentos necesarios para formalizar el contrato, que incluyen:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Constancia de situación fiscal</li>
          <li>Identificación del representante legal</li>
          <li>Comprobante de domicilio</li>
          <li>Poder notarial</li>
          <li>Entre otros documentos específicos según el caso</li>
        </ul>
        
        <p>
          El sistema permite cargar estos documentos directamente en Salesforce. Es importante destacar que, aunque actualmente no existe una validación automática del tipo o contenido de los documentos, es responsabilidad del ejecutivo verificar que los documentos recibidos sean correctos y legibles.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contratos y firmas</h2>
        
        <p>
          Una vez que se han recibido y validado todos los documentos necesarios, se avanza a la etapa de contrato. En esta etapa, se registran las formas de pago y otros detalles específicos como el tipo de fee (variable o fijo), precio por cápita y valor de copago.
        </p>
        
        <p>
          Es importante destacar que, según las discusiones en la reunión, este apartado podría mejorarse para incluir un listado de los 12 planes (6 para titulares y 6 para dependientes) con sus respectivos costos, facilitando así el registro detallado de las condiciones comerciales.
        </p>
        
        <p>
          Una vez completada esta información, se inicia el proceso de contrato formal. Aunque actualmente este proceso no está completamente automatizado en Salesforce, la visión es que en el futuro los datos registrados en el sistema se utilicen para generar automáticamente el contrato en la plataforma correspondiente (como DocuSign), sin necesidad de volver a introducir la información.
        </p>
        
        <p>
          El sistema debe registrar fechas clave como:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Cuándo firmó Total Pass</li>
          <li>Cuándo firmó la empresa cliente</li>
          <li>Cuántas razones sociales tiene el contrato</li>
          <li>Quiénes son los representantes legales</li>
        </ul>
        
        <p>
          Una vez firmado el contrato por ambas partes, la cuenta pasa de estar en etapa de "negociación" a estar en etapa de "onboarding", indicando que ya es un cliente activo que requiere ser configurado en los sistemas operativos.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Activación y onboarding</h2>
        
        <p>
          La etapa final del flujo de trabajo es la activación y onboarding del cliente. En esta fase, se deben completar tres pasos principales:
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
          Es importante destacar que esta parte del proceso aún está en desarrollo y podría beneficiarse de mejoras adicionales para hacerlo más detallado y estructurado.
        </p>
        
        <p>
          Una consideración importante en esta etapa es la fecha de inicio de facturación, que puede depender de diversos factores como la firma del contrato, el lanzamiento del servicio o la activación efectiva. Esta fecha debe registrarse claramente en el sistema, ya que tiene implicaciones financieras significativas.
        </p>
        
        <p>
          El flujo de trabajo concluye cuando el cliente está completamente activado y puede utilizar los servicios contratados. Sin embargo, es importante recordar que la relación con el cliente continúa, y Salesforce seguirá siendo la herramienta principal para gestionar esta relación a lo largo del tiempo.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/conceptos-basicos" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Conceptos Básicos
        </a>
        <a href="/gestion-cuentas" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Gestión de Cuentas
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FlujoTrabajo;
