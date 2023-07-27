import React , {useContext} from 'react'
import background from '../../images/map.jpg'
import { useQuery } from "@tanstack/react-query"
import Axios from 'axios'
import './continents.css'
import { CountryContext } from '../../ContextCountry'
import { useNavigate } from 'react-router-dom'
import SingleCountryCard from './SingleCountryCard'
import Loading from '../../loading/Loading'

const Continent = () => { 

    const {continentName} = useContext(CountryContext)
    const navigate = useNavigate()

    const { data , isLoading , isLoadingError } = useQuery(["continent"] , () => {
      return Axios.get(`https://restcountries.com/v3.1/region/${continentName}`).then((response) => response.data)
    })

    if(isLoading){
      return(
        <Loading/>
      )
    }



  return (
    <div className='continent'>
      <div className='continent-landingPage'>
          <div className='background'>
            <img src={background} alt="dark map at night" className='img-fluid'/>
          </div>
          <div className='continent-text'>
            <div>
                <p>Continent</p>
                <h1>{continentName}</h1>
            </div>
            <div>
              <p><span onClick={()=>navigate("/")}>Home</span>/{continentName}</p>
            </div>
          </div>
      </div>
      
        <div className='container row'>
            
            {
              data?.map((res)=>(
                res?.name?.common === 'Israel' || res?.name?.common === 'Western Sahara'  ? null 
              :<SingleCountryCard image={res?.flags?.png} Alt={res?.flags?.alt} area={res?.region} name={res?.name?.common} key={res?.name?.common}/>
              ))
            }

        </div>
    </div>
  )
}


export default Continent