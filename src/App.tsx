import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import './App.css';

// Importación de contenido del manual
import Introduccion from './pages/Introduccion';
import ConceptosBasicos from './pages/ConceptosBasicos';
import FlujoTrabajo from './pages/FlujoTrabajo';
import GestionCuentas from './pages/GestionCuentas';
import GestionOportunidades from './pages/GestionOportunidades';
import ProcesoCotizacion from './pages/ProcesoCotizacion';
import GestionDocumental from './pages/GestionDocumental';
import ContratosAspectosLegales from './pages/ContratosAspectosLegales';
import ActivacionOnboarding from './pages/ActivacionOnboarding';
import ReportesDashboards from './pages/ReportesDashboards';
import IntegracionSistemas from './pages/IntegracionSistemas';
import BuenasPracticas from './pages/BuenasPracticas';
import SolucionProblemas from './pages/SolucionProblemas';
import Glosario from './pages/Glosario';
import Anexos from './pages/Anexos';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduccion" element={<Introduccion />} />
          <Route path="/conceptos-basicos" element={<ConceptosBasicos />} />
          <Route path="/flujo-trabajo" element={<FlujoTrabajo />} />
          <Route path="/gestion-cuentas" element={<GestionCuentas />} />
          <Route path="/gestion-oportunidades" element={<GestionOportunidades />} />
          <Route path="/proceso-cotizacion" element={<ProcesoCotizacion />} />
          <Route path="/gestion-documental" element={<GestionDocumental />} />
          <Route path="/contratos-aspectos-legales" element={<ContratosAspectosLegales />} />
          <Route path="/activacion-onboarding" element={<ActivacionOnboarding />} />
          <Route path="/reportes-dashboards" element={<ReportesDashboards />} />
          <Route path="/integracion-sistemas" element={<IntegracionSistemas />} />
          <Route path="/buenas-practicas" element={<BuenasPracticas />} />
          <Route path="/solucion-problemas" element={<SolucionProblemas />} />
          <Route path="/glosario" element={<Glosario />} />
          <Route path="/anexos" element={<Anexos />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
