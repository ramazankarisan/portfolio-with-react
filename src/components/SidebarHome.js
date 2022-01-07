import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Grid, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import sidebarContext from '../context/sidebar/sidebarContext';
import homeImg from '../images/programming.svg';


const SidebarHome = () => {

  const { state } = useContext(sidebarContext)
  return (
    <>


      <Grid  >
        <Grid.Row  >
          <Grid.Column  >
            <Sidebar.Pushable as={Segment} style={{ 'height': "100vh" }}>
              <Sidebar

                className=' sidefix'
                as={Menu}
                animation='push'
                icon='labeled'
                inverted
                // onHide={}
                vertical
                visible={state.sidebarOpen}
                width='thin'
              >
                <Menu.Item as='a'>
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
              </Sidebar>

              <Sidebar.Pusher dimmed={false}  >

                <Grid className='intro' >
                  <Grid.Row className='homeImg' centered>
                    <Grid.Column width={4}>
                      <Image src={homeImg}></Image>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row centered >
                    <Grid.Column width={4}  >
                      <div className='ui grid centered headerIntro' >
                        <h1>Ramazan Karisan</h1>
                        <h3>Web Developer</h3>
                      </div>
                      <div className='ui grid centered'><FontAwesomeIcon icon={faAngleDoubleDown} size="7x"
                      /></div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>


              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  )
}

export default SidebarHome
