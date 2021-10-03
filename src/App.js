import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/home';
import ExperienceList from './components/experience/experienceList';
import Header from './components/header';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <Header></Header>
      <main className={'container d-flex flex-column'}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/experience">
            <ExperienceList />
          </Route>
        </Switch>
      </main>
      <Contact></Contact>
    </Router>
  );
}

export default App;
