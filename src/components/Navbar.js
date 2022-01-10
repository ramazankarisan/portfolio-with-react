import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button, Checkbox, Grid, Menu } from 'semantic-ui-react'
import languageContext from '../context/language/LanguageContext';
import homeContext from '../context/sidebar/homeContext';
import themeContext from '../context/theme/themeContext';
import DropdownLanguage from './DropdownLanguage';


const Navbar = () => {
  const { handleClick } = useContext(homeContext);
  const { lang } = useContext(languageContext);
  const { handleTheme, darkMode } = useContext(themeContext);


  return (
    <>
      <Grid stackable id="home">
        <Grid.Row centered className='navbarCont ' color={darkMode ? 'black' : null} >
          <Grid.Column mobile={16} computer={10}  >
            <Menu className={`fixedMenu ${darkMode ? 'back-black' : null} `}   >
              <Menu.Item>

                <Button onClick={() => handleClick()} circular icon="list layout" color='teal' size='big' >

                </Button>
              </Menu.Item>

              <Menu.Item>
                <Link to="/contact"><Button positive>{lang.hireMe}</Button>
                </Link>
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item className='checkbox'>

                  <div className={` ${darkMode ? 'font-white' : ''}`} > {lang.theme}</div>
                  <Checkbox toggle onChange={(e, { checked }) => handleTheme(checked)} />
                  {/* <Button primary>Sign Up</Button> */}
                </Menu.Item>
                <Menu.Item >
                  <DropdownLanguage />
                </Menu.Item>


              </Menu.Menu>

            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  )
}

export default Navbar
