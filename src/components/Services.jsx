import React from 'react';

const services = [
  {
    emoji: "🎨",
    title: "UI/UX Design",
    description: "Clean, modern and intuitive interfaces for better user experience.",
  },
  {
    emoji: "💻",
    title: "Frontend Development",
    description: "Responsive and interactive web interfaces using HTML, CSS, JS & React.",
  },
  {
    emoji: "🗄️",
    title: "Backend Development",
    description: "Secure server-side logic, APIs, and database handling using Node.js.",
  },
  {
    emoji: "⚛️",
    title: "MERN Stack Development",
    description: "Full-stack apps using MongoDB, Express, React and Node.js.",
  },
  {
    emoji: "🔌",
    title: "API Integration",
    description: "Dynamic features with third-party API services like payment & maps.",
  },
  {
    emoji: "📱",
    title: "Responsive Web Design",
    description: "Mobile-friendly websites that work flawlessly across all devices.",
  },
  {
    emoji: "🛒",
    title: "E-commerce Development",
    description: "Secure shopping platforms with cart, payment and authentication.",
  },
  {
    emoji: "🔄",
    title: "Website Redesign",
    description: "Modernizing outdated sites for improved look and performance.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-300 py-10 px-5 md:px-20" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-10">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-indigo-200  text-white p-6 rounded-2xl shadow-md hover:shadow-cyan-400 transition duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="text-5xl mb-4">{service.emoji}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-900">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
