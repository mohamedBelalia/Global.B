import React, { useEffect, useState } from 'react'

const CompResult = ({countryName , flag}) => {

    const [countryData , setCountryData] = useState([])

    const getCountry = async () => {
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
            setCountryData(result);
  
          } else {
            console.log('Error: ' + response.statusText)
          }
        } catch (error) {
            console.log('Error: ' + error.message);
        } finally {
            console.log(false);
        }
      };

    useEffect(()=>{
        getCountry()
    })

console.log(countryData)



  return (
    <div>
        <div className='compaResult'>
            <img src={flag}/>
        </div>
        <h1>{countryName}</h1>
        <hr />
        <h3>{countryData[0]?.population} p</h3>
        <hr />
        <h3>{countryData[0]?.employment_industry}%</h3>
        <h3>{countryData[0]?.employment_agriculture}%</h3>
        <h3>{countryData[0]?.employment_services}%</h3>
        <hr />
        <h3>{countryData[0]?.exports}$</h3>
        <h3>{countryData[0]?.imports}$</h3>
        <hr />
        <h3>{countryData[0]?.gdp}$</h3>
        <hr />
        <h3>{countryData[0]?.surface_area}km&sup2;</h3>
        <hr />
        <h3>{countryData[0]?.unemployment}%</h3>
       


    </div>
  )
}

export default CompResult