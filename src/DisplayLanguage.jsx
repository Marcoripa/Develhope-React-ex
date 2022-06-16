import React, {useContext, useState} from "react"
import {LanguageContext} from './LanguageContext'


export function DisplayLanguage() {
    const [language, setLanguage] = useState('en')
    const lang = useContext(LanguageContext)

    function handleSelectLanguage(e) {
         setLanguage(e.target.value)
    }

        return (
            <>
            <select value={language} onChange={handleSelectLanguage}>
                <option value='en'>english</option>
                <option value="it">italiano</option>
            </select>
            <LanguageContext.Provider value={lang}>
                 <div>
                    {language === {lang} ? <h1>The selected language is: {language.toLocaleUpperCase()}</h1>
                    : <h1>La lingua selezionata è: {language.toLocaleUpperCase()}</h1>}
                 </div>              
            </LanguageContext.Provider>           
            </>
        )
}