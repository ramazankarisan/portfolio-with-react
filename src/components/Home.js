import React from 'react'
import { Grid } from 'semantic-ui-react'
import AboutMe from './AboutMe';
import Intro from './Intro';



const Home = () => {


  return (
    <>
      <Grid stackable  >
        <Grid.Row  >
          <Grid.Column  >

            <Intro />
            <AboutMe />

          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  )
}

export default Home
