import "./App.css"
import Contact from "./components/Contact/Contact"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Intro from "./components/Intro/Intro"
import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"
import Services from "./components/Services/Services"
import Testimonial from "./components/Testimonial/Testimonial"
import Skills from "./components/Skills/Skills"
import CursorTrail from "./components/CursorTrail"
  import React, { useEffect } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
function App() {
  useEffect(() => {
    toast.success("Welcome to my Nex_Quick Solutions!",{
      theme:"dark",
    }  
    );
  }, [])
  return (
    <div className="App">
     <CursorTrail/>
      <Navbar />
      <Intro />
      <Services />
      <Skills />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      <ToastContainer 
        bodyClassName="custom-toast-body"
      />
    </div>
  )
}

export default App
