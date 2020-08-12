import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Knowledges from './Pages/Knowledges'
import Portfolio from './Pages/Portfolio'
import PageNotFound from './Pages/PageNotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/knowledges" component={Knowledges} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
