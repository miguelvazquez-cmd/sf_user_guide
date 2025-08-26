const SolucionProblemas = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">13. Solución de Problemas Comunes</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Errores frecuentes y cómo resolverlos</h2>
        
        <p>
          Durante el uso diario de Salesforce, pueden surgir diversos errores o problemas que, si bien son comunes, pueden obstaculizar el flujo de trabajo. Conocer estos errores frecuentes y sus soluciones permite resolverlos rápidamente, minimizando interrupciones en la operación.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
          <h3 className="text-xl font-medium mb-3 text-red-600">Error en el cálculo automático de cotizaciones</h3>
          
          <p className="mb-2">
            Como se mencionó en la reunión, ocasionalmente el sistema puede fallar al calcular automáticamente los valores de una cotización al avanzar a la etapa de negociación.
          </p>
          
          <p className="font-medium text-gray-700 mt-3">Solución:</p>
          <p>
            Crear manualmente una cotización seleccionando "MX Cotización" para México (no Brasil) y completando los campos requeridos. Después de guardar, utilizar la opción "Cambiar valores y recalcular" para obtener los cálculos necesarios.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
          <h3 className="text-xl font-medium mb-3 text-red-600">Visualización de valores en moneda incorrecta</h3>
          
          <p className="mb-2">
            Se ha detectado que en algunas ocasiones el sistema muestra valores calculados en reales (moneda brasileña) en lugar de pesos mexicanos.
          </p>
          
          <p className="font-medium text-gray-700 mt-3">Solución temporal:</p>
          <p>
            Estar consciente de esta limitación y realizar manualmente la conversión si es necesario. Este problema ha sido reportado y está en proceso de corrección.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
          <h3 className="text-xl font-medium mb-3 text-red-600">Problemas al avanzar entre etapas</h3>
          
          <p className="mb-2">
            Debido a la configuración compartida con Brasil, pueden surgir dificultades al intentar avanzar una oportunidad a la siguiente etapa.
          </p>
          
          <p className="font-medium text-gray-700 mt-3">Solución:</p>
          <p>
            Asegurarse de utilizar los botones específicos que aparecen en la interfaz para avanzar, no los botones estándar de Salesforce en la parte superior. Verificar que todos los campos obligatorios estén completos antes de intentar avanzar.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
          <h3 className="text-xl font-medium mb-3 text-red-600">Documentos que no se visualizan correctamente</h3>
          
          <p className="mb-2">
            En ocasiones, los documentos cargados pueden no visualizarse correctamente o aparecer como no disponibles.
          </p>
          
          <p className="font-medium text-gray-700 mt-3">Solución:</p>
          <p>
            Verificar el formato del archivo (preferiblemente PDF para documentos oficiales) y su tamaño (Salesforce tiene límites de tamaño para archivos adjuntos). Si persiste el problema, intentar cargar nuevamente el documento o convertirlo a un formato diferente.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
          <h3 className="text-xl font-medium mb-3 text-red-600">Tareas que no aparecen en la vista de usuario</h3>
          
          <p className="mb-2">
            A veces, las tareas asignadas pueden no aparecer en la vista del usuario correspondiente.
          </p>
          
          <p className="font-medium text-gray-700 mt-3">Solución:</p>
          <p>
            Verificar los filtros aplicados en la vista de tareas, ya que podrían estar ocultando ciertas categorías. También es recomendable actualizar la página o cerrar y volver a abrir la sesión de Salesforce si los cambios recientes no se reflejan.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitaciones del sistema compartido con Brasil</h2>
        
        <p>
          La configuración compartida de Salesforce entre México y Brasil genera ciertas limitaciones que es importante conocer para adaptar los procesos y expectativas:
        </p>
        
        <ul className="list-disc pl-6 space-y-4 my-4">
          <li>
            <strong>Campos obligatorios limitados</strong>: Como se explicó en la reunión, no es posible establecer campos como obligatorios a nivel de sistema porque afectaría a ambos países, y algunos campos relevantes para México podrían no serlo para Brasil o viceversa.
            <p className="text-sm text-gray-600 mt-1">
              <strong>Adaptación:</strong> Se utilizan validaciones en los botones de avance para verificar que se completen los campos necesarios en cada etapa, funcionando como una alternativa a los campos obligatorios tradicionales.
            </p>
          </li>
          
          <li>
            <strong>Proceso de conversión de leads modificado</strong>: El proceso estándar de Salesforce para convertir leads a cuentas y oportunidades no puede utilizarse debido a la configuración compartida.
            <p className="text-sm text-gray-600 mt-1">
              <strong>Adaptación:</strong> Se ha implementado un flujo alternativo utilizando tareas y botones específicos que cumplen la misma función pero respetan las particularidades de cada país.
            </p>
          </li>
          
          <li>
            <strong>Restricciones en automatizaciones globales</strong>: Las automatizaciones que afectan a toda la organización deben considerar las necesidades de ambos países.
            <p className="text-sm text-gray-600 mt-1">
              <strong>Adaptación:</strong> Se desarrollan automatizaciones específicas vinculadas a botones o acciones particulares, en lugar de reglas globales que podrían generar conflictos.
            </p>
          </li>
          
          <li>
            <strong>Diferencias en moneda y cálculos</strong>: Como se mencionó, existen problemas ocasionales con la visualización de monedas y cálculos.
            <p className="text-sm text-gray-600 mt-1">
              <strong>Adaptación:</strong> Estar atento a estas diferencias y realizar verificaciones adicionales cuando se trabaja con valores monetarios, especialmente en cotizaciones y contratos.
            </p>
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Canales de soporte</h2>
        
        <p>
          Cuando te enfrentes a problemas que no puedas resolver por ti mismo, es importante conocer los canales de soporte disponibles:
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="text-xl font-medium mb-3 text-blue-800">Soporte de primer nivel: Gerente o coordinador</h3>
          
          <p className="mb-2">
            Para problemas relacionados con procesos, permisos o dudas sobre el uso del sistema:
          </p>
          
          <p>
            Contacta primero a tu gerente o coordinador, quien podrá orientarte o escalar el problema si es necesario.
          </p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="text-xl font-medium mb-3 text-blue-800">Soporte técnico: Administrador de Salesforce</h3>
          
          <p className="mb-2">
            Para problemas técnicos específicos de la plataforma:
          </p>
          
          <p>
            Comunícate con el administrador de Salesforce de la organización, quien tiene los conocimientos y permisos necesarios para resolver problemas técnicos o configurar soluciones.
          </p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-6">
          <h3 className="text-xl font-medium mb-3 text-blue-800">Canal para mejoras y sugerencias</h3>
          
          <p className="mb-2">
            Como se mencionó en la reunión, existe un canal específico para solicitar mejoras o cambios en la configuración:
          </p>
          
          <p>
            Utiliza el formulario o canal establecido para enviar tus sugerencias, detallando claramente el cambio propuesto y su justificación.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Proceso para solicitar cambios o mejoras</h2>
        
        <p>
          Si identificas oportunidades de mejora en la configuración o procesos de Salesforce, puedes solicitar cambios siguiendo estos pasos:
        </p>
        
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>
            <strong>Documenta claramente la mejora propuesta</strong>: Describe detalladamente qué cambio sugieres, cómo funcionaría y qué beneficio aportaría.
          </li>
          <li>
            <strong>Valida con tu equipo</strong>: Antes de enviar la solicitud, consulta con colegas para verificar si el problema es común y si la solución propuesta sería útil para más personas.
          </li>
          <li>
            <strong>Envía la solicitud formal</strong>: Utiliza el canal establecido para enviar tu propuesta al equipo responsable de la administración de Salesforce.
          </li>
          <li>
            <strong>Seguimiento</strong>: Mantén un registro de tu solicitud y realiza seguimiento periódico para conocer su estado.
          </li>
        </ol>
        
        <p>
          Como se destacó en la reunión, el sistema está en constante evolución y las mejoras propuestas por los usuarios son una fuente valiosa de información para optimizar los procesos. Aunque no todas las solicitudes pueden implementarse inmediatamente, cada sugerencia es evaluada considerando su impacto, factibilidad técnica y alineación con los objetivos organizacionales.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/buenas-practicas" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Buenas Prácticas
        </a>
        <a href="/glosario" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Glosario de Términos
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SolucionProblemas;
