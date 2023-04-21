import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
// import axios from 'axios';
import './App.css';
import Feelings from '../Feelings/Feelings.jsx';
import Understanding from '../Understanding/Understanding.jsx'


function App() {

  return (


    <div className='App'>

      <Router>
        <Route exact path="/">
          <Feelings />
        </Route>

        <Route exact path="/understanding">
          <Understanding />
        </Route>


        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </Router>
    </div>
    
  );
}

export default App;
