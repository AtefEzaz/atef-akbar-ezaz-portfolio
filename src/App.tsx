import { Navbar } from './components/Layout/Navbar'
import { Footer } from './components/Layout/Footer'
import { Hero } from './components/Sections/Hero'
import { About } from './components/Sections/About'
import { Skills } from './components/Sections/Skills'
import { Projects } from './components/Sections/Projects'
import { Journey } from './components/Sections/Journey'
import { Contact } from './components/Sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
