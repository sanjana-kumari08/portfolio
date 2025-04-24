import React from 'react';

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="bg-indigo-100 text-black px-4 py-12 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-10">About Me</h1>

          <p className="mt-8 text-gray-700 text-xl">
            I am a <span className="text-2xl font-bold text-indigo-700">Full Stack Developer</span> with a strong
            foundation in HTML, CSS, JavaScript, TailwindCSS, SQL, MongoDB, Node.js, Express.js, and React.js.
          </p>

          <p className="mt-8 text-gray-700 text-xl">
            I also have experience with C/C++, basic Java, and Python. I'm passionate about using these skills to build
            innovative and user-friendly web applications. Always curious, I'm constantly learning more about web
            development and digital marketing.
          </p>

          <p className="mt-8 text-gray-700 text-xl">
            I enjoy the challenge of coding and solving real-world problems. Currently, I'm seeking opportunities to join
            a team that values innovation and shares my passion for technology.
          </p>

          <p className="mt-8 text-gray-700 text-xl">Let's build something amazing together!</p>
        </div>
      </section>
    </>
  );
};

export default About;
