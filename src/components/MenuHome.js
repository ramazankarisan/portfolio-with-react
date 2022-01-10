import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react'
import languageContext from '../context/language/LanguageContext';
import homeContext from '../context/sidebar/homeContext'
import themeContext from '../context/theme/themeContext';


const MenuHome = () => {
  const { state } = useContext(homeContext);
  const { lang } = useContext(languageContext);
  const { darkMode } = useContext(themeContext);

  return (
    <>
      {state.menuShow && <Menu vertical className={`menuHome ${darkMode ? 'back-black' : ''}`}  >
        <Link to="/">
          <Menu.Item as='p' className={` ${darkMode ? 'font-white' : ''}`}  >
            <Icon name='home' />
            {lang.home}
          </Menu.Item>
        </Link>
        <Link to="/portfolio">
          <Menu.Item as='p' className={` ${darkMode ? 'font-white' : ''}`}>
            <Icon name='code' />
            {lang.portfolio}
          </Menu.Item>
        </Link>

      </Menu>
      }
    </>
  )
}

export default MenuHome
