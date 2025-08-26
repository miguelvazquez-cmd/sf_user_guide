const Anexos = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">15. Anexos</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Formatos y plantillas</h2>
        
        <p>
          Para facilitar y estandarizar ciertos procesos dentro de Salesforce, se recomienda utilizar los siguientes formatos y plantillas:
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
          <h3 className="text-xl font-medium mb-3 text-green-700">Plantilla de propuesta comercial</h3>
          
          <p className="mb-4">
            Aunque actualmente el envío de propuestas se realiza de manera manual, es recomendable utilizar un formato estandarizado que incluya:
          </p>
          
          <ul className="list-disc pl-6 space-y-1">
            <li>Logo y datos de contacto de Total Pass</li>
            <li>Información del cliente (razón social, RFC, dirección)</li>
            <li>Detalle de los planes ofrecidos con sus respectivos precios</li>
            <li>Condiciones comerciales (descuentos, formas de pago, vigencia de la oferta)</li>
            <li>Términos y condiciones generales</li>
            <li>Espacio para firmas de aceptación</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
          <h3 className="text-xl font-medium mb-3 text-green-700">Checklist de documentación</h3>
          
          <p className="mb-4">
            Para facilitar la verificación de la documentación recibida, se recomienda utilizar un checklist que incluya:
          </p>
          
          <ul className="list-disc pl-6 space-y-1">
            <li>Constancia de situación fiscal</li>
            <li>Identificación del representante legal</li>
            <li>Comprobante de domicilio</li>
            <li>Poder notarial</li>
            <li>Acta constitutiva (cuando aplique)</li>
            <li>Otros documentos específicos según el caso</li>
          </ul>
          
          <p className="mt-4">
            Este checklist puede utilizarse tanto internamente como para compartir con el cliente, asegurando que se proporcionen todos los documentos necesarios.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
          <h3 className="text-xl font-medium mb-3 text-green-700">Formato de seguimiento de activación</h3>
          
          <p className="mb-4">
            Para dar seguimiento al proceso de activación y onboarding, se recomienda utilizar un formato que incluya:
          </p>
          
          <ul className="list-disc pl-6 space-y-1">
            <li>Datos básicos del cliente</li>
            <li>Fecha de firma del contrato</li>
            <li>Fecha de inicio de facturación</li>
            <li>Responsables de cada etapa (cadastro, portal RH, activación)</li>
            <li>Fechas compromiso para cada etapa</li>
            <li>Estado actual de cada actividad</li>
            <li>Observaciones o comentarios relevantes</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Preguntas frecuentes</h2>
        
        <div className="space-y-6 my-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">¿Puedo modificar el RFC de una cuenta después de crearla?</h3>
            <p>
              No directamente. Los campos críticos como el RFC solo pueden ser modificados por personas con permisos especiales (gerentes o equipo legal). Si necesitas modificar este dato, debes solicitar el cambio a tu gerente, explicando el motivo.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">¿Qué hago si el sistema no genera automáticamente una cotización?</h3>
            <p>
              Como se mencionó en la sección de solución de problemas, puedes crear manualmente una cotización seleccionando "MX Cotización" para México y completando los campos requeridos. Después de guardar, utiliza la opción "Cambiar valores y recalcular" para obtener los cálculos necesarios.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">¿Cómo sincronizo mi calendario de Google con Salesforce?</h3>
            <p>
              Debes acceder a la configuración de tu perfil en Salesforce, buscar la sección de "Integración con aplicaciones externas" y seguir las instrucciones para conectar con Google Calendar. Si tienes dificultades, contacta al equipo de soporte técnico.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">¿Qué hago si necesito un descuento mayor al permitido?</h3>
            <p>
              Los descuentos que exceden los límites establecidos requieren aprobaciones especiales. Debes solicitar la aprobación a través del sistema, justificando detalladamente el motivo del descuento y esperando la respuesta antes de comunicarlo al cliente.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">¿Cómo manejo una empresa con múltiples razones sociales?</h3>
            <p>
              Cada razón social debe registrarse como una cuenta independiente con su propio RFC. Estas cuentas pueden vincularse conceptualmente para facilitar su gestión conjunta. En el futuro, se implementará un objeto "grupo" que permitirá agrupar formalmente diferentes razones sociales bajo una misma estructura corporativa.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-2">¿Qué debo hacer si detecto un error en la configuración de Salesforce?</h3>
            <p>
              Documenta detalladamente el error, incluyendo capturas de pantalla si es posible, y repórtalo a través del canal establecido para solicitudes de soporte. Mientras tanto, busca soluciones alternativas para continuar con tu trabajo, como las descritas en la sección de solución de problemas.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/glosario" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Glosario de Términos
        </a>
        <a href="/" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Volver al Inicio
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Anexos;
