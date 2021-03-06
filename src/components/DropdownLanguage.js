import React, { useContext } from 'react'
import languageContext from '../context/language/LanguageContext';



const DropdownLanguage = () => {
  const { selectLang } = useContext(languageContext);
  return (
    <>
      <select name="languages" defaultValue={'EN'} className='selectLanguage' onChange={(e) => {
        selectLang(e.target.value)

      }} >
        <option value="">-- choose language--</option>
        <option value="EN">🇬🇧 English</option>
        <option value="GER">🇩🇪 German</option>
        <option value="TUR">🇹🇷 Turkish</option>

      </select>

    </>
  )
}

export default DropdownLanguage
