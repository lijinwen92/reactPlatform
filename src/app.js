import React from "react"
import ReactDOM from 'react-dom'
import {BrowserRouter, Link, Route, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import App from './containers/App'
import './index.less'

const history = createBrowserHistory();
const supportsHistory = 'pushState' in window.history;

ReactDOM.render(<BrowserRouter forceRefresh={!supportsHistory}>
    <App/>
</BrowserRouter>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}