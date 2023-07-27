import React , { useContext , useEffect , useState } from 'react'
import './country.css'
import { CountryContext } from '../../ContextCountry'
import BarChart from './Charts/BarChart'
import CountryStyles from './CountryStyles'
import PieChart from './Charts/PieChart'
import Loading from '../../loading/Loading'

const Country = () => {

    const {countryName} = useContext(CountryContext)
    const [dataTwo, setDataTwo] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [industries , setIndustries] = useState({})
    const [importsExports , setImportsExports] = useState({})
    const [secondarySchool , setecondarySchool] = useState({})

    

  const fetchData = async () => {
    try {
      const response = await fetch( 
        `https://api.api-ninjas.com/v1/country?name=${countryName}`,
        {
          method: 'GET',
          headers: { 'X-Api-Key': '+dcHnXyTLIF2n/BosGqSdw==VvuOnNHRefYPu4TT' },
          contentType: 'application/json',
        }
      );

      
      if (response.ok) {
        const result = await response.json();
        setData(result);
       
        if(result[0]?.employment_industry){
          const chartData = {
          labels : ['employment agriculture' , 'employment industry' , 'employment services'],
          datasets: [
            {
              label: "industries",
              data : [result[0]?.employment_industry , result[0]?.employment_agriculture , result[0]?.employment_services],
              backgroundColor : ['#2dff65' , '#83f5ff' , '#ff77ff'],
              borderColor : 'black',
              color : 'white'
            }
          ]
        }

        setIndustries(chartData)
        }
        else{
          setIndustries(false)
        }
        

        
        if(result[0]?.imports ){
          const impExp = {
          labels : ['Imports' , 'Exports'],
          datasets: [
            {
              label: "Imports and Exports",
              data : [result[0]?.imports, result[0]?.exports],
              backgroundColor : ['#2dff65' , '#83f5ff'],
              borderColor : 'black',
              color : 'white'
            }
          ]
        }

        setImportsExports(impExp)
        }
        else{
          setImportsExports(false)
        }
         


       
      } else {
        setError('Error: ' + response.statusText);
      }
    } catch (error) {
      setError('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);



  if (isLoading) {
    return <Loading/>
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  

  console.log(countryName); 


  return (
    <div className='country-details'>
          <CountryStyles 
           capital={data[0]?.capital} currency={data[0]?.currency.name} gdp={data[0]?.gdp}
          area={data[0]?.surface_area} unemployment={data[0]?.unemployment} urban={data[0]?.urban_population}
          />


          {
            industries ? <>
            <h1 className='chart-title'>Global Employment Insights</h1>
    
            <div className='charts'>
              <BarChart chartData={industries}/>
            </div>
            </>
        :null

          }


         
        
        {
          importsExports ?
          <>
          <h1 className='chart-title'>Imports & Exporst </h1>
          <div className='charts'>
            <PieChart chartData={importsExports}/>
          </div>
          </>
        : null
        }
        
    </div>
  )
}

export default Country