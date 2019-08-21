import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import InputScreen from './containers/InputScreen/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route exact path="/add-new-book" component={InputScreen} />
      </Router>
    </div>
  );
}

export default App;
