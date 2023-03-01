import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.scss';
import Navigation from '../Navigation/Navigation';

class Header extends React.Component {

    state = {
        isTop: true,
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    render() {
        return (
            <div className={this.state.isTop ? "header" : "header header-scrolled"}>
                <Container>
                    <Row>
                        <Col xs="6" md="4" className="header__col--left">
                            <a href="/" className="header__logo">
                                <h1 className="website-logo">Hadleigh Bird</h1>
                            </a>
                        </Col>
                        <Col xs="6" md="8" className="header__col--right">
                            <Navigation />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;