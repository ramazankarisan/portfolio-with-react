import React, { useReducer } from 'react'
import homeContext from './homeContext'
import { sidebarReducer } from './HomeReducer'

const HomeState = (props) => {
  const [state, dispatch] = useReducer(sidebarReducer, { menuShow: true, active: false, project1: false, project2: false, project3: false, project4: false, project5: false, project6: false });

  const handleClick = () => {
    dispatch({ type: 'MENU_OPEN' });
  }

  const handleShow = (name) => {
    dispatch({ type: 'HANDLE_SHOW', payload: name });

  }
  const handleHide = (name) => {
    dispatch({ type: 'HANDLE_HIDE', payload: name })
  }
  return (
    <homeContext.Provider value={{ state, handleClick, handleShow, handleHide }}>
      {props.children}
    </homeContext.Provider>
  )
}

export default HomeState
