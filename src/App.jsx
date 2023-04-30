import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Main from './Pages/Main'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'

function App() {
 

  return (
    <>
     <Router>
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='sobre' element={<About/>}/>
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
