import '../src/style/App.scss';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import PortfolioSmall from './components/portfolio-projects/PortfolioSmall';
import ContactSmall from './components/contact/ContactSmall';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import PortfolioBig from './components/portfolio-projects/PortfolioBig';



function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /> <PortfolioSmall />
          <ContactSmall /></>} />
        <Route path="portfolio" element={<PortfolioBig />} />
      </Routes>


      <Footer />


    </>
  );
}

export default App;
