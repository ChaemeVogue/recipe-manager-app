import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import SearchBar from './SearchBar';

function Header() {
    return (
        <div className="Header">
            <div className="Header-title">
                <Link to="/">
                    <h1>search recipes</h1>
                    <h2>with the edamam api</h2>
                </Link>
            </div>
            <div className="Header-search">
                <SearchBar/>
            </div>
        </div>
    );
}

export default Header;