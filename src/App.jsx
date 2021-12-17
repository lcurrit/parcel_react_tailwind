import React from 'react';
import { Header, Footer } from './layout';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pokemon from './pokemon/Pokemon';

export default function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Router>
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
        <Routes>
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}
