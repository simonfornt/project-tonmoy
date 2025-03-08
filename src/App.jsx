import Navbar from './component/Nav'
import Hero from './component/Hero'
import About from './component/About'
import DonationCard from './component/Cards'
import TeamMembers from './component/Team'
import InfoCards from './component/InfoCards'
import imagechild from './assets/childern.jpg'
import aboutimg from './assets/mmc.jpg'
import ourMissonimg from './assets/baccha.jpg'
import kombol from './assets/kombol.jpg'
import picnic from './assets/picnic.jpg'
import ballon from './assets/ballon.jpg'
import Footer from './component/Footer'

import './App.css'

function App() {
  

  return (
    <>
     <Navbar/>
  
     <Hero  backgroundImage={imagechild} title="suddhaggon is a non-profite school for poor children"
     description='Suddhaggon is a non-profit school dedicated to providing free education to underprivileged children. 
     It aims to empower young minds with knowledge, skills, and a brighter future. Your support can help transform 
     lives through education and opportunity.
' donationAmount='300' bkashNumber='01980805227'/>
     <About 
             title="Who We Are"
             description="Founded in 2023, Shuddhangan is a non-profit service voluntary
                            educational institution in Bangladesh dedicated to serving underprivileged children.
                          Focused on youth power, we actively work to eradicate poverty, ensure access to education,
                          healthcare and nutrition and overcome socio-economic challenges.  Our initiatives
                         include financially empowering marginalized communities, providing free education
                          to underprivileged children, providing emergency healthcare and extending relief 
                         assistance to the needy.  Our ultimate goal is to empower the underprivileged,
                          promote self-sufficiency and eradicate poverty and illiteracy from Bangladesh."
              imageUrl={aboutimg} className='md:flex-row'/>

     <About
          title="Our Mission"
           imageUrl={ourMissonimg}

          description="To actively contribute to the development of underprivileged communities in Bangladesh.
                       Since our founding in 2023, we have dedicated ourselves to addressing important issues such as
                      poverty alleviation, education, health and nutrition, human rights and environmental sustainability.
                     We strive to create a positive impact by creating a platform for youth to realize their ideas and 
                     contribute to building a more beautiful and socially stable Bangladesh." className='md:flex-row-reverse' />
     
     <div className='md:flex gap-3 mx-10 justify-between'>
     <DonationCard imageUrl={kombol}
      des="Help unprivillage children by giving 300 Tk per person"/>
     <DonationCard imageUrl={picnic}
      des="Help unprivillage children by giving 300 Tk per person"/>
     <DonationCard imageUrl={ballon}
      des="Help unprivillage children by giving 300 Tk per person"/>
    
     </div>
     <TeamMembers/>

     <InfoCards/>

     {/* <Contact/> */}

     <Footer/>
     
    
    </>
  )
}

export default App
