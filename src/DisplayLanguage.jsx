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
                             <span>The selected language is: {language}</span>
                         </div>
                     )
                 }}
            </LanguageContext.Consumer>
              
            </>
        )
    }
}