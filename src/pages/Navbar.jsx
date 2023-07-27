import React, { useState } from 'react'
import { AiOutlineClose , AiOutlineMenu } from "react-icons/ai";
import background from '../images/nav-bg.jpg'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [navToggel , setNavToggel] = useState('hide-nav')

    const navigate = useNavigate()


    const navigation = (path) => {
        navigate(path)
        setNavToggel('hide-nav')
    }


  return (
    <div className='navbar'>
        <div className='default-state pt-2'>
            <div className='container'>
            <h1>G.B</h1>
            <div onClick={()=>setNavToggel('showing-nav')}>
                <AiOutlineMenu size={40} style={{cursor:'pointer'}}/>
            </div>
            </div>
        </div>


        <div className={`active-nav ${navToggel}`}>

            <div className='container d-flex justify-content-between align-items-center pt-3'>
            
                <h1>G.B</h1>

                <div onClick={()=>setNavToggel('hide-nav')}>
                    <AiOutlineClose size={40} style={{cursor:'pointer'}}/>
                </div>
            </div>


            <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'80%' , width:'100%'}}>
                
                <div className='links d-flex flex-column justify-content-center align-items-center'>
                    <ul className='d-flex flex-column justify-content-between align-items-center'>
                        <li onClick={()=>navigation('/')}>Home</li>
                        <li onClick={()=>navigation('/continent')}>Continent</li>
                        <li onClick={()=>navigation('/comparaison')}>Comparaison</li>
                        <li onClick={()=>navigation('/quiz')}>Quiz</li>
                    </ul>
                </div>
                
            </div>


        </div>

    </div>
  )
}

export default Navbar