import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { AboutPage } from "./pages/aboutPage";

function App() {
  // const Home = () => (Element) => <h1>Home</h1>;

  // const aboutPage = () => (Element) => <h1>About Me</h1>;

  // const myProjects = () => (Element) => <h1>My Porjects</h1>;

  // const ContactPage = () => (Element) => <h1>Contact me</h1>;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<myProjects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
