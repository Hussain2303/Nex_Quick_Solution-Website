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

function App() {
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
    </div>
  )
}

export default App
