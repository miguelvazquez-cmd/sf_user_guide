const Introduccion = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">1. Introducción</h1>
      
      <div className="prose max-w-none">
        <p>
          El presente manual ha sido desarrollado con el propósito de proporcionar una guía completa y detallada sobre el uso de Salesforce para el departamento de Customer Success (CS) de Total Pass. Este documento surge como respuesta a la necesidad de estandarizar procesos, optimizar el flujo de trabajo y garantizar que todos los miembros del equipo de CS cuenten con el conocimiento necesario para aprovechar al máximo las funcionalidades que ofrece Salesforce en su labor diaria.
        </p>
        
        <p>
          La plataforma Salesforce representa una herramienta fundamental para el departamento de CS, ya que permite gestionar de manera eficiente todo el ciclo de vida del cliente, desde la recepción de leads hasta la activación y onboarding de nuevos clientes. A través de este sistema, es posible mantener un registro detallado de todas las interacciones, documentos y etapas por las que atraviesa cada cuenta, facilitando así el seguimiento y la toma de decisiones basada en datos concretos.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Audiencia objetivo</h2>
        
        <p>
          Este manual está dirigido principalmente a los ejecutivos de CS, coordinadores, gerentes y cualquier otro miembro del equipo que requiera interactuar con la plataforma Salesforce en el contexto de la gestión de cuentas y oportunidades. También resultará de utilidad para nuevos integrantes del equipo, sirviendo como material de capacitación que les permitirá familiarizarse rápidamente con los procesos establecidos.
        </p>
        
        <p>
          Es importante destacar que Salesforce en Total Pass opera en un entorno compartido con Brasil, lo que implica ciertas particularidades en su configuración y uso. A lo largo de este manual, se abordarán estas especificidades, proporcionando soluciones y alternativas para superar las limitaciones que puedan surgir de esta configuración compartida.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Importancia de Salesforce para el departamento de CS</h2>
        
        <p>
          El flujo de trabajo en Salesforce para el departamento de CS comprende diversas etapas interconectadas, que van desde la recepción de referencias y leads, pasando por la conversión a cuentas y oportunidades, la elaboración de cotizaciones, la negociación, la gestión documental, la firma de contratos, hasta llegar finalmente a la activación y onboarding del cliente. Cada una de estas etapas será explicada en detalle en las secciones correspondientes de este manual, proporcionando no solo los pasos a seguir, sino también las mejores prácticas y recomendaciones para optimizar cada proceso.
        </p>
        
        <p>
          La correcta utilización de Salesforce no solo beneficia al departamento de CS en términos de eficiencia operativa, sino que también contribuye significativamente a la experiencia del cliente, permitiendo ofrecer un servicio más ágil, personalizado y profesional. Además, la información registrada en el sistema constituye un valioso activo para la empresa, facilitando análisis, reportes y la identificación de oportunidades de mejora en los procesos.
        </p>
        
        <p>
          Este manual ha sido diseñado como un documento vivo, susceptible de actualizaciones y mejoras conforme evolucionen las necesidades del departamento y las funcionalidades de la plataforma. Por ello, se invita a todos los usuarios a compartir sus observaciones, sugerencias y experiencias que puedan contribuir a enriquecer este recurso.
        </p>
        
        <p>
          En las siguientes secciones, encontrarás toda la información necesaria para navegar con confianza por Salesforce, ejecutar eficientemente cada uno de los procesos establecidos y resolver las situaciones más comunes que puedan presentarse en el día a día. Te invitamos a utilizar este manual como una herramienta de consulta frecuente y a sacar el máximo provecho de las capacidades que Salesforce ofrece para el éxito de tu labor en el departamento de CS.
        </p>
      </div>
      
      <div className="mt-8 flex justify-end">
        <a href="/conceptos-basicos" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Conceptos Básicos
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Introduccion;
