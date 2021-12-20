import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header, Footer, Home } from './layout';
import Pokemon from './pokemon/Pokemon';
import Calculator from './calculator/Calculator';

export default function App() {
  return (
    <div className="container mx-auto px-4 lg:max-w-5xl h-full flex flex-col">
      <Header />
      <Router>
        <div
          id="content"
          className="grid grid-cols-[150px_1fr] gap-4 flex-grow">
          <div id="sidebar" className="border-r pr-4">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/pokemon">Pokemon</Link>
                </li>
                <li>
                  <Link to="/calculator">Calculator</Link>
                </li>
              </ul>
            </nav>
          </div>
          <main className="p-4">
            <Routes>
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/pokemon" element={<Pokemon />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
