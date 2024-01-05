import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Services from './pages/Services'
import Projects from './pages/Projects';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import NotFound from './components/not-found/NotFound';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
