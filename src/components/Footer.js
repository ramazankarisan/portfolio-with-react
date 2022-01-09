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
              <Link to='/' >
                <Button className='btn github' color='black' size='tiny' >
                  <Icon name='github' /> GitHub
                </Button>
              </Link>
              <Button className='btn facebook' color='facebook' size='tiny'>
                <Icon name='facebook' /> Facebook
              </Button>
              <Button className='btn twitter' color='twitter' size='tiny'>
                <Icon name='twitter' /> Twitter
              </Button>

              <Button className='btn linkedin' color='linkedin' size='tiny'>
                <Icon name='linkedin' /> LinkedIn
              </Button>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Footer
