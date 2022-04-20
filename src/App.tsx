import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import DreamsEditPage from './pages/DreamsEditPage';
import DreamsNewPage from './pages/DreamsNewPage';
import DreamsPage from './pages/DreamsPage';
import DreamShowsPage from './pages/DreamsShowPage';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ApplicationLayout from './layouts/ApplicationLayout';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand={false} sticky="top">
        <Navbar.Brand>Dream Journal</Navbar.Brand>
      </Navbar>

      <ApplicationLayout>
        <Nav className="justify-content-center">
          <Link className="btn btn-secondary mx-4" to="/">Dreams</Link>
          <Link className="btn btn-success" to="/dreams/new">New dream</Link>
        </Nav>

        <main className="container">
          <Routes>
            <Route path="/" element={<DreamsPage />} />
            <Route path="/dreams/new" element={<DreamsNewPage />} />
            <Route path="/dreams/:id/edit" element={<DreamsEditPage />} />
            <Route path="/dreams/:id/show" element={<DreamShowsPage />} />
          </Routes>
        </main>
      </ApplicationLayout>
    </div>
  );
}

export default App;
