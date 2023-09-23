import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/me-portfolio/" element={<Home />} />
          <Route path='/me-portfolio/about-me' element={<AboutMe />} />
          <Route path='/me-portfolio/projects' element={<Projects />} />
          <Route path='/me-portfolio/contact-me' element={<Contact />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
