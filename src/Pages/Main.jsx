
import Blog from '../Components/Blog'
import Contact from '../Components/Contact'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Testmonial from '../Components/Testmonials'


export default function Main() {
  return (
    <>
    <Navbar/>
    <section id='sobre'>
      <Hero/>
      
    </section>
    <section id='blog'>
    <Blog/>
    </section>
    <section id='depoimentos'>

      <Testmonial/>
    </section>
      
    <section>

    </section>
    <section id='contato'>
      <Contact/>

    </section>
    </>
  )
}
