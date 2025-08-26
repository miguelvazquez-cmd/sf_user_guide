const ProcesoCotizacion = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">6. Proceso de Cotización</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Creación de cotizaciones</h2>
        
        <p>
          El proceso de cotización es una etapa fundamental en el ciclo de ventas para el departamento de CS, ya que representa la formalización de la propuesta comercial que se presentará al cliente. En Salesforce, las cotizaciones están vinculadas a las oportunidades y contienen información detallada sobre los servicios ofrecidos, precios, condiciones y otros aspectos relevantes de la oferta.
        </p>
        
        <p>
          Para crear una cotización en Salesforce, es necesario que la oportunidad haya avanzado a la etapa de negociación. En condiciones ideales, el sistema debería generar automáticamente una cotización al avanzar a esta etapa. Sin embargo, como se mencionó en la reunión, pueden existir situaciones en las que este proceso automático no funcione correctamente, en cuyo caso será necesario crear la cotización manualmente.
        </p>
        
        <p>
          Para crear una cotización manual, debes acceder a la sección de cotizaciones relacionada con la oportunidad y seleccionar "Nueva Cotización". Es importante asegurarse de seleccionar el tipo correcto de cotización: "MX Cotización" para México, no confundir con las opciones para Brasil u otros mercados.
        </p>
        
        <p>
          Cada cotización debe tener un nombre descriptivo que facilite su identificación, generalmente incluyendo el nombre del cliente y alguna referencia temporal o de versión, por ejemplo: "Cotización para Empresa XYZ - Primera propuesta".
        </p>
        
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6">
          <p className="font-medium">Importante</p>
          <p>Siempre verifica que estás seleccionando "MX Cotización" para México, y no otras opciones como las destinadas a Brasil.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Cálculo de valores (mínimos y máximos)</h2>
        
        <p>
          Una vez creada la cotización, es necesario especificar la cantidad de colaboradores elegibles, que es un dato fundamental para el cálculo de los valores. Con base en esta información, el sistema debería calcular automáticamente dos referencias:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Propuesta mínima</strong>: Representa el valor mínimo aceptable para la negociación, por debajo del cual no sería rentable para la empresa.
          </li>
          <li>
            <strong>Propuesta teórica máxima</strong>: Representa el valor ideal o máximo que podría alcanzarse en condiciones óptimas de negociación.
          </li>
        </ol>
        
        <p>
          Estos cálculos proporcionan un rango dentro del cual debe mantenerse la negociación, ayudando al ejecutivo a tomar decisiones informadas durante el proceso.
        </p>
        
        <p>
          Es importante destacar que estos cálculos se basan en parámetros predefinidos y pueden variar según las políticas comerciales vigentes. El sistema está diseñado para aplicar automáticamente estas políticas, asegurando consistencia en las propuestas presentadas a los clientes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Modificación de cotizaciones</h2>
        
        <p>
          Las cotizaciones no son documentos estáticos, sino que pueden y suelen modificarse durante el proceso de negociación para ajustarse a las necesidades y expectativas del cliente. Salesforce permite realizar estas modificaciones de manera controlada, manteniendo un registro de los cambios realizados.
        </p>
        
        <p>
          Para modificar una cotización existente, debes acceder a ella y utilizar la opción "Cambiar valores y recalcular". Esta funcionalidad permite ajustar diversos parámetros como:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Número de elegibles</li>
          <li>Precio por elegible</li>
          <li>Forma de pago (mensual, semestral o anual)</li>
          <li>Descuentos aplicables</li>
        </ul>
        
        <p>
          Cada vez que se realizan cambios, es importante guardar la cotización y permitir que el sistema recalcule los valores totales. Estos recálculos aseguran que todas las cifras sean consistentes y reflejen correctamente los términos actualizados de la propuesta.
        </p>
        
        <p>
          Durante la reunión se mencionó que actualmente existe una limitación en el sistema que muestra algunos valores calculados en reales (moneda brasileña) en lugar de pesos mexicanos. Este es un aspecto que está en proceso de corrección, pero mientras tanto es importante estar atento a esta particularidad para evitar confusiones en la comunicación con el cliente.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Descuentos y aprobaciones</h2>
        
        <p>
          La aplicación de descuentos es una herramienta importante en el proceso de negociación, pero debe realizarse de manera controlada para proteger la rentabilidad del negocio. Salesforce incluye un sistema de aprobaciones que se activa automáticamente cuando se aplican ciertos niveles de descuento.
        </p>
        
        <p>
          Según lo discutido en la reunión, actualmente existe una regla configurada que requiere aprobación de finanzas cuando el descuento se encuentra entre el 4% y el 6%. Esta regla puede parecer específica, pero refleja las políticas actuales de la empresa.
        </p>
        
        <p>
          Cuando se aplica un descuento que requiere aprobación, el sistema inicia automáticamente un proceso de solicitud que debe ser revisado y aprobado por el personal autorizado antes de poder avanzar con la cotización. Durante este proceso, la cotización queda en un estado de espera hasta recibir la aprobación correspondiente.
        </p>
        
        <p>
          Es importante destacar que estas reglas de aprobación son configurables y pueden ajustarse según las necesidades del negocio. Si se identifican oportunidades de mejora en este proceso, es posible solicitar modificaciones para optimizar el flujo de trabajo.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Envío de propuestas</h2>
        
        <p>
          Una vez que la cotización ha sido finalizada y, si aplica, aprobada por las instancias correspondientes, el siguiente paso es enviarla al cliente para su consideración. Actualmente, este proceso se realiza de manera manual, aunque existe la posibilidad de configurar el sistema para que el envío se realice automáticamente a través de Salesforce.
        </p>
        
        <p>
          Para registrar el envío de la propuesta en Salesforce, debes utilizar el botón "Ya envié la propuesta" que aparece en la interfaz. Este registro es importante para mantener actualizado el estado de la oportunidad y generar las tareas correspondientes para el seguimiento posterior.
        </p>
        
        <p>
          Es recomendable mantener una copia de la propuesta enviada adjunta al registro en Salesforce. Esto facilita la consulta posterior y asegura que exista un respaldo de exactamente qué fue lo que se presentó al cliente.
        </p>
        
        <p>
          Después del envío, comienza una fase crítica de seguimiento en la que es necesario estar atento a la respuesta del cliente. Esta respuesta puede ser de aceptación, solicitud de modificaciones o rechazo. Cada escenario activa un flujo diferente:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Aceptación</strong>: Se avanza a la etapa de solicitud de documentación para iniciar la formalización del contrato.
          </li>
          <li>
            <strong>Solicitud de modificaciones</strong>: Se regresa a la etapa de modificación de cotización para ajustar los términos según los requerimientos del cliente.
          </li>
          <li>
            <strong>Rechazo</strong>: Si después de varias iteraciones no se llega a un acuerdo, la oportunidad puede marcarse como perdida, registrando los motivos para futura referencia.
          </li>
        </ol>
        
        <p>
          El proceso de cotización puede requerir varias iteraciones antes de llegar a un acuerdo final. Es importante mantener un registro detallado de cada versión presentada, las respuestas recibidas y los ajustes realizados, ya que esta información será valiosa para futuras negociaciones tanto con el mismo cliente como con otros de características similares.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/gestion-oportunidades" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Gestión de Oportunidades
        </a>
        <a href="/gestion-documental" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Gestión Documental
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProcesoCotizacion;
