import React from 'react';

const Skills = () => {
  return (
    <>
      {/* <!-- skill --> */}
      <section
        id="skills"
        className="text-white flex flex-col w-full px-4 py-10 md:px-16 bg-black"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            'HTML',
            'CSS',
            'JavaScript',
            'React.js',
            'Node.js',
            'Express.js',
            'SQL',
            'MongoDB',
            'TailwindCSS',
            'Java',
            'C++',
            'Python',
          ].map((skill, index) => (
            <div
              key={index}
              className="px-6 py-4 bg-transparent w-40 text-center rounded-2xl shadow-lg shadow-cyan-500 font-bold hover:bg-[#a1b3c7] hover:text-black transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
