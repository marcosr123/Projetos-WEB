import React, { Component } from 'react';
import Header from './components/header/header'
import Main from './main';
import Foot from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Foot /> 
      </div>
    );
  }
}

export default App;