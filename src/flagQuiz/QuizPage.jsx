import React, { useEffect, useState } from 'react'
import './quiz.css'
import QuizLogic from './QuizLogic'

const QuizPage = () => {

    const [error , setError] = useState('')
    const [isLoading , setIsLoading] = useState(false)
    const [data , setData] = useState([])
    const [started , setStarted] = useState(false)

    const [fourCountries , setFourCountries] = useState([]) 

    const indexArray = []
    const countries = []

    const fetchData = async () => {
        try {
          const response = await fetch('https://restcountries.com/v3.1/all');
    
          if (response.ok) {
            const result = await response.json();
            setData(result)
    
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



      const randomCountries = () => {
        indexArray.length = 0
        countries.length = 0
            for(let i=0 ; i< 4 ; i++){
                const index = Math.floor(Math.random()*245)
                indexArray.push(index)
            }

            indexArray.map((ind)=>(
                countries.push((data[ind]))
            ))

            setFourCountries(countries)

            setStarted(true)
     
      }

      


  return (
    <div className='quiz-parent'>

        {
          !started ? <button className='start-btn' onClick={randomCountries}>GET STARTED</button> 
          : <QuizLogic countries = {fourCountries} randomArray={randomCountries}/>
        }

        
        
    </div>
  )
}

export default QuizPage