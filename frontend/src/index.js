import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NotFound from './pages/NotFound';
import Categoria from './pages/Categoria'
import Login from './pages/Login'

const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/Categoria" component={Categoria} />
                <Route path="/Login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));
serviceWorker.unregister();