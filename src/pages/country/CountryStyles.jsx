import React , {useState , useContext ,useEffect} from 'react'
import background from '../../images/map.jpg'
import './country.css'
import { CountryContext } from '../../ContextCountry'

const CountryStyles = (props) => {
    
    const {countryName} = useContext(CountryContext)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [borders , setBorders] = useState([])
    const [languages , setLanguages] = useState([])
    



    const fetchData = async () => {
        try {
          const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    
          if (response.ok) {
            const result = await response.json();
            setData(result)
            setBorders(result[0]?.borders)
            setLanguages(Object.values(result[0]?.languages))
    
          } else {
            setError('Error: ' + response.statusText);
          }
    
          
        } catch (error) {
           setError('Error: ' + error.message);
          console.log("wrong");
        } finally {
           setIsLoading(false);
        }
      };


      useEffect(()=>{
        fetchData()
      },[])

       
      
      
      

    
  return (
    <div className='country-countainer'>
    <div className='country-styles'>
        <div className='bg-country'>
            <img src={background} alt="map" />
        </div>
        <div className='txt-country d-flex flex-column justify-content-center text-center'>
            <p>Country</p>
            <h3>{data[0]?.name?.official}{" "}{data[0]?.flag}</h3>
            <h4>{data[0]?.subregion}</h4>
        </div>
    </div> 

    <div className='country-data'>
        <div className='row container'>
            <div className='col-12 col-md-6 flag-img'>
                <div>
                    <img src={data[0]?.flags?.png} alt={data[0]?.flags?.alt} />
                </div>
            </div>
            <div className='col-12 col-md-6 flag-text'>
                <div>
                    <p>{data[0]?.flags?.alt}</p>
                </div>
            </div>
        </div>

        <div className='arms d-flex flex-column justify-content-center text-center'>
            <h3>{`Caot Of Arms Of ${data[0]?.name?.official}`}</h3>
            <div>
                <img className='img-fluid' src={data[0]?.coatOfArms?.png} />
            </div>
        </div>

         <div className='info'>
            <div className='info-card'>
                <p>Region</p>
                <h3>{data[0]?.subregion}</h3>
            </div>

            <div className='info-card'>
                <p>Capital</p>
                <h3>{props.capital}</h3>
            </div>

            <div className='info-card'>
                <p>Languages</p>
                <div>
                    {
                    languages.map((language)=>(
                        <h3 key={language}>{language}</h3>
                    ))
                    }
                </div>
            </div>

            <div className='info-card'>
                <p>Borders</p>
                <div>
                    {
                    borders ? 
                    borders.map((border)=>(
                        <h3 key={border}>{border}</h3>
                    ))
                    :
                    null
                    }
                </div>
                
            </div>

            <div className='info-card'>
                <p>Population</p>
                <h3>{data[0]?.population}</h3>
            </div>

            <div className='info-card'>
                <p>Currency</p>
                <h3>{props.currency}</h3>
            </div>

            <div className='info-card'>
                <p>Gross Domestic Product</p>
                <h3>{props.gdp}$</h3>
            </div>

            <div className='info-card'>
                <p>Surface Area</p>
                <h3>{props.area} km&sup2; </h3>
            </div>

            <div className='info-card'>
                <p>Unemployment</p>
                <h3>{props.unemployment} %</h3>
            </div>

            <div className='info-card'>
                <p>Urban Population</p>
                <h3>{props.urban}%</h3>
            </div>

                    
        </div> 

    </div>

    </div>
  )
}

export default CountryStyles