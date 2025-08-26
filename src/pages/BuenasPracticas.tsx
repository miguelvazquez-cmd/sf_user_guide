const BuenasPracticas = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">12. Buenas Prácticas y Recomendaciones</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Registro completo de información</h2>
        
        <p>
          El registro completo y preciso de la información en Salesforce es fundamental para el éxito de los procesos del departamento de CS. La calidad de los datos ingresados impacta directamente en la eficiencia operativa, la toma de decisiones y la experiencia del cliente.
        </p>
        
        <p>
          Para asegurar un registro adecuado de información, se recomienda:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Completar todos los campos relevantes</strong>: Aunque algunos campos no sean obligatorios para avanzar en el proceso, es una buena práctica completarlos todos para asegurar la integridad de la información. Esto facilita los procesos posteriores y proporciona una visión más completa del cliente.
          </li>
          <li>
            <strong>Verificar la precisión de los datos</strong>: Antes de guardar cualquier registro, verifica que la información ingresada sea correcta, especialmente en campos críticos como RFC, razón social, condiciones comerciales y datos de contacto. Un error en estos campos puede generar complicaciones significativas más adelante.
          </li>
          <li>
            <strong>Utilizar formatos estandarizados</strong>: Para campos como teléfonos, correos electrónicos o direcciones, utiliza formatos consistentes que faciliten la búsqueda y el procesamiento de la información. Por ejemplo, utilizar siempre el mismo formato para los números telefónicos (con o sin guiones, con o sin código de país).
          </li>
          <li>
            <strong>Documentar interacciones clave</strong>: Registra en Salesforce todas las interacciones importantes con el cliente, incluyendo reuniones, llamadas, correos electrónicos relevantes y acuerdos alcanzados. Esta documentación proporciona contexto valioso para cualquier persona que necesite dar seguimiento al caso.
          </li>
          <li>
            <strong>Actualizar información oportunamente</strong>: Cuando recibas actualizaciones o cambios en la información del cliente, regístralos inmediatamente en Salesforce para mantener el sistema actualizado. Esto evita confusiones y asegura que todos los equipos trabajen con la información más reciente.
          </li>
        </ul>
        
        <p>
          El registro completo de información no solo beneficia al ejecutivo a cargo, sino que también proporciona transparencia para el resto del equipo y facilita la continuidad en caso de que sea necesario reasignar la cuenta o la oportunidad.
        </p>
        
        <div className="bg-blue-50 p-4 border-l-4 border-blue-400 my-6">
          <p className="font-medium">Consejo</p>
          <p>Dedica unos minutos adicionales a verificar y completar la información después de cada interacción significativa con el cliente. Este pequeño esfuerzo adicional puede ahorrar horas de trabajo y prevenir problemas en el futuro.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Uso de tareas y recordatorios</h2>
        
        <p>
          Las tareas en Salesforce son una herramienta poderosa para organizar el trabajo diario y asegurar que ninguna actividad importante quede sin atención. Para aprovechar al máximo esta funcionalidad:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Crea tareas para todas las actividades pendientes</strong>: No confíes solo en tu memoria; registra en Salesforce todas las actividades que debes realizar, asignándoles una fecha límite realista.
          </li>
          <li>
            <strong>Establece recordatorios</strong>: Configura recordatorios para las tareas importantes, de modo que recibas notificaciones con suficiente antelación para prepararte adecuadamente.
          </li>
          <li>
            <strong>Prioriza tus tareas</strong>: Utiliza los campos de prioridad para distinguir entre tareas urgentes y aquellas que pueden esperar, facilitando así la organización de tu día a día.
          </li>
          <li>
            <strong>Actualiza el estado de las tareas</strong>: A medida que avanzas en tus actividades, actualiza el estado de las tareas correspondientes (en progreso, completada, pospuesta). Esto mantiene tu lista de pendientes actualizada y proporciona visibilidad sobre tu carga de trabajo.
          </li>
          <li>
            <strong>Revisa regularmente tus tareas vencidas</strong>: Dedica tiempo periódicamente a revisar las tareas que han excedido su fecha límite, para reprogramarlas o darles atención prioritaria según corresponda.
          </li>
        </ul>
        
        <p>
          Las tareas bien gestionadas no solo mejoran la productividad individual, sino que también facilitan la coordinación del equipo y proporcionan a los gerentes visibilidad sobre la distribución y avance del trabajo.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Actualización oportuna de etapas</h2>
        
        <p>
          El avance oportuno de las oportunidades a través de las diferentes etapas del proceso es crucial para mantener un flujo de trabajo eficiente y proporcionar visibilidad precisa sobre el estado de la cartera. Para asegurar una actualización adecuada:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Avanza las etapas tan pronto como se completen los requisitos</strong>: No demores en actualizar el estado de una oportunidad cuando ya has completado todos los pasos necesarios para avanzar a la siguiente etapa. Esto evita cuellos de botella y proporciona una visión actualizada del pipeline.
          </li>
          <li>
            <strong>Completa toda la información requerida antes de avanzar</strong>: Asegúrate de haber registrado todos los datos necesarios antes de mover una oportunidad a la siguiente etapa. Esto previene la necesidad de retroceder para completar información faltante.
          </li>
          <li>
            <strong>Utiliza los botones específicos para avanzar</strong>: Como se mencionó en la reunión, debido a la configuración compartida con Brasil, es importante utilizar los botones específicos que aparecen en la interfaz para avanzar entre etapas, en lugar de los botones estándar de Salesforce en la parte superior.
          </li>
          <li>
            <strong>Comunica internamente los cambios significativos</strong>: Cuando una oportunidad avanza a una etapa crítica (como contrato firmado o activación), asegúrate de comunicarlo a los equipos relevantes, incluso si el sistema debería notificarlos automáticamente. Esta redundancia puede prevenir retrasos causados por fallos en las notificaciones.
          </li>
          <li>
            <strong>Registra las razones de estancamiento</strong>: Si una oportunidad permanece en la misma etapa por un tiempo inusualmente largo, documenta las razones para proporcionar contexto a otros miembros del equipo o a la gerencia.
          </li>
        </ul>
        
        <p>
          La actualización oportuna de etapas no solo mejora la eficiencia operativa, sino que también contribuye a la precisión de los reportes y proyecciones basados en el estado de las oportunidades.
        </p>
        
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6">
          <p className="font-medium">Importante</p>
          <p>Recuerda que el avance entre etapas no debe realizarse con los botones estándar de Salesforce en la parte superior, sino con los botones específicos que aparecen en la interfaz y que están configurados para el flujo de trabajo de Total Pass.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Documentación adecuada</h2>
        
        <p>
          La documentación adecuada de todos los aspectos relevantes de la relación con el cliente es esencial para mantener la continuidad del servicio y facilitar la colaboración entre equipos. Algunas recomendaciones específicas incluyen:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Almacena todos los documentos relevantes en Salesforce</strong>: Asegúrate de que todos los documentos importantes (propuestas, contratos, comunicaciones clave, etc.) estén almacenados en Salesforce y correctamente vinculados a la cuenta u oportunidad correspondiente. Esto centraliza la información y facilita su acceso cuando sea necesario.
          </li>
          <li>
            <strong>Utiliza nombres descriptivos para los archivos</strong>: Al guardar documentos en Salesforce, utiliza nombres que describan claramente su contenido y versión, por ejemplo: "Propuesta_EmpresaXYZ_V2_20250604".
          </li>
          <li>
            <strong>Registra notas de reuniones importantes</strong>: Después de cada reunión significativa con el cliente, documenta los puntos clave discutidos, acuerdos alcanzados y próximos pasos. Estas notas serán valiosas para dar seguimiento y también para cualquier persona que necesite familiarizarse con el caso en el futuro.
          </li>
          <li>
            <strong>Documenta decisiones y excepciones</strong>: Si se toman decisiones especiales o se hacen excepciones a las políticas estándar, asegúrate de documentarlas detalladamente, incluyendo las razones y las aprobaciones obtenidas. Esto previene confusiones y proporciona respaldo en caso de cuestionamientos posteriores.
          </li>
          <li>
            <strong>Mantén un registro de problemas y soluciones</strong>: Si surgen problemas durante el proceso, documenta tanto el problema como la solución implementada. Esta información puede ser útil para casos similares en el futuro y contribuye al aprendizaje organizacional.
          </li>
        </ul>
        
        <p>
          Una documentación adecuada no solo facilita la gestión diaria, sino que también construye una memoria institucional valiosa que puede aprovecharse para mejorar procesos y resolver situaciones complejas basándose en experiencias previas.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Gestión eficiente del tiempo</h2>
        
        <p>
          La gestión eficiente del tiempo es crucial para maximizar la productividad y asegurar que se atiendan adecuadamente todas las oportunidades y clientes. Salesforce ofrece diversas herramientas que pueden ayudarte a optimizar tu tiempo:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Utiliza vistas personalizadas</strong>: Crea vistas filtradas para acceder rápidamente a la información más relevante para tu trabajo diario, como oportunidades que requieren seguimiento inmediato o tareas pendientes para el día.
          </li>
          <li>
            <strong>Aprovecha la sincronización con calendarios</strong>: Como se mencionó anteriormente, la sincronización con Google Calendar puede ahorrarte tiempo al eliminar la necesidad de duplicar entradas de reuniones.
          </li>
          <li>
            <strong>Programa reportes automáticos</strong>: Configura reportes para que se ejecuten automáticamente y te envíen la información relevante por correo electrónico, evitando la necesidad de generarlos manualmente cada vez.
          </li>
          <li>
            <strong>Utiliza plantillas para comunicaciones frecuentes</strong>: Si envías regularmente correos electrónicos con contenido similar, crea plantillas que puedas personalizar rápidamente para cada caso específico.
          </li>
          <li>
            <strong>Establece bloques de tiempo dedicados</strong>: Reserva períodos específicos en tu agenda para actividades como actualización de Salesforce, seguimiento de oportunidades o revisión de reportes, evitando así la dispersión y mejorando la concentración.
          </li>
        </ol>
        
        <p>
          Recuerda que la inversión de tiempo en mantener Salesforce actualizado y utilizar sus funcionalidades de manera efectiva generalmente se traduce en un ahorro significativo de tiempo a mediano y largo plazo, además de mejorar la calidad del servicio ofrecido a los clientes.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/integracion-sistemas" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Integración con Otros Sistemas
        </a>
        <a href="/solucion-problemas" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Solución de Problemas
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BuenasPracticas;
