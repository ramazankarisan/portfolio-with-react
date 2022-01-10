import React, { useContext } from 'react'
import { Button, Card, Dimmer, Header, Icon, Image } from 'semantic-ui-react'
import homeContext from '../../../context/sidebar/homeContext'
import themeContext from '../../../context/theme/themeContext'
import projectPhoto from '../../../images/add-person.png'

const AddPersonEdit = () => {
  const { handleShow, handleHide, state } = useContext(homeContext);
  const { darkMode } = useContext(themeContext);

  const active = state.project4;
  const name = 'project4'

  return (
    <>
      <Card centered className={darkMode ? 'back-black' : ''}>
        <div onMouseEnter={() => handleShow(name)} onMouseLeave={() => handleHide(name)}>
          <Dimmer.Dimmable
            as={Image}
            dimmed={active}
            style={{ opacity: darkMode ? 0.2 : 1 }}
          >
            <Image size="medium" src={projectPhoto} />
            <Dimmer active={active}>
              <div>
                <Header as='h2' inverted>
                  Project Name...
                </Header>

                <p>Details...</p>
              </div>
            </Dimmer>
          </Dimmer.Dimmable>
        </div>
        <Card.Content textAlign="center">
          <Card.Header className={darkMode ? 'font-white' : ''}>Project Name</Card.Header>

        </Card.Content>
        <Card.Content extra textAlign='center'>

          <Button.Group >
            <Button animated positive>
              <Button.Content visible>Live Demo</Button.Content>
              <a href='https://person-add-edit.netlify.app/' target='_blank' rel="noreferrer"><Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content></a>
            </Button>
            <Button.Or />
            <Button animated color="orange">
              <Button.Content visible>GitHub</Button.Content>
              <a href='https://github.com/ramazankarisan/person-add-edit' target='_blank' rel="noreferrer"> <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content></a>
            </Button>
          </Button.Group>

        </Card.Content>
      </Card>
    </>
  )
}

export default AddPersonEdit
