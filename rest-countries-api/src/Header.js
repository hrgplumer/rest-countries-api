import React, { useState } from 'react';
import './assets/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ mode }) => {
    const [theme, setTheme] = useState(mode);

    return (
        <header className="site-header">
            <h1>Where in the world?</h1>
            <div className="color-mode">
                <span>
                    <FontAwesomeIcon icon={faMoon} /> &nbsp;
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </span>
            </div>
        </header>
    )
}

export default Header;