import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Home from './components/tasks/Home';

ReactDOM.render(
  <Router>
    <div id="app">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" >Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">Board</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item">Action</a>
                  <a class="dropdown-item">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> 
          </div>
        </nav>
      </div>        
      </div>
        <main class="py-4">
          <div>
            <Route exact path='/' component={App} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/create' component={Create} />
            <Route path='/show/:id' component={Show} />
          </div>
        </main>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
