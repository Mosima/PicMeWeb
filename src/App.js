import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import HomePage from './App/screens/HomePage';
import Navbar from './App/screens/Navbar';
import Login from './App/screens/Login';
import Register from './App/screens/Register';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Navbar />
          <Route  path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
