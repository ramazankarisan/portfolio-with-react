import React from 'react'
import { Button, Form, Grid, Header, Message, Segment, TextArea } from 'semantic-ui-react'

const ContactSmall = () => {

  const error = true
  return (
    <>
      <Grid stackable className='conctactSmall' divided="vertically" >
        <Grid.Row centered textAlign='center'  >
          <Grid.Column width={8} style={{ 'padding-top': 40 }}><Header textAlign='center' as='h1' style={{ 'font-size': '3rem' }} color='teal'>
            Contact
          </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2} divided>
          <Grid.Column width={6} >
            <Segment>
              <Form className=''>
                <Form.Field>
                  <label for="fname">First Name</label>
                  <input name='fname' type="text" placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                  <label for="email">Your E-mail</label>
                  <input name='email' type="email" placeholder='john-doe@gmail.com' />
                </Form.Field>
                <Message
                  error
                  header='Action Forbidden'
                  content='You can only sign up for an account once with a given e-mail address.'
                />
                <Form.Field>
                  <label for="message">Your Message</label>
                  <TextArea name="message" placeholder='Your message' rows={5} />
                </Form.Field>
                <Button>Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </>
  )
}

export default ContactSmall
