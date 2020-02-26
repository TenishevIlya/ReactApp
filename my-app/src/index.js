import React from 'react';
import ReactDOM from 'react-dom';
// import '../src/scripts/index.css';
import './css/logIn.css';
import './css/registrate.css';
import MyForm from '../src/scripts/components/LogInComponets/LogIn.jsx';
import RegistrateForm from './scripts/components/Registrate/RegistratePage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './scripts/components/App/App';

//ReactDOM.render(<MyForm />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={MyForm}/>
                <Route path='/RegistratePage' component={RegistrateForm}/>
            </Switch>    
        </App>  
    </BrowserRouter>, document.getElementById('root')
)