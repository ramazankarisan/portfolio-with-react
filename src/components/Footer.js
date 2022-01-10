import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Icon, Segment } from 'semantic-ui-react'

const Footer = () => {

  return (
    <>
      <Grid stackable centered >
        <Grid.Row centered>
          <Grid.Column width={8} textAlign='center'>
            <Segment >
              <a href="https://github.com/ramazankarisan" target='_blank' rel="noreferrer" >
                <Button className='btn github' color='black' size='tiny' >
                  <Icon name='github' /> GitHub
                </Button>
              </a>
              <Button className='btn facebook' color='facebook' size='tiny'>
                <Icon name='facebook' /> Facebook
              </Button>
              <Button className='btn twitter' color='twitter' size='tiny'>
                <Icon name='twitter' /> Twitter
              </Button>

              <a href="https://www.linkedin.com/in/ramazan-karisan-b49673227/" target='_blank' rel="noreferrer"><Button className='btn linkedin' color='linkedin' size='tiny'>
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
