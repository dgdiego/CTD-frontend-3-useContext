import React, { useContext } from 'react'
import { useLanguageState } from '../Context/Context'

const Body = () => {
    const {language} = useLanguageState();
    
    return (
        <div>
            <h1>{language.title}</h1>
            <p>{language.description}</p>
        </div>
    )
}

export default Body