
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Card, Grid, Header, Icon, Image, List, Progress, Segment } from 'semantic-ui-react'
import languageContext from '../context/language/LanguageContext'
import themeContext from '../context/theme/themeContext'
import avatar from '../images/avatar.svg'

const AboutMe = () => {
  const { lang } = useContext(languageContext);
  const { darkMode } = useContext(themeContext);

  // className={` ${darkMode ? 'font-white' : ''}`}
  return (
    <>
      <Grid className={`aboutMe ${darkMode ? 'aboutMe-dark' : ''}`} stackable>
        <Grid.Row centered>
          <Grid.Column width={6} >
            <Card centered className={`aboutMeCard ${darkMode ? 'aboutMeCard-dark' : ''}`} id="aboutMe">
              <Image src={avatar} className='avatarImg' size="medium" />
              <Card.Content >
                <Card.Header className={` ${darkMode ? 'font-white' : ''}`}>Ramazan Karisan </Card.Header>
                <Card.Meta className={` ${darkMode ? 'font-white' : ''}`}>{lang.berlin}</Card.Meta>
                <Card.Description className={` ${darkMode ? 'font-white' : ''}`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, dolorem architecto! Facere, illum saepe architecto dignissimos dolore animi temporibus atque ipsum voluptas rem cupiditate sapiente. Et, unde ipsa! Ea, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati ratione porro et, non quo asperiores aliquid atque? Nihil in, atque dignissimos nulla deleniti similique optio assumenda earum illum inventore.
                </Card.Description>
              </Card.Content>
              <Card.Content extra >
                <Link to="contact" className={` ${darkMode ? 'font-white' : ''}`}>
                  <Icon name='mail' />
                  {lang.getInTouch}
                </Link>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={6} className='skillsAndService' >

            <Segment className={` ${darkMode ? 'back-black white-border ' : ''}`} >
              <Header as='h2' textAlign='center' color='teal'>
                <Icon name='gem' /> {lang.myskills}
                {/* <Header.Content>My Skills</Header.Content> */}
              </Header>
              <Progress percent={90} color='yellow' active className={` ${darkMode ? 'inverted' : ''}`} >
                Html-CSS
              </Progress>
              <Progress percent={87} color='red' active className={` ${darkMode ? 'inverted' : ''}`} >
                JavaScript
              </Progress>
              <Progress percent={85} color='blue' active className={` ${darkMode ? 'inverted' : ''}`}>
                React
              </Progress>
              <Progress percent={80} color='violet' active className={` ${darkMode ? 'inverted' : ''}`} >
                MongoDB
              </Progress>
            </Segment>
            <Segment textAlign='center'
              className={` ${darkMode ? 'back-black white-border ' : ''}`}
            >
              <Header as='h2' textAlign='center' color='teal'>
                <Icon name='fire' /> {lang.service}
                {/* <Header.Content>My Skills</Header.Content> */}
              </Header>
              <List animated relaxed celled verticalAlign='middle' size='massive' className={`serviceList ${darkMode ? 'inverted' : ''}`} >
                <List.Item>

                  <List.Content >
                    <List.Header > <Icon name='star' color='yellow' /> {lang.quality}</List.Header>
                    <List.Description className='listDesc' >
                      Lorem ipsum
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>

                  <List.Content >
                    <List.Header> <Icon name='user secret' color='grey' /> {lang.secure}</List.Header>
                    <List.Description className='listDesc'>
                      Lorem ipsum
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>

                  <List.Content>
                    <List.Header> <Icon name='like' color='red' /> {lang.satisfaction}</List.Header>
                    <List.Description className='listDesc'>
                      Lorem ipsum
                    </List.Description>
                  </List.Content>

                </List.Item>
              </List>
            </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  )
}

export default AboutMe
