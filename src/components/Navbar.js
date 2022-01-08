import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Button, Dropdown, Grid, Menu, } from 'semantic-ui-react'
import homeContext from '../context/sidebar/homeContext';




const Navbar = () => {
  const { dispatch, handleClick } = useContext(homeContext);
  return (
    <>
      <Grid stackable
      // style={{ 'margin-bottom': 60 }}
      >
        <Grid.Row centered className='navbarCont ' >
          <Grid.Column mobile={16} computer={10}  >
            <Menu className='fixedMenu '  >
              <Menu.Item>

                <Button onClick={() => handleClick()} circular icon="home" color='teal' size='big' >
                  {/* <Icon circular color='teal' name='home' size="large" /> */}
                </Button>
              </Menu.Item>

              <Menu.Item>
                <Link to="/contact"><Button positive>Hire Me</Button>
                </Link>
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Button primary>Sign Up</Button>
                </Menu.Item>
                <Dropdown item text='Language'>
                  <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Russian</Dropdown.Item>
                    <Dropdown.Item>Spanish</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>


              </Menu.Menu>

            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  )
}

export default Navbar
