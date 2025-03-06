import Navbar from './component/Nav'
import Hero from './component/Hero'
import Logo from './assets/react.svg'
import './App.css'

function App() {
  

  return (
    <>
     <Navbar/>
     <img className='mx-10' src={Logo} alt="" />
    </>
  )
}

export default App
