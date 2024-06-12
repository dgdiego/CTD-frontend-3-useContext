import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'
import { useLanguageState } from '../Context/Context'

const Navbar = () => {
  
    const {keyLanguage, language, setParamLanguage} = useLanguageState()


    return (
        <div className="navbar">
            <p>{language.home}</p> 
            <p>{language.current}: {keyLanguage}</p>
            <button onClick={setParamLanguage}>{language.button}</button>
        </div>
    )
}

export default Navbar