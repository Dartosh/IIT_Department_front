import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './lessns/App';
import Home from '../old/les2';
import Contacts from '../old/les5';
import Posts from '../old/les6';
import Post from '../old/les4';
import {BrowserRouter, Route, Switch} from "react-router-dom";

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/contacts' component={Contacts} />
                <Route exact path='/posts' component={Posts} />
                <Route path='/posts/:id' component={Post} />
                <Route path='*' component={Error} />
            </Switch>
        </App>
    </BrowserRouter>
), document.getElementById('root'));

reportWebVitals();
