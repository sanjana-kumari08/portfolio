import React from 'react';

const Contact = () => {
  return (
    <>
      {/* <!-- contact page --> */}
      <section
        id="contact"
        className="flex flex-col w-full bg-white px-4 py-10 md:px-16 shadow-lg"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-10">
            Contact Me
          </h2>

          {/* form */}
          <form className="bg-black backdrop-blur-md shadow-2xl w-full max-w-xl rounded-2xl p-6 flex flex-col items-center">
            <div className="w-full mb-4">
              <label className="text-white font-bold block mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full border rounded-2xl font-bold text-blue-500 p-3"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="w-full mb-4">
              <label className="text-white font-bold block mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full border rounded-2xl font-bold text-blue-500 p-3"
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="w-full mb-6">
              <label className="text-white font-bold block mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full border rounded-2xl font-bold text-blue-500 p-3"
                id="message"
                rows="4"
                placeholder="Enter Message"
                required
              ></textarea>
            </div>

            <button
              className="bg-[#09eedf] rounded-2xl px-6 py-2 text-black font-semibold shadow-lg shadow-cyan-500 hover:text-white hover:bg-[#8becdf]"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
