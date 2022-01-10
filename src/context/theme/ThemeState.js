import React, { useReducer } from 'react'
import themeContext from './themeContext'

const ThemeState = (props) => {


  const handleTheme = (checked) => {
    dispatch({ type: 'DARK_MODE', checked: checked })
  }

  const themeReducer = (state, action) => {
    switch (action.type) {
      case 'DARK_MODE':
        const darkTheme = action.checked
        return { darkTheme };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(themeReducer, false)


  return (
    <themeContext.Provider value={{ darkMode: state.darkTheme, handleTheme }}>
      {props.children}
    </themeContext.Provider>
  )
}

export default ThemeState
