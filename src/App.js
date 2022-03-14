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

function App() {

ReactDOM.render(
  <React.StrictMode>
       <Router>
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
}

export default App;
