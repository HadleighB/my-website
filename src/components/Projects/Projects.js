import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.scss";
import WHG from "../../img/projects/whg.png";
import Elenzia from "../../img/projects/elenzia.png";

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <Container>
                    <Row>

                        <div className="projects-content">
                            <h2>Projects</h2>
                            <h4>More Coming Soon!</h4>
                        </div>

                        <Col xs="12" md="6">
                            <div className="project">
                                <img src={WHG} alt="WHG Project Image" />
                                <a href="https://www.whg.uk.com/" target="_blank">
                                    <div className="project-overlay">
                                        <div className="project-overlay-content">
                                            <h3>WHG</h3>
                                            <p className="plus"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col xs="12" md="6">
                            <div className="project">
                                <img src={Elenzia} alt="Elenzia Project Image" />
                                <a href="https://elenzia.com/" target="_blank">
                                    <div class="project-overlay">
                                        <div class="project-overlay-content">
                                            <h3>Elenzia</h3>
                                            <p class="plus"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Projects;