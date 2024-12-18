import Navbar from "./Sections/Navbar.jsx";
import Hero from "./Sections/Hero.jsx";
import About from "./Sections/About.jsx";
import Projects from "./Sections/Projects.jsx";
import Footer from "./Sections/Footer.jsx";
import Experience from "./Sections/Experience.jsx";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () =>{
    return (
        <main className="max-w-8xl mx-auto">
            <div className="max-w-7xl mx-auto">
                <Navbar />
            </div>
            <Hero />
            <div className="max-w-7xl mx-auto">
                <About/>
                <Projects />
                <Experience />
                <Footer />
                <Analytics />
                <SpeedInsights />
            </div>
        </main>
    )
}
export default App