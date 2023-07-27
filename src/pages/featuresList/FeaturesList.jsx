import React, { useEffect } from 'react'
import './features.css'
import img1 from '../../images/worldGame.jpg'
import img2 from '../../images/ff.jpg'
import img3 from '../../images/HD-wallpapl.jpg'
import img4 from '../../images/worldbgflags.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"

const FeaturesList = () => {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);


  return (
    <div className='features-list'>
        <h1>Features of <span>Global.B</span></h1>
        <div className='row g-4 countainer'>
            <div className='col-12 col-md-3'>
                
                <div data-aos="fade-up"
                        data-aos-anchor-placement="top-center" className='feature-card'>
                    <div className='img-feature'>
                        <img src={img1} alt="flags cards" />
                    </div>
                    <div className='text-feature'>
                        <h3>Fun Flags Quiz</h3>
                        <p>An enjoyable quiz designed to enhance your skills.</p>
                    </div>

                </div>
                
            </div>
            {/* tttt */}
            <div className='col-12 col-md-3'>
                
                <div 
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                className='feature-card'>
                    <div className='img-feature'>
                        <img src={img2} alt="flags cards" />
                    </div>
                    <div className='text-feature'>
                        <h3>Countries Comparison</h3>
                        <p>By comparing two countries, you can discern the differences between them</p>
                    </div>
                </div>
                
            </div>
            {/* uuuuu */}
            <div className='col-12 col-md-3 '>

                <div 
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                className='feature-card'>
                    <div className='img-feature'>
                        <img src={img4} alt="flags cards" />
                    </div>
                    <div className='text-feature'>
                        <h3>Continents Search</h3>
                        <p>Explore every continent in search of the country you desire.</p>
                    </div>
                </div>

            </div>
            {/* lllll */}
            <div  className='col-12 col-md-3'>
                
                <div 
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                className='feature-card'>
                    <div className='img-feature'>
                        <img src={img3} alt="flags cards" />
                    </div>
                    <div className='text-feature'>
                        <h3>Countries Details</h3>
                        <p>You can discover country details like flags, population, and much more.</p>
                    </div>
                </div>
                
            </div>
            {/* mmmmm */}
        </div>
    </div>
  )
}

export default FeaturesList