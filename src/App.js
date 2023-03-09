import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from './Components/Form';
import Get from './Components/Get';
import Update from './Components/Update';
import Navigation from './Components/Navigation';
import NoPage from './Components/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Form />} />
          <Route path="get" element={<Get />} />
          <Route path="update" element={<Update />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
