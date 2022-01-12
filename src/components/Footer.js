import React, { useContext } from 'react'
import { Button, Grid, Icon, Segment } from 'semantic-ui-react'
import themeContext from '../context/theme/themeContext';

const Footer = () => {
  const { darkMode } = useContext(themeContext);

  return (
    <>
      <Grid stackable centered >
        <Grid.Row centered color={darkMode ? 'grey' : null}>
          <Grid.Column width={8} textAlign='center'>
            <Segment className={`footerDiv ${darkMode ? 'inverted' : ""}`}>
              <a href="https://github.com/ramazankarisan" target='_blank' rel="noreferrer" >
                <Button className='btn github white-border' color='black' size='large'  >
                  <Icon name='github' /> GitHub
                </Button>
              </a>
              <Button className='btn facebook' color='facebook' size='large'>
                <Icon name='facebook' /> Facebook
              </Button>
              <Button className='btn twitter' color='twitter' size='large'>
                <Icon name='twitter' /> Twitter
              </Button>

              <a href="https://www.linkedin.com/in/ramazan-karisan-b49673227/" target='_blank' rel="noreferrer"><Button className='btn linkedin' color='linkedin' size='large'>
                <Icon name='linkedin' /> LinkedIn
              </Button></a>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Footer
