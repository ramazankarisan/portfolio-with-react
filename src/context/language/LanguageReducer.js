export const languageReducer = (state, action) => {

  if (action.payload === "TUR") {
    return {
      hireMe: 'İletişim',
      webDeveloper: 'Web Geliştiricisi',
      home: 'Anasayfaportfolio',
      portfolio: 'Çalışmalar',
      myskills: 'Yeteneklerim',
      berlin: `Berlin'de yasiyor`,
      service: 'Servis Standartları',
      quality: 'Kalite',
      secure: 'Güvenli ve Hızlı',
      satisfaction: 'Memnuniyet',
      top: 'yukarı',
      myPortfolio: 'Çalışmalarım',
      projectName: 'Proje İsmi',
      clickForMore: 'Fazlası için Tıkla!',
      contact: 'İletişim',
      fname: 'Adınız',
      email: 'E-Mail Adresiniz',
      message: 'Mesajınız',
      submit: 'Gönder',
    }
  } else if (action.payload === "EN") {
    return {
      hireMe: 'Hire Me',
      webDeveloper: 'Web Developer',
      home: 'Home',
      portfolio: 'Portfolio',
      myskills: 'My Skills',
      berlin: 'Living in Berlin',
      service: 'Service Standarts',
      quality: 'Quality',
      secure: 'Secure and Fast',
      satisfaction: 'Satisfaction',
      top: 'top',
      myPortfolio: 'My Portfolio',
      projectName: 'Project Name',
      clickForMore: 'Click for More!',
      contact: 'Contact',
      fname: 'First Name',
      email: 'Your  E-Mail',
      message: 'Your Message',
      submit: 'Submit'
    }
  }

}