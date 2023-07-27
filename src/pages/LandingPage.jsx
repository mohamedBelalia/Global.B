import React , {useEffect} from 'react'
import background from '../images/earthVideo.mp4'
import Aos from 'aos'
import "aos/dist/aos.css"

const LandingPage =  () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className="commun-page landing">
        <div className='home-bg'>          
          <video src={background} autoPlay loop muted></video>
        </div>
        <div data-aos="fade-up" className='home-text text-center h-100 w-100 d-flex flex-column align-items-center justify-content-center'>
            <h1>Every Country Has Data</h1>
            <p className='mt-4 mb-4'>
            Explore the world's countries with Global Insights <br /> data on flags, populations, capitals, and more!
            </p>
            <button className='earthBtn'>Explore</button>
        </div>
    </div>
  )
}


export default LandingPage
