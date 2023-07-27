import React , {useContext, useEffect} from 'react'
import image from '../images/world.jpg'
import { CountryContext } from '../ContextCountry'
import { useNavigate } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"

const Area = () => {


  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

    const {nameContinent} = useContext(CountryContext)

    const continents = ['Asia' , 'Africa' , 'Oceania' , 'North America' ,'Europe' , 'South America']

    const navigate = useNavigate()

    const handleClick = (name) => {
        nameContinent(name)
        navigate('/continent')
    }

  return (
    <div className='area'>
        <div className='container row'>
          <div className='col-12 col-md-6 pt-5 '>
              <div data-aos="fade-right" className='h-100 d-flex flex-column justify-content-center continents-list'>
                  {
                    continents.map((continent)=>(
                        <h1 className='area-btn' key={continent} onClick={()=>handleClick(continent)}>{continent}</h1>
                    ))
                  }
              </div>
          </div>

          <div data-aos="fade-left" className='col-12 col-md-6 d-flex justify-content-center'>
              <div className='world'>
                <img src={image} alt="Earth Png Image from nasa" className='img-fluid'/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Area