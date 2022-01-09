import React, { useContext } from 'react'
import { Grid } from 'semantic-ui-react'
import homeContext from '../context/sidebar/homeContext';
import AboutMe from './AboutMe';
import Intro from './Intro';
import MenuHome from './MenuHome';


const Home = () => {

  const { state } = useContext(homeContext)

  return (
    <>
      <Grid stackable  >
        <Grid.Row  >
          <Grid.Column  >
            <MenuHome />
            <Intro />
            <AboutMe />

          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  )
}

export default Home
