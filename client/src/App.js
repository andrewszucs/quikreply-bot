import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Navbar, Sidebar } from './Navigation'
import { Main } from './Main'
import { Conversations } from './Conversations'
import { Messages } from './Messages'
import { Dashboard } from './Dashboard'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar 
            brand="QuikReply Analytics"
          />
          <Sidebar />
          <Main>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/conversations" component={Conversations} />
            <Route path="/conversations/:id" component={Messages}/>
          </Main>
        </div>
      </Router>
    );
  }
}

export default App;