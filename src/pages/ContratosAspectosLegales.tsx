const ContratosAspectosLegales = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">8. Contratos y Aspectos Legales</h1>
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-6 mb-4">Proceso de elaboración de contratos</h2>
        
        <p>
          Una vez que la propuesta comercial ha sido aceptada por el cliente y se ha recibido y validado toda la documentación necesaria, se inicia el proceso de elaboración del contrato. Este proceso es fundamental para formalizar la relación comercial y establecer claramente los derechos y obligaciones de ambas partes.
        </p>
        
        <p>
          Actualmente, como se mencionó en la reunión, el proceso de elaboración de contratos no está completamente automatizado en Salesforce. La visión a futuro es que los datos registrados en el sistema se utilicen para generar automáticamente el contrato en la plataforma correspondiente (como DocuSign), sin necesidad de volver a introducir la información. Sin embargo, por el momento, el proceso requiere cierta intervención manual.
        </p>
        
        <p>
          Para iniciar el proceso de contrato, debes avanzar la oportunidad a la etapa correspondiente utilizando el botón específico que aparece en la interfaz. En este punto, el sistema solicitará información adicional relevante para el contrato, como:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Formas de pago acordadas (mensual, semestral, anual)</li>
          <li>Tipo de fee (variable o fijo)</li>
          <li>Precio por cápita</li>
          <li>Valor de copago (si aplica)</li>
          <li>Fecha de inicio de contrato</li>
          <li>Duración del contrato</li>
        </ul>
        
        <p>
          Durante la reunión se discutió la posibilidad de mejorar este apartado para incluir un listado detallado de los 12 planes (6 para titulares y 6 para dependientes) con sus respectivos costos. Esta mejora facilitaría el registro detallado de las condiciones comerciales y aseguraría que el contrato refleje exactamente lo acordado con el cliente.
        </p>
        
        <div className="bg-blue-50 p-4 border-l-4 border-blue-400 my-6">
          <p className="font-medium">Consejo</p>
          <p>Es recomendable mantener comunicación constante con el cliente durante esta etapa para asegurar que todos los detalles del contrato reflejen exactamente lo acordado, evitando así retrasos o malentendidos durante la fase de firma.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Revisión y aprobación interna</h2>
        
        <p>
          Antes de enviar el contrato al cliente para su firma, es necesario someterlo a un proceso de revisión y aprobación interna. Este proceso asegura que el documento cumpla con todas las políticas y estándares de la empresa, y que los términos comerciales sean adecuados y estén correctamente reflejados.
        </p>
        
        <p>
          La revisión interna generalmente involucra a diferentes áreas:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Equipo comercial</strong>: Verifica que las condiciones comerciales (precios, descuentos, plazos) reflejen lo acordado con el cliente.
          </li>
          <li>
            <strong>Equipo legal</strong>: Revisa que el contrato cumpla con todos los requisitos legales y proteja adecuadamente los intereses de la empresa.
          </li>
          <li>
            <strong>Equipo financiero</strong>: Valida que los términos financieros sean viables y estén alineados con las políticas de la empresa.
          </li>
          <li>
            <strong>Gerencia o dirección</strong>: Dependiendo del monto o importancia estratégica del contrato, puede requerirse la aprobación de niveles jerárquicos superiores.
          </li>
        </ol>
        
        <p>
          Salesforce permite registrar estas aprobaciones mediante procesos específicos configurados en el sistema. Cada aprobador recibe una notificación cuando se requiere su intervención, y puede aprobar, rechazar o solicitar modificaciones directamente desde la plataforma.
        </p>
        
        <p>
          Es importante destacar que el tiempo necesario para completar este proceso de aprobación debe considerarse en la planificación general del proyecto, para establecer expectativas realistas con el cliente sobre cuándo recibirá el contrato para su firma.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Firma de contratos</h2>
        
        <p>
          Una vez que el contrato ha sido aprobado internamente, se procede a su firma. Este proceso involucra tanto a Total Pass como al cliente, y debe registrarse cuidadosamente en Salesforce para mantener un seguimiento preciso del estado del contrato.
        </p>
        
        <p>
          Actualmente, como se mencionó en la reunión, el proceso de firma no está completamente integrado en Salesforce, aunque se está trabajando en mejorar esta integración. Sin embargo, el sistema debe registrar fechas clave como:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Cuándo firmó Total Pass</li>
          <li>Cuándo firmó la empresa cliente</li>
          <li>Cuántas razones sociales tiene el contrato</li>
          <li>Quiénes son los representantes legales que firmaron</li>
        </ul>
        
        <p>
          El proceso de firma puede realizarse de diferentes maneras:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>
            <strong>Firma física</strong>: Implica imprimir el contrato, firmarlo manualmente y luego digitalizarlo. Este método es menos común actualmente pero sigue siendo válido en ciertos contextos.
          </li>
          <li>
            <strong>Firma electrónica</strong>: Utilizando plataformas como DocuSign, que permiten firmar documentos digitalmente con validez legal. Este método es más eficiente y facilita el seguimiento del proceso.
          </li>
        </ol>
        
        <p>
          Independientemente del método utilizado, una vez que el contrato ha sido firmado por ambas partes, debe cargarse en Salesforce y vincularse a la cuenta y oportunidad correspondiente. Esto asegura que el documento esté disponible para consulta futura y que forme parte del histórico completo del cliente.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Registro de fechas y condiciones clave</h2>
        
        <p>
          El registro preciso de fechas y condiciones clave del contrato en Salesforce es esencial para la correcta gestión de la relación con el cliente. Estos datos no solo son importantes para el seguimiento interno, sino que también pueden activar automatizaciones y alertas que facilitan la gestión proactiva del ciclo de vida del cliente.
        </p>
        
        <p>
          Algunas de las fechas y condiciones más importantes que deben registrarse incluyen:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Fecha de inicio del contrato</strong>: Marca el comienzo oficial de la relación contractual.
          </li>
          <li>
            <strong>Fecha de inicio de facturación</strong>: Puede coincidir o no con la fecha de inicio del contrato, dependiendo de los acuerdos específicos.
          </li>
          <li>
            <strong>Duración del contrato</strong>: Generalmente expresada en meses (12, 24, 36, etc.).
          </li>
          <li>
            <strong>Fecha de vencimiento</strong>: Calculada automáticamente a partir de la fecha de inicio y la duración.
          </li>
          <li>
            <strong>Condiciones de renovación</strong>: Automática, requiere notificación previa, etc.
          </li>
          <li>
            <strong>Condiciones especiales</strong>: Cualquier acuerdo particular que no forme parte de las condiciones estándar.
          </li>
        </ul>
        
        <p>
          Estos datos deben registrarse en los campos correspondientes en Salesforce, evitando el uso de notas o comentarios para información crítica. Esto asegura que la información pueda ser consultada, filtrada y utilizada en reportes de manera efectiva.
        </p>
        
        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6">
          <p className="font-medium">Importante</p>
          <p>La fecha de inicio de facturación es particularmente crítica, ya que tiene implicaciones financieras directas. Asegúrate de verificar esta fecha con el cliente y registrarla correctamente en el sistema.</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Gestión de renovaciones y modificaciones</h2>
        
        <p>
          Los contratos no son documentos estáticos, sino que pueden requerir modificaciones durante su vigencia o renovaciones al finalizar su período inicial. Salesforce debe utilizarse para gestionar estos procesos de manera ordenada y eficiente.
        </p>
        
        <p>
          Para las renovaciones, el sistema idealmente debería generar alertas automáticas con suficiente antelación (generalmente 2-3 meses antes del vencimiento) para iniciar el proceso de negociación de la renovación. Estas alertas pueden tomar la forma de tareas asignadas al ejecutivo responsable de la cuenta.
        </p>
        
        <p>
          El proceso de renovación puede implicar:
        </p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Revisión de las condiciones actuales</li>
          <li>Análisis del histórico de la cuenta (uso del servicio, incidencias, etc.)</li>
          <li>Propuesta de nuevas condiciones si es necesario</li>
          <li>Negociación con el cliente</li>
          <li>Elaboración y firma de un nuevo contrato o adenda de renovación</li>
        </ol>
        
        <p>
          En cuanto a las modificaciones durante la vigencia del contrato, estas pueden ser necesarias por diversos motivos:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Cambio en el número de elegibles</li>
          <li>Adición o eliminación de servicios</li>
          <li>Cambios en condiciones comerciales</li>
          <li>Cambios en la estructura legal del cliente (fusiones, adquisiciones, etc.)</li>
        </ul>
        
        <p>
          Cada modificación debe documentarse mediante una adenda al contrato original, que debe seguir un proceso similar al del contrato inicial en términos de elaboración, aprobación y firma. Estas adendas deben registrarse en Salesforce y vincularse al contrato original, manteniendo así un histórico completo de la evolución de la relación contractual.
        </p>
        
        <p>
          Es importante destacar que tanto las renovaciones como las modificaciones representan oportunidades para fortalecer la relación con el cliente y potencialmente incrementar el valor del contrato, por lo que deben abordarse de manera estratégica y no como meros trámites administrativos.
        </p>
      </div>
      
      <div className="mt-8 flex justify-between">
        <a href="/gestion-documental" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior: Gestión Documental
        </a>
        <a href="/activacion-onboarding" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Siguiente: Activación y Onboarding
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ContratosAspectosLegales;
