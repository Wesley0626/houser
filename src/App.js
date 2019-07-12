import React from 'react';
import './App.css';
import './reset.css'
import {HashRouter} from 'react-router-dom'

import Header from './Components/Header/Header'
import House from './Components/House/House'
import routes from './routes'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header />
      <House />
      {routes}
    </div>
    </HashRouter>
  );
}

export default App;
