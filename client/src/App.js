import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";


function App() {

  return (
    <BrowserRouter>
      <Container maxidh="lg">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/auth' exact element={<Auth/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
