import Navbar from './component/Nav'
import Hero from './component/Hero'
import About from './component/About'
import DonationCard from './component/Cards'

import './App.css'

function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <div className='md:flex gap-3 mx-10 justify-between'>
     <DonationCard/>
     <DonationCard/>
     <DonationCard/>
     </div>
     
    
    </>
  )
}

export default App
