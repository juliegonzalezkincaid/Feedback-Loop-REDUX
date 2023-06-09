import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
// import axios from 'axios';
import './App.css';
import Feelings from '../Feelings/Feelings.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Header from '../Header/Header.jsx';
import Support from '../Support/Support.jsx';
import Review from '../Review/Review.jsx';
import Comments from '../Comments/Comments.jsx';
import Success from '../Success/Success.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9FC131',
    },
   
  }

});


function App() {

  return (

    <ThemeProvider theme= {theme} >
    <div 
    className='App'>
      <Header />
      <Router>

        <Route exact path="/">
          <Header />
        </Route>

        <Route exact path="/feelings">
          <Feelings />
        </Route>

        <Route exact path="/understanding">
          <Understanding />
        </Route>

        <Route exact path= "/support">
          <Support />
        </Route>

        <Route exact path="/review">
          <Review />
        </Route>

        <Route exact path="/comments">
          <Comments />
        </Route>

        <Route exact path="/success">
          <Success />
        </Route>






        <footer className='App-footer'>
          <h5 className='App-title'>Feedback!</h5>
          <h4>Don't forget it!</h4>
        </footer>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
