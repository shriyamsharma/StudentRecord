import React from 'react';
import { Link } from 'react-router-dom';

const navBar = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Student Record Management</Link>
            <Link className="nav-link" to="/">Home</Link>
        </nav>
    </div>
);

export default navBar;