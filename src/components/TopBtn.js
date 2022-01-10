import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import languageContext from '../context/language/LanguageContext'

const TopBtn = () => {
  const { lang } = useContext(languageContext);
  return (
    <>
      <div className="top-button">
        <a href="#home">
          <FontAwesomeIcon icon={faChevronUp} />
          <p>{lang.top}</p>
        </a>
      </div>
    </>
  )
}

export default TopBtn
