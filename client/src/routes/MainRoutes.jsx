import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default MainRoutes;