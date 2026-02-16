import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { StudioPage } from "./pages/StudioPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProductsPage } from "./pages/ProductsPage";
import { SchoolsPage } from "./pages/SchoolsPage";
import { CollaborationPage } from "./pages/CollaborationPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/projekty" element={<ProjectsPage />} />
          <Route path="/produkty" element={<ProductsPage />} />
          <Route path="/pro-skoly" element={<SchoolsPage />} />
          <Route path="/spoluprace" element={<CollaborationPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
