import '../src/style/App.scss';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import PortfolioSmall from './components/portfolio-projects/PortfolioSmall';
import ContactSmall from './components/contact/ContactSmall';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import PortfolioBig from './components/portfolio-projects/PortfolioBig';
import MenuHome from './components/MenuHome';
import Contact from './components/contact/Contact';
import TopBtn from './components/TopBtn';
import LanguageState from './context/language/LanguageState';



function App() {

  return (
    <>

      <Navbar />
      <MenuHome />
      <Routes>
        <Route path="/" element={<><Home /> <PortfolioSmall />
          <ContactSmall /></>} />
        <Route path="portfolio" element={<PortfolioBig />} />
        <Route path="contact" element={<Contact />} />

      </Routes>

      <TopBtn />
      <Footer />


    </>
  );
}

export default App;
