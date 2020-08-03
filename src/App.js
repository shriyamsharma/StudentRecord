import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Students from './components/Students/Students';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br/>
        <Route path="/" exact component={Students} />
        <br />
      </div>
    </Router>
  );
}

export default App;
