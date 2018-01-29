import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './Signup';
import Login from './Login';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Dashboard from './Dashboard';

ReactDOM.render(
	<BrowserRouter>
        <div>
            <Switch>
                <Route path="/Signup" component={Signup}/>
                <Route path="/Login" component={Login}/>
                <Route path="/" component={App}/>
                <Route path="/Dashboard" component={Dashboard}/>
            </Switch>
        </div>
    </BrowserRouter>,
	 document.querySelector('#root')
	 );
registerServiceWorker();