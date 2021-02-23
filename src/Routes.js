import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home'
import Value from './pages/newEmprestimo/value'
import Time from './pages/newEmprestimo/time'
import Bank from './pages/newEmprestimo/bank'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/emprestimo' component={Value}/>
            <Route exact path='/emprestimo/tempo' component={Time}/>
            <Route exact path='/emprestimo/tempo/banco' component={Bank}/>
            <Route exact path='*' component={() => <h1>Essa pagina não existe</h1>}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;