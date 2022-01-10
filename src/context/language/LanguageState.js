import React, { useReducer, useState } from 'react'
import languageContext from './LanguageContext'
import { languageReducer } from './LanguageReducer'

const LanguageState = (props) => {


  const [state, dispatch] = useReducer(languageReducer, {})
  const selectLang = (value) => {
    dispatch({ type: 'SELECT_LANG', payload: value })
    // console.log(state);
  }

  return (
    <languageContext.Provider value={{ state, selectLang }} >
      {props.children}
    </languageContext.Provider>
  )
}

export default LanguageState



