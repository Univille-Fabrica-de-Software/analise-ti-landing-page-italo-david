import NavBar from './components/NavBar/navBar'
import CardsFooter from './pages/CardsFooter/cardsFooter';
import Footer from './pages/Footer/footer';
import HomeSection from './pages/HomeSection/homeSection'
import JobSection from './pages/JobSection/jobSection';
import ViewSection from './pages/SinteseSection/viewSection';
import TechSection from './pages/TechSection/techSection';

function App() {
  return (
    <>
        <NavBar />

        <HomeSection />

        <ViewSection />

        <JobSection />

        <TechSection />

        <CardsFooter />

        <Footer />

    </>
  )
};

export default App;
