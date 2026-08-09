import NavBar from './components/NavBar/NavBar'
import FinalSection from './sections/FinalSection/FinalSection';
import Footer from './sections/Footer/Footer';
import HomeSection from './sections/HomeSection/HomeSection'
import JobSection from './sections/JobSection/JobSection';
import ViewSection from './sections/ViewSection/ViewSection';
import TechSection from './sections/TechSection/TechSection';
import CardFooter from './sections/CardFooter/CardFooter';


function App() {
  return (
    <>
      <NavBar />

      <div id="inicio"><HomeSection /></div>

      <div id="analise"><ViewSection /></div>

      <div id="vagas"><JobSection /></div>

      <div id="tecnologias"><TechSection /></div>

      <FinalSection />

      <CardFooter />

      <Footer />

    </>
  )
};

export default App;
