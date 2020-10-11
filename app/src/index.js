import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import Navigation from './components/Navbar';

import Routes from './Router/Routes';

ReactDOM.render(
    <Router>
        <div className="App">
            {/* <Navigation /> */}
            {/* <h1>Welcome to Editåre</h1> */}
            <Routes />
        </div>
    </Router>,
    document.getElementById('root')
);