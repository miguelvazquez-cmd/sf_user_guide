const GestionDocumental = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">7. Gestión Documental</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Solicitud y recepción de documentos</h2>
        
        <p>
          La gestión documental es una parte crucial del proceso de ventas y onboarding en Total Pass. Una vez que el cliente ha aceptado la propuesta comercial, es necesario solicitar y recibir diversos documentos legales que permitirán formalizar la relación comercial mediante un contrato.
        </p>
        
        <p>
          El proceso comienza cuando la oportunidad avanza a la etapa de solicitud de documentación. En este punto, el sistema genera automáticamente una tarea para el ejecutivo, recordándole que debe solicitar los documentos necesarios al cliente. Esta solicitud generalmente se realiza mediante un correo electrónico, aunque actualmente no existe una plantilla automatizada en Salesforce para este propósito.
        </p>
        
        <p>
          Los documentos que típicamente se solicitan incluyen:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Constancia de situación fiscal (documento oficial que acredita el registro fiscal de la empresa)</li>
          <li>Identificación oficial del representante legal</li>
          <li>Comprobante de domicilio reciente (no mayor a 3 meses)</li>
          <li>Poder notarial que acredite las facultades del representante legal</li>
          <li>Acta constitutiva (en caso de personas morales)</li>
        </ul>
        
        <p>
          Es importante comunicar claramente al cliente qué documentos son necesarios y en qué formato deben ser proporcionados. Generalmente, se prefiere el formato PDF para documentos oficiales, ya que mantiene la integridad visual y facilita su posterior manejo e impresión si fuera necesario.
        </p>
        
        <div className="bg-blue-50 p-4 border-l-4 border-blue-400 my-6">
          <p className="font-medium">Consejo</p>
          <p>Es recomendable proporcionar al cliente una lista de verificación que detalle exactamente qué documentos se requieren y las características que deben cumplir (vigencia, formato, etc.). Esto agiliza el proceso y reduce la necesidad de solicitar correcciones o documentos adicionales posteriormente.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Carga de documentos en Salesforce</h2>
        
        <p>
          Una vez que el cliente envía los documentos solicitados, estos deben ser cargados en Salesforce para mantener un registro centralizado y accesible para todos los equipos involucrados. El proceso de carga es relativamente sencillo, pero requiere atención para asegurar que cada documento se vincule correctamente a la cuenta y oportunidad correspondiente.
        </p>
        
        <p>
          Para cargar documentos en Salesforce, debes acceder a la sección de "Archivos" relacionada con la oportunidad o cuenta, y utilizar la opción "Cargar archivos". El sistema permite seleccionar uno o varios archivos desde tu computadora para subirlos simultáneamente.
        </p>
        
        <p>
          Es importante seguir algunas prácticas recomendadas al cargar documentos:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Nombrar los archivos de manera descriptiva</strong>: Utiliza nombres que identifiquen claramente el contenido del documento, por ejemplo: "CSF_EmpresaXYZ.pdf" para una constancia de situación fiscal, o "ID_RepresentanteLegal_NombreApellido.pdf" para una identificación.
          </li>
          <li>
            <strong>Verificar que los documentos sean legibles</strong>: Antes de cargar un documento, asegúrate de que sea completamente legible y que contenga toda la información necesaria. Documentos borrosos o incompletos pueden causar retrasos en el proceso.
          </li>
          <li>
            <strong>Comprobar que se han cargado correctamente</strong>: Después de subir los documentos, verifica que aparezcan en la sección correspondiente y que se puedan visualizar sin problemas.
          </li>
        </ol>
        
        <p>
          Actualmente, como se mencionó en la reunión, no existe una validación automática del tipo o contenido de los documentos. Es responsabilidad del ejecutivo verificar que los documentos recibidos sean correctos y cumplan con los requisitos establecidos.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Organización y clasificación de documentos</h2>
        
        <p>
          La correcta organización y clasificación de los documentos en Salesforce facilita su posterior consulta y utilización. Aunque el sistema actual no proporciona herramientas específicas para la clasificación automática, existen prácticas que pueden implementarse para mantener un orden adecuado.
        </p>
        
        <p>
          Una estrategia efectiva es utilizar prefijos en los nombres de los archivos para indicar su tipo. Por ejemplo:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>CSF_ para Constancia de Situación Fiscal</li>
          <li>ID_ para identificaciones oficiales</li>
          <li>CD_ para comprobantes de domicilio</li>
          <li>PN_ para poderes notariales</li>
          <li>AC_ para actas constitutivas</li>
        </ul>
        
        <p>
          Esta nomenclatura facilita la identificación visual rápida del tipo de documento, especialmente cuando se acumulan varios archivos en una misma cuenta u oportunidad.
        </p>
        
        <p>
          Otra práctica recomendable es agregar comentarios o descripciones a los documentos cuando el sistema lo permita. Estos comentarios pueden incluir información adicional como la fecha de vigencia, observaciones sobre el contenido o cualquier particularidad que sea relevante para su posterior consulta.
        </p>
        
        <p>
          Durante la reunión se mencionó que actualmente no existe una estructura formal para la organización de documentos, pero se está considerando la posibilidad de implementar mejoras en este aspecto. Estas mejoras podrían incluir carpetas específicas para cada tipo de documento o etiquetas que faciliten su clasificación y búsqueda.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Validación y seguimiento de documentación</h2>
        
        <p>
          Una vez que todos los documentos han sido recibidos y cargados en Salesforce, es necesario validar que cumplen con los requisitos establecidos y que no falta ningún elemento esencial. Esta validación es crucial, ya que documentos incorrectos o incompletos pueden causar retrasos significativos en la formalización del contrato.
        </p>
        
        <p>
          El proceso de validación incluye verificar que:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Los documentos corresponden a la empresa y representantes legales correctos</li>
          <li>Los documentos están vigentes y no han caducado</li>
          <li>La información en los documentos coincide con los datos registrados en Salesforce</li>
          <li>Los poderes notariales otorgan las facultades necesarias para la firma del contrato</li>
          <li>No hay inconsistencias o discrepancias entre los diferentes documentos</li>
        </ul>
        
        <p>
          Si durante la validación se detecta que falta algún documento o que alguno no cumple con los requisitos, es necesario contactar nuevamente al cliente para solicitar las correcciones o documentos adicionales. Este seguimiento debe registrarse en Salesforce mediante tareas o notas para mantener un histórico completo de las interacciones.
        </p>
        
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6">
          <p className="font-medium">Importante</p>
          <p>La validación de documentos legales puede requerir conocimientos específicos. Si tienes dudas sobre la validez o suficiencia de algún documento, consulta con el equipo legal antes de proceder con el siguiente paso del proceso.</p>
        </div>
        
        <p>
          Una vez que todos los documentos han sido validados satisfactoriamente, se puede avanzar a la siguiente etapa del proceso, que generalmente es la elaboración del contrato. Es importante marcar claramente en el sistema que la documentación está completa y validada, para evitar confusiones o retrasos innecesarios.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Acceso y consulta de documentos históricos</h2>
        
        <p>
          Los documentos almacenados en Salesforce no solo son útiles durante el proceso de contratación, sino que también constituyen un valioso repositorio histórico que puede ser consultado en cualquier momento durante la relación con el cliente.
        </p>
        
        <p>
          Para acceder a documentos históricos, puedes navegar a la cuenta u oportunidad correspondiente y revisar la sección de "Archivos" o "Documentos". Salesforce mantiene un registro de cuándo fue cargado cada documento y quién lo hizo, lo que proporciona una capa adicional de trazabilidad.
        </p>
        
        <p>
          Este acceso a documentos históricos es particularmente útil en situaciones como:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Renovaciones de contrato, donde se puede verificar si los documentos anteriores siguen vigentes o necesitan actualizarse</li>
          <li>Auditorías internas o externas que requieren evidencia de la debida diligencia en los procesos de contratación</li>
          <li>Resolución de disputas o aclaraciones sobre términos acordados previamente</li>
          <li>Análisis de la evolución de la relación con el cliente a lo largo del tiempo</li>
        </ul>
        
        <p>
          Es importante destacar que, aunque Salesforce proporciona un robusto sistema de almacenamiento de documentos, también es recomendable mantener copias de seguridad de los documentos más críticos en otros repositorios autorizados por la empresa, siguiendo siempre las políticas de seguridad de la información establecidas.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/proceso-cotizacion" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Proceso de Cotización
        </a>
        <a href="/contratos-aspectos-legales" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Contratos y Aspectos Legales
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default GestionDocumental;
