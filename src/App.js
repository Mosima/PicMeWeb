import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import HomePage from './App/screens/HomePage';
import NavBar from './App/screens/Navbar';
import Navbar from './App/screens/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Navbar />
          <Route  path="/" exact component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
