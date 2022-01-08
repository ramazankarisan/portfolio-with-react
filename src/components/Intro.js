import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image } from 'semantic-ui-react'
import homeImg from '../images/programming.svg'

const Intro = () => {
  return (
    <>
      <Grid className='intro' >
        <Grid.Row className='homeImg' centered>
          <Grid.Column width={4}>
            <Image src={homeImg} circular size='massive'></Image>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered >
          <Grid.Column width={4}  >
            <div className='ui grid centered headerIntro' >
              <h1>Ramazan Karisan</h1>
              <h3>Web Developer</h3>
            </div>
            <div className='ui grid centered'><Link to="/" ><FontAwesomeIcon icon={faAngleDoubleDown} size="5x"
            /></Link></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Intro
