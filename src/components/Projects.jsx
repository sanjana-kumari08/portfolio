import React from 'react';

const projects = [
  {
    emoji: "📚",
    title: "LetsGo - Book Rental Platform",
    description: "An online platform to rent books for 5 days with a smart cart and location-based delivery.",
    github: "https://github.com/sanjana-kumari08",
    demo: "https://letsgo-book.vercel.app/",
  },
  {
    emoji: "💊",
    title: "Smart Healthcare Appointment",
    description: "A MERN stack app to book appointments with doctors and manage health records securely.",
    github: "https://github.com/sanjana-kumari08",
    demo: "",
  },
  {
    emoji: "💼",
    title: "Portfolio Website",
    description: "A personal portfolio built with React & Tailwind showcasing skills and projects beautifully.",
    github: "https://github.com/sanjana-kumari08",
    demo: "https://your-portfolio.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#f1f5f9] py-10 px-5 md:px-20" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-10">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-cyan-400 transition duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{project.emoji}</div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
