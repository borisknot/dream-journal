import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import DreamsEditPage from './pages/DreamsEditPage';
import DreamsNewPage from './pages/DreamsNewPage';
import DreamsPage from './pages/DreamsPage';
import DreamShowsPage from './pages/DreamsShowPage';

import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="App">
      <Nav className="flex-column">
        <Link className="nav-link" to="/">Dreams</Link>
        <Link className="nav-link" to="/dreams/new">New dream</Link>
      </Nav>

      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<DreamsPage />} />
          <Route path="/dreams/new" element={<DreamsNewPage />} />
          <Route path="/dreams/:id/edit" element={<DreamsEditPage />} />
          <Route path="/dreams/:id/show" element={<DreamShowsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
