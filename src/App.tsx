import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Education } from "@/pages/Education";
import { Skills } from "@/pages/Skills";
import { Projects } from "@/pages/Projects";
import { Experience } from "@/pages/Experience";
import { Certifications } from "@/pages/Certifications";
import { Contact } from "@/pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#080808]">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/achievements" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

