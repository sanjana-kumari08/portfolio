import React from "react";

const Certificate = () => {
  return (
    <>
      {/* <!-- certificate --> */}
      <section
        id="certificate"
        className="text-white flex flex-col w-full px-4 py-8 md:px-10 lg:px-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-10">
          Certificate
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="w-72 sm:w-80 h-60 rounded-2xl bg-transparent shadow-lg shadow-cyan-500 p-6 hover:bg-[#a1b3c7] hover:text-black font-bold transition duration-300">
            <img
              src="/geeks.jpg"
              alt="HTML Certificate"
              className="w-full h-auto mb-2"
            />
            Full Stack
          </div>

          <div className="w-72 sm:w-80 h-60 rounded-2xl bg-transparent shadow-lg shadow-cyan-500 p-6 hover:bg-[#a1b3c7] hover:text-black font-bold transition duration-300">
            <img
              src="skillup.jpg"
              alt="React.js Certificate"
              className="w-full h-auto mb-2"
            />
            React.js
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificate;
