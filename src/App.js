import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Pages
import Index from './pages/Index';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
