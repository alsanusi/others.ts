import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Pages
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
