import React from 'react';
import { BrowserRouter as Router,Switch ,Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Post from './containers/Post';
import Header from './components/header';

function App() {
  return (
    
    <main>
    <section>
      <Header/>
      <Router>
        <div>
          <Switch>
            <Route path="/:subject/:id">
              <Post />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </section>
  </main>
 
  );
}

export default App;
