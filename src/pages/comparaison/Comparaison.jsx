import React, { useState  } from 'react'
import './comparaison.css'
import CompResult from './CompResult'



const Comparaison = () => {

    const [countryOne , setCountryOne] = useState('')
    const [countryTwo , setCountryTwo] = useState('')

    const [countriesOne , setCountriesOne] = useState([])
    const [countriesTwo , setCountriesTwo] = useState([])


    const [flagOne , setFlagOne] = useState('')
    const [flagTwo , setFlagTwo] = useState('')


    const [start , setStart] = useState(false)

    const [fieldOne , setFieldOne] = useState(false)
    const [fieldTwo , setFieldTwo] = useState(false)

    const continents = ['Asia' , 'Africa' , 'Oceania' , 'North America' , 'Antarctica' ,'Europe' , 'South America']

    
    
    const getCountries = async (country , filed) => {
        try{
            const response = await fetch(`https://restcountries.com/v3.1/region/${country}`)

            if (response.ok){
                const result = await response.json();
                if(filed==1){
                    setCountriesOne(result)
                }else if(filed==2){
                    setCountriesTwo(result)
                }

            

            }
        }
        catch(error){
             console.log(error)
        }
        finally{
            console.log('done');
        }   
    }



    const getFlag = async (countryName , countryNum) => {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      
            if (response.ok) {
              const result = await response.json();
              
              if(countryNum == 1){
                setFlagOne(result)
              }
              else if(countryNum == 2){
                setFlagTwo(result)
              }
      
            } else {
              console.log('Error: ' + response.statusText);
            }
      
            
          } catch (error) {
             
            console.log("wrong");
          } finally {
            console.log("from the evel");
          }
    }   
    


    const countryOneSelected = (event)=>{
        getCountries(event.target.value , 1)
    }

    const countryTwoSelected = (event)=>{
        getCountries(event.target.value , 2)
    }

    const changeCountryOne = (event) => {
        setCountryOne(event.target.value)
        getFlag(event.target.value , 1)
        setFieldOne(true)
    }

    const changeCountryTwo = (event) => {
        setCountryTwo(event.target.value)
        getFlag(event.target.value , 2)
        setFieldTwo(true)
    }


    const clear = () => {
        setFieldTwo(false)
        setFieldOne(false)
        countriesOne.length = 0
        countriesTwo.length = 0
        setStart(false)
    }
    



  return (
    <div className='comparaison pb-5 mb-5 container'>
        <h1>Choose Two Contries and Start The Comparaison</h1>

        <div className='row'>
            <div className='col-6'>
                <div>
                    {
                        countriesOne.length == 0 ? 
                    
                    <select name="country1" id="country1" onChange={countryOneSelected}>
                        {
                            continents.map((continent)=>(
                                <option style={{backgroundColor:'black'}} key={continent} value={continent}>{continent}</option>
                            ))
                        }
                    </select>
                    : 

                    <select name="country" id="country" onChange={changeCountryOne}>
                        {
                            countriesOne.map((country)=>(
                                <option style={{backgroundColor:'black'}} key={country?.name?.common} value={country?.name?.common}>{country?.name?.common}{" "}{country?.flag}</option>
                            ))
                        }
                    </select>

                    }

                </div>
            </div>
            <div className='col-6'>
            <div>
                    {
                        countriesTwo.length == 0 ? 
                    
                    <select name="country1" id="country1" onChange={countryTwoSelected}>
                        {
                            continents.map((continent)=>(
                                <option style={{backgroundColor:'black'}} key={continent} value={continent}>{continent}</option>
                            ))
                        }
                    </select>
                    : 

                    <select name="country" id="country" onChange={changeCountryTwo}>
                        {
                            countriesTwo.map((country)=>(
                                <option style={{backgroundColor:'black'}} key={country?.name?.common} value={country?.name?.common}>{country?.name?.common}{" "}{country?.flag}</option>
                            ))
                        }
                    </select>

                        }
                </div>
            </div>
        </div>
        {
            fieldOne && fieldTwo ? <button className='mb-5' onClick={()=>setStart(true)}>Start</button> 
            : <p>Choose The Two Countries To Start Comparaison</p>
        }
        

        {
            start ? 
            
            <div className='row main-result mt-5'>
                <div className='col-4'>
                    <CompResult countryName={`${countryOne}`} flag={flagOne[0].flags.png} />
                </div>
                <div className='col-4 tagNames'>
                    <div className='flagTag d-flex justify-content-center align-items-center'>
                        <h4>Flag</h4>
                    </div>
                    <h1>Name</h1>
                    <hr style={{width:'50%',marginLeft:'auto',marginRight:'auto'}}/>
                    <p>population</p>
                    <hr style={{width:'50%',marginLeft:'auto',marginRight:'auto'}}/>
                    <p>industry</p>
                    <p>agriculture</p>
                    <p>services</p>
                    <hr style={{width:'50%',marginLeft:'auto',marginRight:'auto'}}/>
                    <p>exports</p>
                    <p>imports</p>
                    <hr style={{width:'50%',marginLeft:'auto',marginRight:'auto'}}/>
                    <p>GDP</p>
                    <hr style={{width:'50%',marginLeft:'auto',marginRight:'auto'}}/>
                    <p>surface area</p>
                    <hr style={{width:'50%',marginLeft:'auto',marginRight:'auto'}}/>
                    <p>unemployment</p>
                   

                </div>
                <div className='col-4'>
                    <CompResult countryName={`${countryTwo}`} flag={flagTwo[0].flags.png} />
                </div>
                
            </div> 
            
            
            : null
        }

           {start ?  <button onClick={clear}>Clear</button> : null }

    </div>
  )
}

export default Comparaison