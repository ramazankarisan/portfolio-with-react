import React, { useContext } from 'react'
import { Button, Form, Grid, Header, Segment, TextArea } from 'semantic-ui-react'
import languageContext from '../../context/language/LanguageContext';
import themeContext from '../../context/theme/themeContext';

const ContactSmall = () => {
  const { lang } = useContext(languageContext);
  const { darkMode } = useContext(themeContext);

  return (
    <>
      <Grid stackable

        className={`contactSmall ${darkMode ? 'aboutMe-dark' : ''}`}
        divided="vertically" >
        <Grid.Row centered textAlign='center'  >
          <Grid.Column width={8} style={{ paddingTop: 40 }}><Header textAlign='center' as='h1' style={{ fontSize: '3rem' }} color='teal'>
            {lang.contact}
          </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered columns={2} divided>
          <Grid.Column width={6} >
            <Segment className={darkMode ? 'inverted' : ''} >
              <Form className={darkMode ? 'inverted' : ''}>
                <Form.Field>
                  <label htmlFor="fname">{lang.fname}</label>
                  <input name='fname' type="text" placeholder={lang.fname} />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="email">{lang.email}</label>
                  <input name='email' type="email" placeholder={lang.email} />
                </Form.Field>

                <Form.Field>
                  <label htmlFor="message">{lang.message}</label>
                  <TextArea name="message" placeholder={lang.message} rows={5} />
                </Form.Field>
                <Button>{lang.submit}</Button>
              </Form>
            </Segment>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </>
  )
}

export default ContactSmall
