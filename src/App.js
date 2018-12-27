import React, { Component } from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Routes from './Routes';

class App extends Component {
  render() {
    library.add(faBookmark, faTimesCircle)
    return (
      <div className="App">
        <header className="App-header">
          <Routes />
        </header>
      </div>
    );
  }
}

export default App;
