import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react'
import homeContext from '../context/sidebar/homeContext'


const MenuHome = () => {
  const { state } = useContext(homeContext);

  return (
    <>
      {state.menuShow && <Menu vertical className='menuHome' >
        <Link to="/"><a href='#landingPage'><Menu.Item as='a' >
          <Icon name='home' />
          Home
        </Menu.Item></a></Link>
        <Link to="/portfolio"><Menu.Item as='a'>
          <Icon name='code' />
          Portfolio
        </Menu.Item></Link>

      </Menu>
      }
    </>
  )
}

export default MenuHome
