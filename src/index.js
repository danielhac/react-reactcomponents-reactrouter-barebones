import 'babel-polyfill'; // Some features in ES6 that Babel cannot transpile, thus polyfill
import React from 'react'; // To use React
import { render } from 'react-dom'; // To allow render function working in browser
import { Router, browserHistory } from 'react-router'; // Router: needed as coded in render below - browserHistory: clean urls
import routes from './routes'; // Passing in routes.js shown in render below
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
