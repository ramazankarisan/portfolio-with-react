import React, { useReducer } from 'react'
import homeContext from './homeContext'
import { sidebarReducer } from './HomeReducer'

const HomeState = (props) => {
  const [state, dispatch] = useReducer(sidebarReducer, { menuShow: true });

  const handleClick = () => {
    dispatch({ type: 'MENU_OPEN' });
  }

  return (
    <homeContext.Provider value={{ state, dispatch, handleClick }}>
      {props.children}
    </homeContext.Provider>
  )
}

export default HomeState
