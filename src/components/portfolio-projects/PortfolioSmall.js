import React from 'react'
import { Button, Grid, Header } from 'semantic-ui-react'
import SmallEmptyProject from './SmallEmptyProject'

const PortfolioSmall = () => {
  return (
    <>
      <Grid stackable divided="vertically" className='portfolioSmall'>

        <Grid.Row centered textAlign='center' >
          <Grid.Column width={4}><Header textAlign='center' as='h4' size='huge' color='orange'>
            My Portfolio
          </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered textAlign='center' divided >
          <Grid.Column textAlign='center' width={5} >

            <SmallEmptyProject />
          </Grid.Column>
          <Grid.Column textAlign='center' width={5}  >
            <SmallEmptyProject />
          </Grid.Column>

        </Grid.Row>

        <Grid.Row centered>
          <Button color='orange' size='large'>Click for more!</Button>
        </Grid.Row>

      </Grid>
    </>
  )
}

export default PortfolioSmall
