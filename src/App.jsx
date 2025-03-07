import Navbar from './component/Nav'
import Hero from './component/Hero'
import About from './component/About'
import DonationCard from './component/Cards'
import TeamMembers from './component/Team'
import InfoCards from './component/InfoCards'

import Footer from './component/Footer'

import './App.css'

function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
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
              imageUrl="https://globalfundforchildren.org/wp-content/uploads/2019/05/APON-Children-in-Classroom.jpg"/>

     <About
          title="Our Mission"
           imageUrl="https://globalfundforchildren.org/wp-content/uploads/2019/05/APON-Children-in-Classroom.jpg"

          description="To actively contribute to the development of underprivileged communities in Bangladesh.
                       Since our founding in 2023, we have dedicated ourselves to addressing important issues such as
                      poverty alleviation, education, health and nutrition, human rights and environmental sustainability.
                     We strive to create a positive impact by creating a platform for youth to realize their ideas and 
                     contribute to building a more beautiful and socially stable Bangladesh."/>
     
     <div className='md:flex gap-3 mx-10 justify-between'>
     <DonationCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo6iiaQNGI6NHYPLaW8wChrrlZ1JpbNy1hQ&s"
      des="Help unprivillage children by giving 300 Tk per person"/>
     <DonationCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo6iiaQNGI6NHYPLaW8wChrrlZ1JpbNy1hQ&s"
      des="Help unprivillage children by giving 300 Tk per person"/>
     <DonationCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdo6iiaQNGI6NHYPLaW8wChrrlZ1JpbNy1hQ&s"
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
