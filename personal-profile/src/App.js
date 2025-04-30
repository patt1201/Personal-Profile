import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import Projects from './components/project';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="./" element={<Home />} />
            <Route path="./about" element={<About />} />
            <Route path="./education" element={<Education />} />
            <Route path="./projects" element={<Projects />} />
            <Route path="./contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;