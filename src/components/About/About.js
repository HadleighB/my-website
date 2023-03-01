import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Me from "../../img/me.jpg";
import Email from "../../img/email.png";
import LinkedIn from "../../img/linkedin.svg";
import GitHub from "../../img/github.svg";
import "./About.scss";

class About extends Component {
    render() {
        return (
            <div className="about">
                <Container>
                    <Row>
                        <Col xs="4" className="about-col__left">
                            <img src={Me} className="about-pfp" alt="Hadleigh Bird Picture" />
                            <h2 className="about-name">Hadleigh Bird</h2>
                            <p className="about-title">Website Developer</p>
                            <ul className="icon-list">
                                <li className="icon email-icon">
                                    <a href="mailto:hadleighbird@hotmail.com">
                                        <img src={Email} alt="Email Icon" />
                                    </a>
                                </li>
                                <li className="icon linkedin-icon">
                                    <a href="https://www.linkedin.com/in/hadleigh-bird-019052159/" target="_blank">
                                        <img src={LinkedIn} alt="LinkedIn Icon" />
                                    </a>
                                </li>
                                <li className="icon github-icon">
                                    <a href="https://github.com/HadleighB" target="_blank">
                                        <img src={GitHub} alt="Github Icon" />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs="8" className="about-col__right">
                            <h2>About Me</h2>
                            <p className="about-text">
                                Hi! I'm Hadleigh.
                            </p>
                            <p className="about-text">
                                I'm a website developer based in the UK. I have a passion for creating websites and web applications, and I'm always looking for new projects to work on.
                            </p>
                            <p className="about-text">
                                For the most part, I work with HTML, CSS, JavaScript, but I'm also familiar with other web technologies such as React, Node.js.
                            </p>

                            <Row>
                                <Col xs="5" className="about-col__right__interests">
                                    <h3>Interests</h3>
                                    <ul className="about-interests">
                                        <li>Web Development</li>
                                        <li>Video Games</li>
                                        <li>F1/GT Racing/Sim Racing</li>
                                        <li>Music</li>
                                    </ul>
                                </Col>
                                <Col xs="7" className="about-col__right__skills">
                                    <h3>Skills</h3>
                                    <ul className="about-skills">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Node.js</li>
                                        <li>Git</li>
                                        <li>Photoshop</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;