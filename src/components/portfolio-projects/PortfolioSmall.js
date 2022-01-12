import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Header } from 'semantic-ui-react'
import languageContext from '../../context/language/LanguageContext'
import themeContext from '../../context/theme/themeContext'
import CommentListProject from './projects/Project1'
import BuyCartRedux from './projects/Project2'


const PortfolioSmall = () => {
  const { lang } = useContext(languageContext);
  const { darkMode } = useContext(themeContext);

  return (
    <>
      <Grid stackable divided="vertically" className={`portfolioSmall ${darkMode ? 'intro-dark' : ''}`}>

        <Grid.Row centered textAlign='center' >
          <Grid.Column width={4}>
            <Header textAlign='center' as='h4' size='huge' color='orange'>
              {lang.myPortfolio}
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered textAlign='center' divided >
          <Grid.Column textAlign='center' width={5} >

            <CommentListProject />
          </Grid.Column>
          <Grid.Column textAlign='center' width={5}  >
            <BuyCartRedux />
          </Grid.Column>

        </Grid.Row>

        <Grid.Row centered>
          <Link to="/portfolio"> <Button color='orange' size='huge'>{lang.clickForMore}</Button></Link>
        </Grid.Row>

      </Grid>
    </>
  )
}

export default PortfolioSmall
