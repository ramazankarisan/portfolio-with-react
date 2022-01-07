import React, { useReducer } from 'react'
import sidebarContext from './sidebarContext'
import { sidebarReducer } from './sidebarReducer'

const SidebarState = (props) => {
  const [state, dispatch] = useReducer(sidebarReducer, { sidebarOpen: true });

  const handleClick = () => {
    dispatch({ type: 'SIDEBAR_OPEN' });
  }
  console.log('state', state)
  return (
    <sidebarContext.Provider value={{ state, dispatch, handleClick }}>
      {props.children}
    </sidebarContext.Provider>
  )
}

export default SidebarState
