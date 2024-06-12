import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import EN from "../languages/english.json"
import PR from "../languages/portuguese.json"
import ES from "../languages/spanish.json"

const LanguageStates = createContext();

const Context = ({ children }) => {
  const [keyLanguage, setkeyLanguage] = useState("EN");
  const [language, setLanguage] = useState({});

  const setParamLanguage = () =>{
    let key = ""
    switch (keyLanguage) {
        case "EN":
          key ='ES'
          break;
        case "PR":
          key = "EN"
          break;
        case "ES":
          key = "PR"
          break;
      }
      setkeyLanguage(key)
  }

  

  useEffect(() => {
    let text = "";
    switch (keyLanguage) {
      case "EN":
        text =EN
        break;
      case "PR":
        text = PR
        break;
      case "ES":
        text = ES
        break;
    }
    setLanguage(text)
   
  }, [keyLanguage]);

  return (
    <LanguageStates.Provider value={{ keyLanguage, setParamLanguage, language }}>
      {children}
    </LanguageStates.Provider>
  );
};

export default Context;

export const useLanguageState = () => useContext(LanguageStates);
