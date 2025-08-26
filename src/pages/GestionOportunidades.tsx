const GestionOportunidades = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">5. Gestión de Oportunidades</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Creación y seguimiento de oportunidades</h2>
        
        <p>
          Las oportunidades en Salesforce representan las posibilidades de negocio con un cliente potencial o existente. Para el departamento de CS, las oportunidades son un elemento fundamental que permite dar seguimiento estructurado a cada negociación desde su inicio hasta su conclusión.
        </p>
        
        <p>
          Las oportunidades se crean automáticamente cuando un lead se convierte, heredando la información básica del prospecto. A diferencia de las cuentas, que representan a la empresa como entidad, las oportunidades representan una negociación específica con esa empresa en un momento determinado. Es posible que una misma cuenta tenga múltiples oportunidades a lo largo del tiempo, ya sea de forma simultánea o secuencial.
        </p>
        
        <p>
          El seguimiento adecuado de las oportunidades permite tener visibilidad sobre el estado de cada negociación, los próximos pasos requeridos y la probabilidad de cierre. Esto facilita la priorización del trabajo y la asignación eficiente de recursos, además de proporcionar información valiosa para la proyección de ventas y la planificación estratégica.
        </p>
        
        <p>
          Es importante mantener actualizada la información de cada oportunidad, registrando puntualmente cada interacción, avance o cambio en las condiciones negociadas. Esta disciplina en el registro de información no solo beneficia al ejecutivo a cargo, sino que también proporciona transparencia para el resto del equipo y facilita la continuidad en caso de que sea necesario reasignar la oportunidad.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Etapas de la oportunidad</h2>
        
        <p>
          Las oportunidades en Salesforce para el departamento de CS siguen un ciclo de vida definido por etapas que reflejan el avance de la negociación. Estas etapas están diseñadas para proporcionar una visión clara del estado de cada oportunidad y guiar al ejecutivo sobre los pasos a seguir.
        </p>
        
        <p>
          Las principales etapas de una oportunidad son:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Entrada</strong>: Es la etapa inicial cuando la oportunidad acaba de crearse a partir de un lead convertido. En esta fase, se está estableciendo el primer contacto formal con el cliente.
          </li>
          <li>
            <strong>Prospección</strong>: En esta etapa, ya se ha establecido contacto con el cliente y se está recopilando información adicional sobre sus necesidades y características específicas.
          </li>
          <li>
            <strong>Reunión programada</strong>: Indica que se ha agendado una primera reunión formal con el cliente para presentar los servicios y explorar posibilidades de colaboración.
          </li>
          <li>
            <strong>Negociación</strong>: En esta fase, se están discutiendo las condiciones comerciales específicas, elaborando cotizaciones y ajustando la propuesta según los requerimientos del cliente.
          </li>
          <li>
            <strong>Propuesta enviada</strong>: Indica que se ha formalizado una propuesta y se ha enviado al cliente para su consideración.
          </li>
          <li>
            <strong>Contrato</strong>: Esta etapa se alcanza cuando el cliente ha aceptado la propuesta y se está en proceso de formalización del acuerdo mediante un contrato.
          </li>
          <li>
            <strong>Ganada</strong>: Indica que el contrato ha sido firmado y la oportunidad se ha cerrado exitosamente.
          </li>
          <li>
            <strong>Perdida</strong>: Indica que la negociación no prosperó y la oportunidad se ha cerrado sin éxito.
          </li>
        </ol>
        
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6">
          <p className="font-medium">Importante</p>
          <p>Debido a la configuración compartida con Brasil, el avance entre etapas no se realiza mediante los botones estándar de Salesforce en la parte superior, sino a través de botones específicos que aparecen en la interfaz y que ejecutan las automatizaciones configuradas para el flujo de trabajo de Total Pass.</p>
        </div>
        
        <p>
          El sistema está diseñado para que cada etapa requiera cierta información antes de permitir el avance a la siguiente, asegurando así la completitud de los datos necesarios para una gestión eficiente.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Tareas asociadas a oportunidades</h2>
        
        <p>
          Las tareas son un componente crucial en la gestión de oportunidades, ya que guían al ejecutivo sobre las acciones que debe realizar en cada etapa del proceso. En Total Pass, debido a las limitaciones de la configuración compartida con Brasil, las tareas cumplen una función adicional al reemplazar algunos de los controles estándar de Salesforce.
        </p>
        
        <p>
          Cuando una oportunidad se crea o avanza a una nueva etapa, el sistema genera automáticamente tareas específicas que indican el siguiente paso a realizar. Estas tareas tienen fechas límite asignadas, lo que ayuda a mantener el ritmo adecuado en el avance de las negociaciones.
        </p>
        
        <p>
          Las tareas pendientes aparecen en la sección de "Tareas" del ejecutivo, proporcionando una vista consolidada de todas las acciones que requieren su atención. Si una tarea excede su fecha límite sin ser completada, el sistema la marca como "vencida", alertando sobre la necesidad de darle atención urgente.
        </p>
        
        <p>
          Algunos ejemplos de tareas que se generan automáticamente durante el proceso son:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>"Intenta hacer el primer contacto"</li>
          <li>"Obtener datos sobre prospecto y nutrición"</li>
          <li>"Programar reunión de presentación"</li>
          <li>"Enviar propuesta"</li>
          <li>"Solicitar documentación"</li>
        </ul>
        
        <p>
          Estas tareas no solo sirven como recordatorios, sino que también estructuran el flujo de trabajo, asegurando que ningún paso importante sea omitido durante el proceso de negociación.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Avance entre etapas</h2>
        
        <p>
          El avance entre las diferentes etapas de una oportunidad se realiza mediante botones específicos que aparecen en la interfaz de Salesforce. Estos botones ejecutan automatizaciones que actualizan el estado de la oportunidad y generan las tareas correspondientes para la siguiente etapa.
        </p>
        
        <p>
          Es importante destacar que, a diferencia del comportamiento estándar de Salesforce, en Total Pass no se utilizan los botones de la parte superior para cambiar el estado de las oportunidades. Esta adaptación responde a la necesidad de mantener un flujo de trabajo específico que sea compatible con la configuración compartida con Brasil.
        </p>
        
        <p>
          Cuando se hace clic en un botón de avance, el sistema puede solicitar información adicional que es necesaria para la siguiente etapa. Algunos de estos campos pueden ser obligatorios, lo que significa que no se permitirá el avance hasta que se completen correctamente.
        </p>
        
        <p>
          Esta estructura de avance controlado asegura que:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Se recopile toda la información necesaria en cada etapa</li>
          <li>Se siga un proceso estandarizado para todas las oportunidades</li>
          <li>Se mantenga la integridad de los datos a lo largo del ciclo de vida de la oportunidad</li>
        </ol>
        
        <div className="bg-blue-50 p-4 border-l-4 border-blue-400 my-6">
          <p className="font-medium">Consejo</p>
          <p>Es importante seguir siempre el flujo establecido y no intentar "saltarse" etapas, ya que esto podría generar inconsistencias en los datos y problemas en las automatizaciones subsecuentes.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Registro de reuniones y eventos</h2>
        
        <p>
          Las reuniones con los clientes son momentos cruciales en el proceso de negociación, y su adecuado registro en Salesforce permite mantener un histórico completo de las interacciones. Para registrar una reunión o evento en Salesforce, se utiliza la funcionalidad de "Nuevo Evento" disponible en la sección de Actividades.
        </p>
        
        <p>
          Al crear un nuevo evento, es posible especificar:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Asunto de la reunión</li>
          <li>Fecha y hora de inicio y fin</li>
          <li>Participantes (tanto internos como externos)</li>
          <li>Ubicación o enlace de videoconferencia</li>
          <li>Descripción o agenda</li>
        </ul>
        
        <p>
          Salesforce permite sincronizar el calendario de Google con el sistema, lo que facilita la gestión de reuniones al mantener ambas plataformas actualizadas. Esta sincronización debe configurarse de manera individual para cada usuario, y aunque el proceso no es completamente intuitivo, representa una mejora significativa en la eficiencia del trabajo diario.
        </p>
        
        <p>
          Una vez realizada la reunión, es recomendable actualizar el evento con notas sobre los temas tratados, acuerdos alcanzados y próximos pasos. Esta información será valiosa para el seguimiento posterior y proporcionará contexto importante para cualquier miembro del equipo que necesite consultar el histórico de la oportunidad.
        </p>
        
        <p>
          El registro consistente y detallado de reuniones y eventos no solo mejora la gestión individual de cada oportunidad, sino que también contribuye a la construcción de una base de conocimiento organizacional que puede ser aprovechada para optimizar estrategias y enfoques en futuras negociaciones.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/gestion-cuentas" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Gestión de Cuentas
        </a>
        <a href="/proceso-cotizacion" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Proceso de Cotización
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default GestionOportunidades;
