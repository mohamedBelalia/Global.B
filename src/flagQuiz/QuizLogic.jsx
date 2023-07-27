import React, { useEffect, useRef, useState } from 'react'
import './quiz.css'

const QuizLogic = (props) => {

    
    const [clicked , setClicked] = useState(false)
    const [answer , setAnswer] = useState(false)
    const [right , setRight] = useState(0)
    const [wrong , setWrong] = useState(0)
    
    
    const countryList = props.countries;
    
    const [index , setIndex] = useState(Math.floor(Math.random()*4))
    
    const refElement = useRef([])
     

    const flag = countryList[index]?.flags?.png
    const rightName = countryList[index]?.name?.common
    
    
    
    console.log('The Right Name : ', rightName);

        const NextClicked = () => {  
            setClicked(false);
            setAnswer(false)
            props.randomArray();
            setIndex(Math.floor(Math.random()*4))

            for(let i=0 ; i< 4 ; i++){
                refElement.current[i].className = 'quiz-btn'
            }
        }
    
        const validation = (value , index) => {
            if(value == rightName){
     
                refElement.current[index].className = 'btn-right'
                setRight(()=>right+1)
            }else{
 
                refElement.current[index].className = 'btn-wrong'
                setWrong(()=>wrong+1)
            }
            setClicked(true)
            setAnswer(true)

        }


  return (
    <div className='quiz-logic'>
        <div className='points'>
            <h1>Right : {right}</h1>
            <h1>Wrong : {wrong}</h1>
        </div>
        <div className='flag-img'>
            <img src={flag} alt="flag"/>
        </div>
        {
        clicked ? <p>{rightName}</p> : <p>{" "}</p>
       }
        <div className='row' >
            {
                countryList.map((c,index)=>(
                    !answer 
                    ? <div className='col-12 col-md-3'>
                        <button className='quiz-btn' ref={(el) => (refElement.current[index] = el)} key={index} onClick={()=>validation(c?.name?.common , index)}>{c?.name?.common}</button>
                    </div>
                    : <div className='col-12 col-md-3'>
                    <button className='quiz-btn' ref={(el) => (refElement.current[index] = el)} key={index} >{c?.name?.common}</button>
                    </div>

                ))
            }
        </div>

       {
        !clicked ?
            <button disabled className='next-btn-disabled'>Next</button>
        : 
            <button className='next-btn' onClick={NextClicked}>Next</button>
       } 

       
        
    </div>
  )
}

export default QuizLogic