import React, { useContext } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import homeContext from '../context/sidebar/homeContext'


const MenuHome = () => {
  const { state } = useContext(homeContext);
  console.log(state);
  return (
    <>
      {state.menuShow && <Menu vertical className='menuHome' >
        <Menu.Item as='a' >
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
      </Menu>
      }
    </>
  )
}

export default MenuHome
