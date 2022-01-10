import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button, Dropdown, Grid, Menu, } from 'semantic-ui-react'
import languageContext from '../context/language/LanguageContext';
import homeContext from '../context/sidebar/homeContext';
import DropdownLanguage from './DropdownLanguage';




const Navbar = () => {
  const { handleClick } = useContext(homeContext);
  const { state } = useContext(languageContext);
  console.log(state);
  return (
    <>
      <Grid stackable id="home"
      // style={{ 'margin-bottom': 60 }}
      >
        <Grid.Row centered className='navbarCont ' >
          <Grid.Column mobile={16} computer={10}  >
            <Menu className='fixedMenu '  >
              <Menu.Item>

                <Button onClick={() => handleClick()} circular icon="list layout" color='teal' size='big' >

                </Button>
              </Menu.Item>

              <Menu.Item>
                <Link to="/contact"><Button positive>{state.hireMe}</Button>
                </Link>
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Button primary>Sign Up</Button>
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
