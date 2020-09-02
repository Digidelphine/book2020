import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Navbar from './composants/Navbar/Navbar';
import About from './composants/About/About';
import Projects from './composants/Projects/Projects';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
              <Switch>
                <Route exact path="/about" component={ About } />
                <Route path="/projects" component={ Projects } />
              </Switch>
        </Router>
    </div>
  )
}

export default App