import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ContactoPage from "./pages/ContactoPage";
import EmpresaPage from "./pages/EmpresaPage";
import HomePage from "./pages/HomePage";
import ServicioTecnicoPage from "./pages/ServicioTecnicoPage";
import SolucionesPage from "./pages/SolucionesPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/empresa" element={<EmpresaPage />} />
        <Route path="/soluciones" element={<SolucionesPage />} />
        <Route path="/servicio-tecnico" element={<ServicioTecnicoPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
