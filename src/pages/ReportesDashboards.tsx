const ReportesDashboards = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">10. Reportes y Dashboards</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Reportes disponibles para CS</h2>
        
        <p>
          Los reportes en Salesforce son una herramienta fundamental para el departamento de CS, ya que permiten analizar datos, identificar tendencias y tomar decisiones basadas en información concreta. El sistema ofrece una variedad de reportes predefinidos y también la posibilidad de crear reportes personalizados según las necesidades específicas del equipo.
        </p>
        
        <p>
          Para el departamento de CS, algunos de los reportes más relevantes incluyen:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Reporte de oportunidades por etapa</strong>: Muestra la distribución de oportunidades en las diferentes etapas del ciclo de ventas, permitiendo identificar cuellos de botella o áreas que requieren atención especial.
          </li>
          <li>
            <strong>Reporte de actividad comercial</strong>: Detalla las interacciones con clientes (reuniones, llamadas, correos) en un período determinado, útil para evaluar el nivel de actividad y seguimiento.
          </li>
          <li>
            <strong>Reporte de conversión de leads</strong>: Analiza la efectividad en la conversión de leads a oportunidades, identificando tasas de conversión y tiempos promedio.
          </li>
          <li>
            <strong>Reporte de cierres previstos</strong>: Proyecta los cierres esperados en períodos futuros, basándose en las fechas estimadas de cierre de las oportunidades activas.
          </li>
          <li>
            <strong>Reporte de clientes activos</strong>: Proporciona una visión general de los clientes que ya han completado el proceso de onboarding y están utilizando activamente los servicios.
          </li>
        </ul>
        
        <p>
          Estos reportes pueden accederse desde la sección "Reportes" en el menú principal de Salesforce. Dependiendo de tu perfil y permisos, podrás ver reportes públicos compartidos por la organización o reportes privados que hayas creado específicamente para tu uso.
        </p>
        
        <div className="bg-blue-50 p-4 border-l-4 border-blue-400 my-6">
          <p className="font-medium">Consejo</p>
          <p>Dedica tiempo regularmente a revisar los reportes relevantes para tu rol. Esta práctica te permitirá mantener una visión clara de tu cartera y priorizar efectivamente tus actividades.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Creación de reportes personalizados</h2>
        
        <p>
          Además de los reportes predefinidos, Salesforce ofrece la posibilidad de crear reportes personalizados que se ajusten exactamente a tus necesidades específicas. Esta funcionalidad es especialmente útil cuando requieres análisis que no están cubiertos por los reportes estándar.
        </p>
        
        <p>
          Para crear un reporte personalizado, debes seguir estos pasos generales:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            Accede a la sección "Reportes" en el menú principal
          </li>
          <li>
            Haz clic en "Nuevo Reporte"
          </li>
          <li>
            Selecciona el tipo de reporte que deseas crear (basado en qué objetos quieres analizar)
          </li>
          <li>
            Define los campos que deseas incluir, arrastrándo los desde el panel lateral
          </li>
          <li>
            Configura filtros para limitar los datos según tus necesidades
          </li>
          <li>
            Agrupa y ordena la información para facilitar su análisis
          </li>
          <li>
            Añade gráficos si deseas una representación visual de los datos
          </li>
          <li>
            Guarda el reporte con un nombre descriptivo para facilitar su identificación posterior
          </li>
        </ol>
        
        <p>
          Los reportes personalizados pueden guardarse para uso futuro y también pueden programarse para que se ejecuten automáticamente en intervalos específicos, enviando los resultados por correo electrónico a las personas designadas.
        </p>
        
        <p>
          Es importante destacar que la creación de reportes efectivos requiere un buen entendimiento de la estructura de datos en Salesforce y de las relaciones entre los diferentes objetos. Si no estás familiarizado con estos conceptos, puede ser útil solicitar apoyo al administrador del sistema o a compañeros con más experiencia en la creación de reportes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Dashboards para seguimiento de KPIs</h2>
        
        <p>
          Los dashboards en Salesforce son representaciones visuales que agrupan varios reportes en una sola pantalla, proporcionando una visión consolidada de diferentes métricas y KPIs (Indicadores Clave de Desempeño). Para el departamento de CS, los dashboards son herramientas invaluables para monitorear el desempeño y mantener el enfoque en los objetivos estratégicos.
        </p>
        
        <p>
          Un dashboard efectivo para CS podría incluir componentes como:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Gráfico de oportunidades por etapa</strong>: Visualización del pipeline actual, mostrando la distribución de oportunidades en cada etapa del proceso.
          </li>
          <li>
            <strong>Indicador de cumplimiento de cuota</strong>: Medidor que muestra el progreso hacia los objetivos comerciales establecidos.
          </li>
          <li>
            <strong>Tabla de oportunidades próximas a cerrar</strong>: Listado de las oportunidades con mayor probabilidad de cierre en el corto plazo.
          </li>
          <li>
            <strong>Gráfico de actividad reciente</strong>: Visualización de la cantidad y tipo de actividades realizadas en un período determinado.
          </li>
          <li>
            <strong>Mapa de calor de clientes por región</strong>: Representación geográfica de la distribución de clientes y oportunidades.
          </li>
        </ul>
        
        <p>
          Los dashboards pueden personalizarse según las necesidades específicas de cada usuario o equipo. Pueden configurarse para actualizarse automáticamente a intervalos regulares, asegurando que siempre muestren la información más reciente.
        </p>
        
        <p>
          Para acceder a los dashboards existentes, puedes navegar a la sección "Dashboards" en el menú principal. Dependiendo de tu rol y permisos, podrás ver dashboards públicos compartidos por la organización o dashboards privados que hayas creado para tu uso personal.
        </p>
        
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6">
          <p className="font-medium">Importante</p>
          <p>Los dashboards son tan precisos como los datos en los que se basan. Para obtener insights valiosos, es fundamental mantener la información en Salesforce actualizada y completa.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Análisis de datos para toma de decisiones</h2>
        
        <p>
          Más allá de la simple visualización de datos, Salesforce ofrece capacidades avanzadas de análisis que pueden ayudar al departamento de CS a tomar decisiones informadas y estratégicas. Estas herramientas permiten identificar patrones, tendencias y oportunidades que podrían no ser evidentes a simple vista.
        </p>
        
        <p>
          Algunos ejemplos de análisis que pueden realizarse incluyen:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Análisis de ciclo de ventas</strong>: Estudiar la duración promedio de cada etapa del proceso de ventas, identificando dónde se producen retrasos o cuellos de botella.
          </li>
          <li>
            <strong>Análisis de efectividad de descuentos</strong>: Evaluar cómo diferentes niveles de descuento afectan la probabilidad de cierre y el tiempo de negociación.
          </li>
          <li>
            <strong>Segmentación de clientes</strong>: Categorizar clientes según características como tamaño, industria o ubicación, para identificar segmentos de mayor potencial.
          </li>
          <li>
            <strong>Análisis de causas de pérdida</strong>: Estudiar las razones por las que se pierden oportunidades, buscando patrones que puedan abordarse estratégicamente.
          </li>
          <li>
            <strong>Proyecciones y tendencias</strong>: Utilizar datos históricos para proyectar resultados futuros y anticipar cambios en el mercado.
          </li>
        </ol>
        
        <p>
          Para realizar estos análisis, Salesforce ofrece funcionalidades como reportes matriciales, fórmulas personalizadas, agrupaciones anidadas y diversas opciones de visualización. Además, para análisis más avanzados, existe la posibilidad de exportar datos a herramientas externas como Excel o integrar con plataformas especializadas en análisis de datos.
        </p>
        
        <p>
          Es importante destacar que el análisis efectivo de datos requiere no solo herramientas adecuadas, sino también un enfoque crítico y contextual. Los datos por sí solos no cuentan toda la historia; es necesario interpretarlos considerando el contexto del mercado, las particularidades de cada cliente y los objetivos estratégicos de la organización.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Compartir y programar reportes</h2>
        
        <p>
          Una de las ventajas de los reportes y dashboards en Salesforce es la facilidad con que pueden compartirse con otros miembros del equipo o programarse para su distribución automática. Estas funcionalidades facilitan la colaboración y aseguran que la información relevante llegue a las personas adecuadas en el momento oportuno.
        </p>
        
        <p>
          Para compartir un reporte o dashboard, puedes utilizar las opciones de "Compartir" disponibles en la interfaz. Al hacerlo, podrás especificar:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Con quién deseas compartir (usuarios específicos, roles o grupos)</li>
          <li>Qué nivel de acceso tendrán (solo lectura, edición, etc.)</li>
          <li>Si deseas enviar una notificación sobre este compartir</li>
        </ul>
        
        <p>
          Además de compartir manualmente, puedes programar reportes para que se ejecuten automáticamente y envíen los resultados por correo electrónico. Para configurar esta programación, debes:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Abrir el reporte que deseas programar</li>
          <li>Hacer clic en "Programar futuras ejecuciones" o una opción similar</li>
          <li>Especificar la frecuencia (diaria, semanal, mensual)</li>
          <li>Definir el formato del reporte (HTML, Excel, CSV)</li>
          <li>Indicar los destinatarios del correo electrónico</li>
          <li>Configurar el asunto y cuerpo del mensaje</li>
        </ol>
        
        <p>
          Esta funcionalidad es especialmente útil para reportes que necesitas revisar regularmente, como seguimiento semanal de oportunidades o reportes mensuales de desempeño. Al automatizar su distribución, te aseguras de recibir la información sin necesidad de recordar ejecutar manualmente cada reporte.
        </p>
        
        <p>
          Es importante utilizar estas capacidades de compartir y programar de manera estratégica, evitando la sobrecarga de información. Cada reporte compartido o programado debe tener un propósito claro y proporcionar valor a sus destinatarios. La calidad y relevancia de la información compartida es más importante que la cantidad.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/activacion-onboarding" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Activación y Onboarding
        </a>
        <a href="/integracion-sistemas" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Integración con Otros Sistemas
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ReportesDashboards;
