import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import HomePage from './App/screens/HomePage';
import Navbar from './App/screens/Navbar';
import Profile from './App/screens/Profile';
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar />
          <Route  path="/" exact component={HomePage} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
