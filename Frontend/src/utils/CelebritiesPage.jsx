import React from 'react'
import Button from '../components/Button'
import FiltrationButton from '../components/FiltrationButton'
import Cards from '../components/Cards'
import CelebrrityLayout from '../components/CelebrrityLayout'


const CelebritiesPage = () => {
  return (
    
    <div>        
      
         <img className='celebrities-img' src={require("../assests/images/celebrities/sara-ali.jpg")}></img>
                <div className='celebrities-hero'>  
                   
                         <p className='celebrities-heading'>The Biggest Fan Club of Bollywood Actors!</p>
                         <p className='celebrities-pera'>On TrueFan, Bollywood fans from across India can now get Bollywood actors and Bollywood actresses a step closer to them. Not just them but their friends and family!</p>
                         <p className='celebrities-pera'>Fans can now get a personalized Video Message from top Bollywood actors and Bollywood actresses through the TrueFan APP.TrueFan’s roster boasts top 
</p>
                          <p className='celebrities-pera-display'>To get personalized Video Messages from these Bollywood stars is super simple Bollywood actors like Kareena Kapoor, Ananya Panday, Janhvi Kapoor, and Jacqueline Fernandez!</p>

                          <Button/>
                          
                </div>
                
                <div style={{backgroundColor:"#000000"}}>
                
                 
                <CelebrrityLayout/>
                {/* <Cards/> */}
                </div>
              
    </div>
  )
}

export default CelebritiesPage
