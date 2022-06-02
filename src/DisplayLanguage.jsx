import React from "react"
import { LanguageContext } from "./LanguageContext"

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <>
            <LanguageContext.Consumer>
                 {language => {
                     return (
                         <div>
                             {language === 'en' ? <h1>The selected language is: {language.toLocaleUpperCase()}</h1>
                             : <h1>La lingua selezionata è: {language.toLocaleUpperCase()}</h1>}
                         </div>
                     )
                 }}
            </LanguageContext.Consumer>
              
            </>
        )
    }
}