
import React from 'react'
import { Card, Grid, Header, Icon, Image, List, Progress, Segment, Step } from 'semantic-ui-react'
import avatar from '../images/avatar.svg'

const AboutMe = () => {
  return (
    <>
      <Grid className='aboutMe' stackable>
        <Grid.Row centered>
          <Grid.Column width={5}>
            <Card className='aboutMeCard' id="aboutMe">
              <Image src={avatar} className='avatarImg' size="medium" />
              <Card.Content>
                <Card.Header>Ramazan Karisan </Card.Header>
                <Card.Meta>Living in Berlin</Card.Meta>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, dolorem architecto! Facere, illum saepe architecto dignissimos dolore animi temporibus atque ipsum voluptas rem cupiditate sapiente. Et, unde ipsa! Ea, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati ratione porro et, non quo asperiores aliquid atque? Nihil in, atque dignissimos nulla deleniti similique optio assumenda earum illum inventore.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='mail' />
                  Get in touch
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={6} >

            <Segment  >
              <Header as='h2' textAlign='center' color='teal'>
                <Icon name='gem' /> My Skills
                {/* <Header.Content>My Skills</Header.Content> */}
              </Header>
              <Progress percent={90} color='yellow' active >
                Html-CSS
              </Progress>
              <Progress percent={87} color='red' active  >
                JavaScript
              </Progress>
              <Progress percent={85} color='blue' active>
                React
              </Progress>
              <Progress percent={80} color='violet' active >
                MongoDB
              </Progress>
            </Segment>
            <Segment textAlign='center' >
              <Header as='h2' textAlign='center' color='teal'>
                <Icon name='fire' /> Service Standarts
                {/* <Header.Content>My Skills</Header.Content> */}
              </Header>
              <List animated relaxed celled verticalAlign='middle' size='massive' className='serviceList'>
                <List.Item>

                  <List.Content>
                    <List.Header> <Icon name='star' color='yellow' /> Quality</List.Header>
                    <List.Description className='listDesc'>
                      Lorem ipsum
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>

                  <List.Content >
                    <List.Header> <Icon name='user secret' color='grey' /> Secure and Fast</List.Header>
                    <List.Description className='listDesc'>
                      Lorem ipsum
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item>

                  <List.Content>
                    <List.Header> <Icon name='like' color='red' /> Satisfaction</List.Header>
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
