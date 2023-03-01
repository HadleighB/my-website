import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './Navigation.scss';

class Navigation extends React.Component {
  render() {
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
                <ul className="menu">
                    {menuItems}
                </ul>
            </Router>
        </div>
    );
  }
}

export default Navigation;