import React, { useContext } from 'react'
import languageContext from '../context/language/LanguageContext';



const DropdownLanguage = () => {
  const { setLang, selectLang } = useContext(languageContext);
  return (
    <>
      <select name="languages" className='selectLanguage' onChange={(e) => {
        selectLang(e.target.value)
        // setLang(e.target.value)
      }} >
        <option value="">-- choose language--</option>
        <option selected value="EN">English</option>
        <option value="GER">  German</option>
        <option value="TUR"> Turkish</option>

      </select>

    </>
  )
}

export default DropdownLanguage
