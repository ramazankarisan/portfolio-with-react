import '../src/style/App.scss';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import PortfolioSmall from './components/portfolio-projects/PortfolioSmall';
import ContactSmall from './components/contact/ContactSmall';
import Footer from './components/Footer';



function App() {

  return (
    <>

      <Navbar />
      <Home />
      <PortfolioSmall />
      <ContactSmall />
      <Footer />


    </>
  );
}

export default App;
