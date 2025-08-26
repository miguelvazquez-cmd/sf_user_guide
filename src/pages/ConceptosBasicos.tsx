const ConceptosBasicos = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">2. Conceptos Básicos de Salesforce</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Acceso y navegación en Salesforce</h2>
        
        <p>
          El acceso a Salesforce es el primer paso para comenzar a trabajar con esta poderosa herramienta. Cada miembro del equipo de CS cuenta con credenciales personalizadas que determinan su nivel de acceso y las funcionalidades disponibles según su rol. Para ingresar a la plataforma, es necesario utilizar las credenciales proporcionadas por el administrador del sistema.
        </p>
        
        <p>
          Una vez dentro de Salesforce, es fundamental familiarizarse con la interfaz y los elementos de navegación que permitirán moverte eficientemente por el sistema. La barra superior contiene accesos rápidos a las funciones más utilizadas, mientras que el menú lateral izquierdo proporciona acceso a los diferentes módulos y objetos disponibles según tu perfil.
        </p>
        
        <p>
          La navegación intuitiva es una de las ventajas de Salesforce, permitiendo acceder rápidamente a la información necesaria. Sin embargo, es importante comprender la estructura jerárquica de los datos y cómo se relacionan entre sí los diferentes objetos para aprovechar al máximo las capacidades del sistema.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Aplicación "Justo Total Pass"</h2>
        
        <p>
          Un aspecto crucial que debes verificar cada vez que ingreses a Salesforce es que estés utilizando la aplicación correcta. Para el departamento de CS en México, la aplicación que debe utilizarse es "Justo Total Pass". Esta verificación es especialmente importante debido a la configuración compartida con Brasil.
        </p>
        
        <p>
          En la parte superior derecha de la interfaz, podrás visualizar qué aplicación estás utilizando actualmente. Si no estás en "Justo Total Pass", debes cambiar a esta aplicación antes de comenzar a trabajar. Este paso, aunque sencillo, es fundamental para asegurar que tengas acceso a todos los objetos, campos y funcionalidades específicas configuradas para el equipo de CS en México.
        </p>
        
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6">
          <p className="font-medium">Importante</p>
          <p>Siempre verifica que estás en la aplicación "Justo Total Pass" antes de comenzar cualquier operación en Salesforce.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Diferencia entre Total Pass (México) y otras aplicaciones</h2>
        
        <p>
          Es importante destacar que existen otras aplicaciones dentro de Salesforce que podrían tener nombres similares, como "Total Pass Ventas" para Brasil u otras variantes. Estas aplicaciones están configuradas para diferentes equipos y regiones, por lo que contienen objetos, campos y procesos distintos a los que necesita el equipo de CS en México.
        </p>
        
        <p>
          La utilización de la aplicación incorrecta puede generar confusiones, errores en el registro de información e incluso la imposibilidad de acceder a ciertos objetos o ejecutar determinados procesos. Por ello, siempre verifica que estás en "Justo Total Pass" antes de comenzar cualquier operación en el sistema.
        </p>
        
        <p>
          Esta separación de aplicaciones responde a la necesidad de mantener procesos diferenciados según las particularidades de cada mercado, respetando las normativas locales y las estrategias comerciales específicas de cada región.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Objetos principales en Salesforce</h2>
        
        <p>
          Salesforce organiza la información en objetos, que son esencialmente tablas de datos relacionadas entre sí. Para el departamento de CS, los objetos principales con los que trabajarás son:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Leads</strong>: Representan las referencias iniciales o prospectos que aún no han sido calificados. En el contexto de CS, aunque no es el objeto principal de trabajo, es importante comprender cómo se convierten los leads en cuentas y oportunidades.
          </li>
          <li>
            <strong>Cuentas</strong>: Son las empresas o entidades con las que Total Pass mantiene una relación comercial. Contienen información fundamental como nombre, RFC, dirección, y otros datos identificativos. Las cuentas son el objeto central alrededor del cual gira gran parte del trabajo del equipo de CS.
          </li>
          <li>
            <strong>Oportunidades</strong>: Representan las posibles ventas o negocios con una cuenta. Contienen información sobre el estado de la negociación, montos, probabilidad de cierre, entre otros datos relevantes para el seguimiento comercial.
          </li>
          <li>
            <strong>Cotizaciones</strong>: Son las propuestas formales enviadas a los clientes, con detalles específicos sobre precios, condiciones y servicios ofrecidos.
          </li>
          <li>
            <strong>Contratos</strong>: Registran los acuerdos formales establecidos con los clientes, incluyendo términos, condiciones, fechas de inicio y fin, entre otros detalles legales.
          </li>
          <li>
            <strong>Tareas</strong>: Son actividades específicas asignadas a usuarios para dar seguimiento a procesos o interacciones con clientes. Para el equipo de CS, las tareas son fundamentales para organizar el trabajo y asegurar que ningún paso del proceso quede sin atención.
          </li>
        </ul>
        
        <p>
          Cada uno de estos objetos contiene campos específicos que almacenan diferentes tipos de información. La relación entre estos objetos permite mantener una visión integral del cliente y su ciclo de vida dentro de Total Pass.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Perfiles y permisos para el equipo de CS</h2>
        
        <p>
          Los perfiles en Salesforce determinan qué puede ver y hacer cada usuario dentro del sistema. Para el departamento de CS, se han configurado permisos específicos que permiten acceder a los objetos y ejecutar las acciones necesarias para su labor diaria.
        </p>
        
        <p>
          El equipo de CS tiene acceso a objetos como cuentas, oportunidades, contratos, tareas y activaciones, ya que estos son fundamentales para su trabajo. A diferencia de otros equipos como los SDR (que se centran en leads) o los ejecutivos de expansión (enfocados en oportunidades), el equipo de CS requiere una visión más amplia que abarque todo el ciclo de vida del cliente.
        </p>
        
        <p>
          Es importante comprender que los permisos están cuidadosamente configurados para proteger información sensible y mantener la integridad de los datos. Por ejemplo, ciertos campos críticos como el RFC de una empresa o los costos de los planes solo pueden ser modificados por personas con los permisos adecuados, como el equipo legal o los gerentes.
        </p>
        
        <p>
          Si en algún momento encuentras limitaciones para acceder a cierta información o realizar determinadas acciones, es probable que se deba a restricciones de permisos establecidas por motivos de seguridad o control de procesos. En estos casos, deberás coordinar con tu gerente o con el administrador del sistema para encontrar la solución adecuada.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/introduccion" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Introducción
        </a>
        <a href="/flujo-trabajo" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Flujo de Trabajo
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ConceptosBasicos;
