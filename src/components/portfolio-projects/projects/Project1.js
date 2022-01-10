import React, { useContext } from 'react'
import { Button, Card, Dimmer, Header, Icon, Image } from 'semantic-ui-react'
import languageContext from '../../../context/language/LanguageContext'
import homeContext from '../../../context/sidebar/homeContext'
import themeContext from '../../../context/theme/themeContext'
import projectPhoto from '../../../images/commentAndPost.png'

const CommentListProject = () => {
  const { handleShow, handleHide, state } = useContext(homeContext);
  const { lang } = useContext(languageContext);
  const { darkMode } = useContext(themeContext);

  const showDimmer = state.project1;
  const name = 'project1'
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
      <Card centered className={`cardProject ${darkMode ? 'back-black' : ''}`}  >
        <div onMouseEnter={() => handleShow(name)} onMouseLeave={() => handleHide(name)}>
          <Dimmer.Dimmable
            name="project1"
            as={Image}
            dimmed={showDimmer}
            dimmer={{ active: showDimmer, content }}
            size='medium'
            src={projectPhoto}
            style={{ opacity: darkMode ? 0.2 : 1 }}
          />
        </div>
        <Card.Content textAlign="center" >
          <Card.Header className={darkMode ? 'font-white' : ''}  >{lang.projectName}</Card.Header>

        </Card.Content>
        <Card.Content extra textAlign='center'>

          <Button.Group >
            <Button animated positive>
              <Button.Content visible>Live Demo</Button.Content>
              <a href='https://post-commentlist.netlify.app/' target='_blank' rel="noreferrer"> <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content></a>
            </Button>
            <Button.Or />
            <Button animated color="orange">
              <Button.Content visible>GitHub</Button.Content>
              <a href='https://github.com/ramazankarisan/commentList' target='_blank' rel="noreferrer"><Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content></a>
            </Button>
          </Button.Group>

        </Card.Content>
      </Card>
    </>
  )
}

export default CommentListProject
