import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom'
import github from './github.png'
import linkedin from './linkdin.png'

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div className='footer'>
        <div className='container row footer-content'>
            <div className='col-lg-4 col-12'>
                <div className='website-name'>
                    <div className='logo'>
                        <h3 className='mt-3'>GLOBAL.B</h3>
                    </div>
                    <p className='mt-3'>Explore the world's countries with Global.B</p>
                </div>
            </div>
            <div className='col-lg-4 col-12'>
                <div className='footer-links'>
                    <h1>Navigation</h1>
                    <div>
                        <p onClick={()=>navigate('/continent')}>Continent</p>
                        <p onClick={()=>navigate('/comparaison')}>Comparaison</p>
                        <p onClick={()=>navigate('/quiz')}>Quiz</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-12'>
                <div className='contacts'>
                    <h1>Contact Me</h1>
                    <div>
                        <p>mohamedbelaliap@gmail.com</p>
                        <p>+212 619-984150</p>
                    </div>
                    <div className='icons'>
                      <a href='https://www.linkedin.com/in/mohamed-belalia-0b886a229/'><img src={linkedin} alt='linkedin'/></a>  
                       <a href='https://github.com/mohamedBelalia'><img src={github} alt='github'/></a> 
                    </div>
                    <p className='mt-4'>Created By Mohamed BELALIA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer