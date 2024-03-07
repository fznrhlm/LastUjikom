import "./App.css";
import ProjectsPage from "./components/ProjectsPage";
import HomePage from "./home/HomePage";
import ProjectPage from "./components/ProjectPage";
import { LoginPage } from "./components/LoginPage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">    
        <div className="logo">GELEGAR</div>
        <div className="navList">
          <NavLink to="/" className="button">
            <span className="icon-home"></span>
            Home
          </NavLink>
          <NavLink to="/projects" className="button rounded">
            Menu
          </NavLink>
          <NavLink to="/login" className="button rounded">
            Register
          </NavLink>
          <NavLink to="/contact" className="button rounded">
            Contact
          </NavLink>
          <NavLink to="/about" className="button rounded">
            About
          </NavLink>
        </div>
      </header>

      <div className="containers">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;