import About from "./components/About"
import Certification from "./components/Certification"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-o -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#20B2AA_100%)]">
      </div>
      </div>
      
      
      <div className="container mx-auto px-10">
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Certification/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
