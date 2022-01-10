import React, { useReducer } from 'react'
import languageContext from './LanguageContext'
import { languageReducer } from './LanguageReducer'

const LanguageState = (props) => {
  const initial_state = {
    hireMe: 'Hire Me',
    theme: 'Theme',
    webDeveloper: 'Web Developer',
    home: 'Home',
    portfolio: 'Portfolio',
    myskills: 'My Skills',
    berlin: 'Living in Berlin',
    getInTouch: 'Get in Touch',
    service: 'Service Standarts',
    quality: 'Quality',
    secure: 'Secure and Fast',
    satisfaction: 'Satisfaction',
    top: 'top',
    myPortfolio: 'My Portfolio',
    projectName: 'Project Name',
    clickForMore: 'Click for More!',
    contact: 'Contact',
    fname: 'First Name',
    email: 'Your  E-Mail',
    message: 'Your Message',
    submit: 'Submit'
  }

  const [state, dispatch] = useReducer(languageReducer, initial_state)
  const selectLang = (value) => {
    dispatch({ type: 'SELECT_LANG', payload: value })
    // console.log(state);
  }

  return (
    <languageContext.Provider value={{ lang: state, selectLang }} >
      {props.children}
    </languageContext.Provider>
  )
}

export default LanguageState



