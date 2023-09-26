import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact-me' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
};

export default App;
