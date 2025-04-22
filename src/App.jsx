 import { useState  } from 'react'
//  import{Link} from 'react-router-dom'
//  
// import sanjuImage from "./assets/sanju.jpg"; // Import the image
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Certicate from './components/Certicate'
import Contact from './components/Contact'
import Services from './components/Services'
import Projects from './components/Projects'

function App() {
   const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    {/* nav start */}
     <nav class="text-white text-xl flex flex-row  bg-transparent w-auto justify-evenly items-center font-bold ">
            <a href= "#" class="ml-2.5 text-2xl text-[#09eedf]">Portfolio</a >
            {/* <div class="menu-icon" onclick="toggleMenu()"> */}
                {/* <i class='bx bx-menu'></i>  */}
            {/* </div> */}
            <ul class="md:flex hidden flex-row gap-15 justify-between">
                <li><a href= "#" class=" cursor:pointer hover:text-[#09eedf]  ml-14">Home</a ></li>
                <li><a href= "#about" class="hover:text-[#09eedf]">About</a ></li>
                <li><a href="#skills" class="hover:text-[#09eedf]">Skills</a ></li>
                <li><a href="#services" class="hover:text-[#09eedf]">Service</a ></li>
                <li><a href="#projects" class='hover:text-[#09eedf]'>Project</a ></li>
                <li><a href="#certificate"  class="hover:text-[#09eedf]">Certificate</a ></li>
    
                <li><a href= "#contact" class="hover:text-[#09eedf] mr-10">Contact</a ></li>
            </ul>
             <button className='hidden md:block bg-[#09eedf] '> {}   </button> 

                <div class='md:hidden'>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-4xl">&#8801;</button>

                    {/* <a href=  class='text-4xl font-bold' href ="#">&#8801;<Link/> */}

                </div>



                {/* to menu */}

                {menuOpen && (
                <ul className="absolute top-10 left-0 w-full bg-black flex flex-col items-center gap-y-2 py-2 text-sm">
                    <li><a href= "#" className="hover:text-[#09eedf]">Home</a ></li>
                    <li><a href= "#about" className="hover:text-[#09eedf]">About</a ></li>
                    <li><a href="#skills" className="hover:text-[#09eedf]">Skills</a ></li>
                    <li><a href= "#services" className="hover:text-[#09eedf]">Service</a ></li>
                    <li><a href= "#projects" className="hover:text-[#09eedf]">Project</a ></li>
                    <li><a href= "#certificate" className="hover:text-[#09eedf]">Certificate</a ></li>
                    <li><a href= "#contact" className="hover:text-[#09eedf]">Contact</a ></li>
                </ul>
            )}
        </nav>

        {/* home start */}

         

              <section class="text-gray-300  text-xl flex flex-col justify-center items-center ml-30 w-fill h-120 ">
            <div class="">
                <h1 className='text-cyan-400 text-3xl mt-40 md:text-5xl font-bold'> Hii!!👋,This is Sanjana Kumari</h1>
                <h2>I am a <span className='text-red-400 text-2xl'>Full Stack Developer</span> <span>Develper</span></h2>
                <p>Passionate about building full-stack web applications that solve real-world problems.
                Skilled in MERN stack, responsive design,
                 and creating smooth user experiences with a touch of creativity.</p>   

                <div class="flex flex-col   gap-10 mt-9  ">
                  <button> 
                     <a 
                     href= "/New_sanjana_res.pdf"
                     download
                      className=" text-black font-bold  border rounded-4xl bg-[#09eedf]  w-10 h-20 p-4 text-xl mt-6 hover:bg-transparent hover:text-[#09eedf] hover:border-2 hover:border-[#09eedf] hover:duration-300">
                     Download Resume</a >
                     </button>
                    <div class=" flex flex-col  gap-3   md:flex-row  items-center justify-center  ">

                      {/* image 1 */}
                      <div className="flex items-center space-x-2">
                     <img  className="h-8 w-8 bg-amber-50 md:flex gap-10" src=" https://cdn-icons-png.flaticon.com/128/3291/3291695.png"/>
               <button  className='border-2 rounded-2xl w-20 border-[#09eedf]  hover:bg-[#09eedf] hover:text-black hover:font-bold hover:shadow-green-50 md:flex-row '> <a href= "https://github.com/sanjana-kumari08">       Github </a ></button>
               </div>

                                         {/* image 2 */}
                                         <div className="flex items-center space-x-2">
                                         <img className="h-8 w-8 md:flex gap-10" src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn Icon" />

                       <button className='border-2 rounded-2xl w-20 border-[#09eedf]  hover:bg-[#09eedf] hover:text-black hover:font-bold md:flex-row'> <a href= "https://www.linkedin.com/in/sanjana-kumari-10848a2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a ></button>
                       </div>


                                             {/* image 3 */}
                                             <div className="flex items-center space-x-2">
                                            <img className="h-8 md:flex gap-5" src=" https://cdn-icons-png.flaticon.com/128/733/733579.png"/>
                       <button className='border-2 rounded-2xl w-20 border-[#09eedf] hover:bg-[#09eedf] hover:text-black hover:font-bold md:flex-row'> <a href= "#"> Twitter</a ></button>
                    </div>

                    </div>

                </div>
            </div>
    {/* adding own img */}
            <div class="">
                <div class="">
                    <div class="">
                        {/* <img src="/sanju.jpg" alt="Profile Image"/> */}
                    </div>
                </div>
            </div>
        </section>

       
  <About />

       <Skills/>
       <Services/>
       <Projects/>
    
     <Certicate/>
    
    <Contact/>
    
    </>
  )
}

export default App
