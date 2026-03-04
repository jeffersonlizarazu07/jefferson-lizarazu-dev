import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { AboutPage } from "./pages/aboutPage";
import { ContactPage } from "./pages/contactPage";
import { ProjectsPage } from "./pages/projectsPage";
import { NotFound } from "./pages/notFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
