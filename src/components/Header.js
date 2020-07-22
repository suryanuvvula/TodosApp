import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const headerStyle = {
        margin: '20px',
        backgroundColor: '#333',
        textAlign: 'center',
        color: '#fff'
    }

    const linkStyle = {
        color: '#fff'
    }
    return(
        <header style={headerStyle}>
            <h2>TodoList</h2>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

export default Header;