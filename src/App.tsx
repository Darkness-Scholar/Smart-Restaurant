import React from 'react';
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Home } from "./pages"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/:restaurant/:branch" element={<Home />} />
      <Route path="/" element={<Landing />}/>
    </Routes>

  </BrowserRouter>
}
export default App;
