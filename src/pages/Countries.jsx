import React, { useEffect } from 'react'
import earth from '../images/Earth.png'
import {AiOutlineRight} from 'react-icons/ai'
import Aos from 'aos'
import "aos/dist/aos.css"

const Countries = () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className='countries'>
        
        <div className='container row'>
          <div className='col-12 col-md-6'>
              <div data-aos="fade-right" className='earth '>
                <img src={earth} alt="Earth Png Image from nasa" className='img-fluid'/>
              </div>
          </div>
          <div className='col-12 col-md-6 pt-5'>
              <div data-aos="fade-left" className='h-100 d-flex flex-column justify-content-center'>
                  <h1 className='title'>What is <span>Biladi</span> Website</h1>
                  <p>
                    Explore the world's countries and discover exciting
                    details at your fingertips. Biladi Offer is your go-to
                    destination for comprehensive information about every country
                    on the globe. Whether you're planning a vacation, conducting
                    research, or just satisfying your curiosity, we've got you covered!
                  </p>
                  <button>All Srvices <span><AiOutlineRight/></span></button>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Countries