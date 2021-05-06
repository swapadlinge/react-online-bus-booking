import React, { Component } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Alert from 'react-bootstrap/Alert';
// import { Col } from 'react-bootstrap';
import "../styles/dashboard.css";
// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

export default class Dashboard extends Component {
    render() {
        return (
            // <div className=" row bg-dark text-white ">
            //     dashboard
            // </div>
            <Container fluid>
                <Row className="d-flex bg-success">
                    {/* Sidebar */}
                    <Col className=" my" md={2} sm={2} xs={2}>
                        {/* Logo / Name */}
                        <div className="sidebar__logo d-none d-md-block ">
                            <h4>Booking Dashboard</h4>
                        </div>
                        {/* Category */}
                        <div className="sidebar__categories mt-4">
                            <Accordion className="sidebar__menu m-0">
                                <Card >
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="d-flex">
                                        <div className="category__main-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                            </svg>
                                        </div>
                                        <div className="category__main-body ml-2 d-none d-md-block">
                                            Bus Operator Service
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>
                                                <div className="category__icon">
                                                    <img src="../icon/operator_icon.png" alt="icon" />
                                                </div> Get All Bus Operators</ListGroup.Item>
                                            <ListGroup.Item>Get All Bus Operators By route</ListGroup.Item>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1" className="d-flex">
                                        <div className="category__main-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
                                                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                                            </svg>
                                        </div>
                                        <div className="category__main-body ml-2 d-none d-md-block">
                                            Revenue
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Get Revenue by Operator</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        {/* sidebar footer */}
                    </Col>
                    {/* Main Content */}
                    <Col className="bg-dark mt-5">2 of 2</Col>
                </Row>
            </Container>
        )
    }
}
