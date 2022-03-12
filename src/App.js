import './App.css';
//Components
import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/carrousel/Carrousel';
import Featureds from './components/featureds/Featureds';
import RecentWorks from './components/RecentWorks/RecentWorks';
import LastGroup from './components/lastGroup/LastGroup';
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Carrousel />
      <Featureds />
      <RecentWorks />
      <LastGroup />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
