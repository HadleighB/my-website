import React, { Component, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './Navigation.scss';
import BurgerMenu from '../../img/burger-menu.svg';
import CloseMenu from '../../img/cross.svg';

const Navigation = (props) => {

    const [isActive, setActive] = useState("false");

    const toggleClass = () => {
        setActive(!isActive);
    };

    let pages = ['Home', 'About Me', 'Projects'];
    let menuItems = [];

    let i = 0;
    pages.forEach((item) => {

        var slug;
        if (item === 'Home') {
            slug = '/';
        } else {
            slug = item.toLowerCase().replace(/ /g, '-');
        }

        menuItems.push(
            <li key={item[i]} className="navigation-item">
                <a className="header__link" href={slug}>{item}</a>
            </li>
        )
        i++;
    });

    return (
        <div className="navigation">
            <Router>
                <ul className={isActive ? 'menu' : 'menu mobile-active'}>
                    {menuItems}
                </ul>
            </Router>
            <div className={isActive ? 'burger-menu' : 'burger-menu mobile-active'} onClick={toggleClass}>
                <img className="open" src={BurgerMenu} alt="Burger Menu" />
                <img className="close" src={CloseMenu} alt="Close Menu" />
            </div>
        </div>
    );
    
}

export default Navigation;