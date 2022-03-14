import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Soccer from "./components/pages/Soccer";
import Basketball from "./components/pages/Basketball";
import Boxing from "./components/pages/Boxing";
import Yoga from "./components/pages/Yoga";

function App() {

ReactDOM.render(
  <React.StrictMode>
       <Router>
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/soccer" element={<Soccer />} />
            <Route path="/boxing" element={<Boxing />} />
            <Route path="/yoga" element={<Yoga />} />
            <Route path="/basketball" element={<Basketball />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
}

export default App;
