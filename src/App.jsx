import React from 'react';
import { Header, Footer } from './layout';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Pokemon from './pokemon/Pokemon';

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
              </ul>
            </nav>
          </div>
          <main className="p-4">
            <Routes>
              <Route path="/pokemon" element={<Pokemon />} />{' '}
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
