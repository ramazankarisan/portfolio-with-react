import React, { useReducer } from 'react'
import homeContext from './homeContext'
import { sidebarReducer } from './HomeReducer'

const HomeState = (props) => {
  const [state, dispatch] = useReducer(sidebarReducer, { menuShow: true, active: false });

  const handleClick = () => {
    dispatch({ type: 'MENU_OPEN' });
  }

  const handleShow = () => {
    dispatch({ type: 'HANDLE_SHOW' })
  }
  const handleHide = () => {
    dispatch({ type: 'HANDLE_HIDE' })
  }
  return (
    <homeContext.Provider value={{ state, handleClick, handleShow, handleHide }}>
      {props.children}
    </homeContext.Provider>
  )
}

export default HomeState
