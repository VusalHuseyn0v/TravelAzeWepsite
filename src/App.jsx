import { Route, Routes, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Ismayilli from './Pages/Cities/Ismayilli'
import Lenkeran from './Pages/Cities/Lenkeran'
import Lerik from './Pages/Cities/Lerik'
import Qax from './Pages/Cities/Qax'
import Qebele from './Pages/Cities/Qebele'
import Quba from './Pages/Cities/Quba'
import Qusar from './Pages/Cities/Qusar'
import Seki from './Pages/Cities/Seki'
import Zaqatala from './Pages/Cities/Zaqatala'
import DestinationDetails from './components/DestinationDetails';
import NoPage from './Pages/NoPage';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <Navbar scrollToTop={() => homeRef.current?.scrollIntoView({ behavior: 'smooth' })} />

      <div ref={homeRef}>
        <Routes>
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path='/destination/1' element={<Qax />} />
          <Route path='/destination/2' element={<Seki />} />
          <Route path='/destination/3' element={<Zaqatala />} />
          <Route path='/destination/4' element={<Qusar />} />
          <Route path='/destination/5' element={<Quba />} />
          <Route path='/destination/6' element={<Ismayilli />} />
          <Route path='/destination/7' element={<Qebele />} />
          <Route path='/destination/8' element={<Lenkeran />} />
          <Route path='/destination/9' element={<Lerik />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
