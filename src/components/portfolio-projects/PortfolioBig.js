import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import './Portfolio.scss'
import CommentListProject from './projects/Project1'
import BuyCartRedux from './projects/Project2'
import MovieApiFetch from './projects/Project3'
import AddPersonEdit from './projects/Project4'
import ToDoList from './projects/Project5'
import UserList from './projects/Project6'
import SmallEmptyProject from './SmallEmptyProject'

const PortfolioBig = () => {
  return (
    <>
      <Grid stackable className='portfolio'>
        <Grid.Row centered>
          <Header textAlign='center' as='h4' size='huge' color='blue'>
            My Portfolio
          </Header></Grid.Row>
        <Grid.Row columns={3} centered>
          <Grid.Column>

            <CommentListProject />
          </Grid.Column>
          <Grid.Column>

            <BuyCartRedux />
          </Grid.Column>
          <Grid.Column>

            <MovieApiFetch />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3} centered>
          <Grid.Column>

            <AddPersonEdit />
          </Grid.Column>
          <Grid.Column>

            <ToDoList />
          </Grid.Column>
          <Grid.Column>

            <UserList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default PortfolioBig
