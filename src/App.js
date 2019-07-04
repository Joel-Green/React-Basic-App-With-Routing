import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Middle1 from './components/Middle1';
import Middle2 from './components/Middle2';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      {/* here we define the paths for the routes */}
      <Route exact path='/' component={Middle1} />
      <Route path='/middle2' component={Middle2} />

      <Footer />
    </Router>
  );
}

export default App;
