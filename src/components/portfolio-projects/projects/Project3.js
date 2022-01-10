import React, { useContext } from 'react'
import { Button, Card, Dimmer, Header, Icon, Image } from 'semantic-ui-react'
import homeContext from '../../../context/sidebar/homeContext'
import projectPhoto from '../../../images/movieApiFetch.png'

const MovieApiFetch = () => {
  const { handleShow, handleHide, state } = useContext(homeContext);
  const showDimmer = state.project3;
  const name = 'project3'
  const content = (
    <div>
      <Header as='h2' inverted>
        Project Name
      </Header>

      <p>Details...</p>
    </div>
  )
  return (
    <>
      <Card centered className='cardProject' >
        <div onMouseEnter={() => handleShow(name)} onMouseLeave={() => handleHide(name)}>
          <Dimmer.Dimmable
            name="project1"
            as={Image}
            dimmed={showDimmer}
            dimmer={{ active: showDimmer, content }}


            size='medium'
            src={projectPhoto}
            style={{ 'height': 205 }}
          />
        </div>
        <Card.Content textAlign="center">
          <Card.Header>Project Name</Card.Header>

        </Card.Content>
        <Card.Content extra textAlign='center'>

          <Button.Group >
            <Button animated positive>
              <Button.Content visible>Live Demo</Button.Content>
              <a href='https://movie-api-fetch.netlify.app/' target='_blank' rel="noreferrer">
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content></a >
            </Button>
            <Button.Or />
            <Button animated color="orange">
              <Button.Content visible>GitHub</Button.Content>
              <a href='https://github.com/ramazankarisan/movie-api-fetch' target='_blank' rel="noreferrer"><Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content></a>
            </Button>
          </Button.Group>

        </Card.Content>
      </Card>
    </>
  )
}

export default MovieApiFetch
