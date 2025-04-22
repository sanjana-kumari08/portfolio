import React from 'react'

const Contact = () => {
  return (
    <>
       {/* <!--  contact page --> */}
       <section id ="contact"
       class=" flex flex-col  w-full  bg-white shadow-lg  " >
    <div  class=" flex flex-col    h-140">
        <h2 className='text-3xl md:text-4xl font-bold text-center text-red-700 mb-10 mt-4'>Contact Me</h2>

        {/* form */}
        <form className='bg-black backdrop-blur-md shadow-2xl h-100 w-100   rounded-2xl flex flex-col justify-center items-center ml-20 md:ml-120'>
            <div class="m-4"> 

                <label className="text-white font-bold p-5 ml-10" for="name">Name</label>
                <input className=" border  rounded-2xl  font-bold text-blue-500 p-3" type="text" id="name" placeholder="Your Name" required/>
            </div>
            <div class="m-4">
                <label  className="text-white font-bold p-5 ml-10" for="email">Email</label>
                <input   className=" border rounded-2xl  font-bold  text-blue-500 p-3" type="email" id="email" placeholder="Your Email" required/>
            </div>
            <div class="m-4">
                <label  className="text-white font-bold p-5 ml-10" for="message">Message</label>
                <textarea   className=" border rounded-2xl  font-bold text-blue-500 p-3 " id="message" rows="4" placeholder="Enter  Message" required></textarea>
            </div >

            <button className="m-4 bg-[#09eedf] rounded-2xl w-30 h-10 text-black font-semibold   shadow-lg shadow-cyan-500 hover:text-white hover:bg-[#8becdfee]" type="submit">Send Message</button>
        </form>
        {/* <div class="contact-link">
         <div class="link">
                        <a href="https://github.com/sanjana-kumari08"><i class='bx bxl-github'></i>  Github</a>
                        <a href="https://www.linkedin.com/in/sanjana-kumari-10848a2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class='bx bxl-linkedin-square'></i> LinkedIn</a>
                        <a href="#"><i class='bx bxl-twitter'></i> Twitter</a>
                    </div>
    
                </div> */}
    </div>
    </section>
    </>
  )
}

export default Contact
