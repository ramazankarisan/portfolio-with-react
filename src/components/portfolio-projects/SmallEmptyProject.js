import React, { useContext } from 'react'
import { Button, Card, Dimmer, Header, Icon, Image } from 'semantic-ui-react'
import homeContext from '../../context/sidebar/homeContext'
import projectPhoto from '../../images/commentAndPost.png'

const SmallEmptyProject = () => {
  const { handleShow, handleHide, state } = useContext(homeContext);
  const showDimmer = state.active;
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
      <Card centered >
        <Dimmer.Dimmable
          as={Image}
          dimmed={showDimmer}
          dimmer={{ active: showDimmer, content }}
          onMouseEnter={() => handleShow()}
          onMouseLeave={() => handleHide()}
          size='medium'
          src={projectPhoto}
        />

        <Card.Content>
          <Card.Header>Project Name</Card.Header>

        </Card.Content>
        <Card.Content extra>

          <Button.Group>
            <Button animated positive>
              <Button.Content visible>Live Demo</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
            <Button.Or />
            <Button animated color="orange">
              <Button.Content visible>GitHub</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Button.Group>

        </Card.Content>
      </Card>
    </>
  )
}

export default SmallEmptyProject
