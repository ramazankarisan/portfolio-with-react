import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import languageContext from '../context/language/LanguageContext'
import themeContext from '../context/theme/themeContext'
import homeImg from '../images/programming.svg'

const Intro = () => {
  const { lang } = useContext(languageContext);
  const { darkMode } = useContext(themeContext);

  return (
    <>
      <Grid className={`intro ${darkMode ? 'intro-dark' : ''}`} id="landingPage" >
        <Grid.Row className='homeImg' centered>
          <Grid.Column width={4}>
            <Image src={homeImg} circular size='massive'></Image>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered >
          <Grid.Column width={4}  >
            <div className='ui grid centered headerIntro' >
              <h1 className={` ${darkMode ? 'font-white' : ''}`}>Ramazan Karisan</h1>
              <h3 className={` ${darkMode ? 'font-white' : ''}`}>{lang.webDeveloper}</h3>
            </div>
            <div className='ui grid centered'><a href="#aboutMe" ><FontAwesomeIcon icon={faAngleDoubleDown} size="5x"
            /></a></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Intro
