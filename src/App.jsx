import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelsPage from "./pages/ModelsPage";
import Footer from "./components/Footer";
import ModelDetailsPage from "./pages/ModelDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand/:brandId" element={<ModelsPage />} />
        <Route path="/brand/:brandId/model/:modelId" element={<ModelDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
