import React, { useContext } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import languageContext from '../../context/language/LanguageContext'
import themeContext from '../../context/theme/themeContext'
import './Portfolio.scss'
import CommentListProject from './projects/Project1'
import BuyCartRedux from './projects/Project2'
import MovieApiFetch from './projects/Project3'
import AddPersonEdit from './projects/Project4'
import ToDoList from './projects/Project5'
import UserList from './projects/Project6'


const PortfolioBig = () => {
  const { lang } = useContext(languageContext);
  const { darkMode } = useContext(themeContext);

  return (
    <>
      <Grid stackable className={`portfolio ${darkMode ? 'portfolio-dark' : ''}`} divided="vertically">
        <Grid.Row centered>
          <Header textAlign='center' as='h4' size='huge' className={darkMode ? 'font-white' : 'blue'}>
            {lang.myPortfolio}
          </Header></Grid.Row>
        <Grid.Row columns={3} centered divided>
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
        <Grid.Row columns={3} centered divided>
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
