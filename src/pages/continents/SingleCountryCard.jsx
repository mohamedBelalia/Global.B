import React , {useContext} from 'react'
import './continents.css'
import { CountryContext } from '../../ContextCountry'
import { useNavigate } from 'react-router-dom'

const SingleCountryCard = (props) => {

    const {nameCountry} = useContext(CountryContext)
    const navigate = useNavigate()

    const handleClick = (name) => {
        nameCountry(name)
        navigate(`/country/${name}`)
    } 

  return (
    <div className='col-6 col-md-3 p-3 co-country' onClick={()=>handleClick(props.name)}>
        <div className='country'>
          <img src={props.image} alt={props.Alt}/>
        </div>
        <div className='country-info'>
          <p>{props.name}</p>
        </div>
    </div>
  )
}

export default SingleCountryCard