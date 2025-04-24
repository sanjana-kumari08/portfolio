import { useState } from 'react';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Certicate from './components/Certicate';
import Contact from './components/Contact';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="text-white text-xl flex flex-row bg-transparent w-full justify-between items-center px-6 py-4 font-bold fixed top-0 z-50 backdrop-blur-md">
        <a href="#" className="text-2xl text-[#09eedf]">Portfolio</a>
        
        <ul className="md:flex hidden flex-row gap-8">
          <li><a href="#" className="hover:text-[#09eedf]">Home</a></li>
          <li><a href="#about" className="hover:text-[#09eedf]">About</a></li>
          <li><a href="#skills" className="hover:text-[#09eedf]">Skills</a></li>
          <li><a href="#services" className="hover:text-[#09eedf]">Services</a></li>
          <li><a href="#projects" className="hover:text-[#09eedf]">Projects</a></li>
          <li><a href="#certificate" className="hover:text-[#09eedf]">Certificate</a></li>
          <li><a href="#contact" className="hover:text-[#09eedf]">Contact</a></li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">&#8801;</button>
        </div>

        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4 md:hidden">
            <li><a href="#" onClick={() => setMenuOpen(false)} className="hover:text-[#09eedf]">Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#09eedf]">About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-[#09eedf]">Skills</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-[#09eedf]">Services</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-[#09eedf]">Projects</a></li>
            <li><a href="#certificate" onClick={() => setMenuOpen(false)} className="hover:text-[#09eedf]">Certificate</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#09eedf]">Contact</a></li>
          </ul>
        )}
      </nav>

      {/* Home Section */}
      <section className="min-h-screen pt-24 text-center px-4 text-gray-300 bg-black">
        <h1 className="text-cyan-400 text-3xl md:text-5xl font-bold mt-10">Hi!! 👋 This is Sanjana Kumari</h1>
        <h2 className="text-xl mt-4">I am a <span className="text-red-400 text-2xl">Full Stack Developer</span></h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Passionate about building full-stack web applications that solve real-world problems.
          Skilled in MERN stack, responsive design, and creating smooth user experiences with a touch of creativity.
        </p>

        {/* Resume + Social */}
        <div className="flex flex-col items-center mt-8 gap-6">
          <a
            href="/New_sanjana_res.pdf"
            download
            className="text-black font-bold bg-[#09eedf] px-6 py-3 rounded-full hover:bg-transparent hover:text-[#09eedf] hover:border hover:border-[#09eedf] transition-all"
          >
            Download Resume
          </a>

          <div className="flex flex-wrap justify-center gap-4">
            {/* GitHub */}
            <div className="flex items-center gap-2">
              <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" />
              <a
                href="https://github.com/sanjana-kumari08"
                className="border-2 rounded-2xl px-4 py-1 border-[#09eedf] hover:bg-[#09eedf] hover:text-black"
              >
                GitHub
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-2">
              <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" />
              <a
                href="https://www.linkedin.com/in/sanjana-kumari-10848a2b5"
                className="border-2 rounded-2xl px-4 py-1 border-[#09eedf] hover:bg-[#09eedf] hover:text-black"
              >
                LinkedIn
              </a>
            </div>

            {/* Twitter */}
            <div className="flex items-center gap-2">
              <img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/128/733/733579.png" />
              <a
                href="#"
                className="border-2 rounded-2xl px-4 py-1 border-[#09eedf] hover:bg-[#09eedf] hover:text-black"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Page Sections */}
      <About />
      <Skills />
      <Services />
      <Projects />
      <Certicate />
      <Contact />
    </>
  );
}

export default App;
