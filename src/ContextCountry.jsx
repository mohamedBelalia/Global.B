import React , {createContext , useState} from 'react'

export const CountryContext = createContext(null)

export const ContextCountryPovider = (props) => {

    const [continentName , setContinentName] = useState('Africa')
    const [countryName , setCountryName] = useState('Morocco')


    const nameContinent = (name) => {
        setContinentName(name)
    }

    const nameCountry = (name) => {
      setCountryName(`${name}`)
    }


    const contextValue = { nameContinent , continentName , nameCountry , countryName}


  return (
    <CountryContext.Provider value={contextValue}>
            {props.children}
    </CountryContext.Provider>
  )
}
