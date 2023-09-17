import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
        </Routes>
    </>
  )
}

export default App
