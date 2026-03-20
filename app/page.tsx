import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import NQSAreas from '@/components/NQSAreas'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <NQSAreas />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
