import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import { Works, Contact } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.svg';
import { ReactSVG } from 'react-svg'

const App = () => (
<Router>
    <div className="App">
      <header className="App-header">
          <nav>
              <div className="header-items">
                  <div className="nav topnav left-nav">
                      <ul>
                        <li><NavLink to='/' activeClassName="link-active" exact={true}>Works</NavLink></li>
                      </ul>
                  </div>
                  <div className="logo">
                      <ReactSVG src={logo} />
                  </div>
                  <div className="nav topnav right-nav">
                      <ul>
                        <li><NavLink to='/contact' activeClassName="link-active">Contact</NavLink></li>
                      </ul>
                  </div>
              </div>                
          </nav>
      </header>
    </div>
    <Switch>
      <Route exact={true} path="/" component={Works} />
      <Route path="/works" component={Works} />
      <Route path="/contact" component={Contact} />
    </Switch>
</Router>
);

export default App;