import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Header } from 'semantic-ui-react'
import CommentListProject from './projects/Project1'
import BuyCartRedux from './projects/Project2'
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

            <CommentListProject />
          </Grid.Column>
          <Grid.Column textAlign='center' width={5}  >
            <BuyCartRedux />
          </Grid.Column>

        </Grid.Row>

        <Grid.Row centered>
          <Link to="/portfolio"> <Button color='orange' size='large'>Click for more!</Button></Link>
        </Grid.Row>

      </Grid>
    </>
  )
}

export default PortfolioSmall
