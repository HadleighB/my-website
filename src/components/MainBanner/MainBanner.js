import React, { Component } from "react";
import "./MainBanner.scss";

class MainBanner extends Component {
    render() {
        return(
            <div className="main-banner">
                <div className="main-banner__background">
                    <div class="stars"></div>
                    <div class="twinkling"></div>
                </div>
                <div className="main-banner__content">
                    <h1 className="main-banner__title">Hi, I'm <span className="main-banner__title--highlight">Hadleigh Bird</span></h1>
                    <p className="main-banner__text">A <span className="main-banner__text--highlight">Website Developer</span> based in Birmingham, UK.</p>
                    <a href="/about-me" className="main-banner__button">Find Out More</a>
                </div>
            </div>
        )
    }
}

export default MainBanner;