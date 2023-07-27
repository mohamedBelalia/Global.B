import React from 'react'
import './movingBg.css'

const MovingBg = () => {


  
  const allLefts = []
  const withHeight = []
  let i =0
 
  for(let i=0 ; i < 1300 ; i++){
    const left = Math.floor(Math.random()*1700)
    allLefts.push(left)
  }



  return (
    <div className='moving-bg'>
        {
          allLefts.map((left) => (
            <Star leftOr={left}/>
          ))
        }
    </div>
  )
}

const Star = (props) => {
    return(
      <div className='star' style={{left:`${props.leftOr}px`}}></div>
    )
}

export default MovingBg