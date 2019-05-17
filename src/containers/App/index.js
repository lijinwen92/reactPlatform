import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import Login from '../Login'
import Home from '../Home'

export default function App(){
    return <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home} />
    </Switch>
}