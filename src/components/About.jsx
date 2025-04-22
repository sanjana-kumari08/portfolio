import React from 'react'

const About = () => {
  return (
    <>
      
        {/* About Section  */}
        <section  id = "about"
        class="text-black bg-indigo-100 ">
            <div class="flex flex-col ml-50  w-auto h-100 items- center text-align: center;">
                <div class="about-content">
                    <h1 className='text-3xl md:text-4xl font-bold text-center text-red-700 mb-10 mt-4'>About Me</h1>
                    <p className='mt-8 text-gray-700 text-xl '>  I am a <span className='text-2xl font-bold text-indigo-700 '>  Full Stack developer</span> with strong foundation in HTML, CSS, JavaScript, TailwindCSS, SQL, MongoDB,
                        Node.js, Express.js, and also React.js.</p>
                    <p className='mt-8 text-gray-700 text-xl'>And I also know about C/C++, basic JAVA, and Python. I'm passionate about using these skills to
                        develop innovative web applications that are user-friendly. I'm always eager to learn more about web
                        development and marketing.</p>
                    <p className='mt-8 text-gray-700 text-xl '>I enjoy the challenge of coding and solving real-world problems. Currently, I am looking for
                        opportunities to join a team that values innovation and shares my enthusiasm for technology.</p>
                    <p className='mt-8 text-gray-700 text-xl'>Let's build something amazing together!</p>
                </div>
            </div>
        </section>

    </>
  )
}

export default About
