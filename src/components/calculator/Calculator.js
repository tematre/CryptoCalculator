import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import './Calculator.css';
import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col,  
    FormGroup,
    Input,
    Button,
    Nav,
    NavItem,
    NavLink,
    Jumbotron,
    TabContent,
    Collapse,
    TabPane
  } from 'reactstrap';

export class Calculator extends Component
{
    constructor() {
        super();
    }
    
    render() {
        return (
                <Container callName="calc-style">
                    <Row>
                        <Jumbotron>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Input disabled></Input> 
                                    </FormGroup>
                                    <FormGroup>
                                        <Input ></Input> 
                                    </FormGroup>
                                </Col>
                                   
                                <Col xs="7">
                                    <Button  size="lg" xs="6" color="danger" className="col-6 border" >C</Button>
                                    <Button  size="lg" xs="6" color="danger" className="col-6 border" >&larr;</Button>
                                </Col>

                                <Col xs="5">
                                    <Button size="lg" xs="4" color="light" className="col-6 border">(</Button>
                                    <Button size="lg" xs="4" color="light" className="col-6 border">)</Button>
                                </Col>

                                <Col xs="7">
                                    <Button size="lg" xs="4" color="light" className="col-4 border">7</Button>
                                    <Button size="lg" xs="4" color="light" className="col-4 border">8</Button>
                                    <Button size="lg" xs="4" color="light" className="col-4 border">9</Button>
                                    <Button size="lg" xs="4" color="light" className="col-4 border">4</Button>
                                    <Button size="lg" xs="4" color="light" className="col-4 border">5</Button>
                                    <Button size="lg" xs="4" color="light" className="col-4 border">6</Button>
                                    <Button size="lg" xs="4" color="light" className="col-4 border">1</Button>
                                    <Button size="lg" xs="4" color="light" className="col-4 border">2</Button>
                                    <Button size="lg" xs="4" color="light" className="col-4 border">3</Button>
                                    <Button size="lg" xs="4" color="light" className="col-4 border">0</Button>
                                    <Button size="lg" xs="4" color="light" className="col-4 border">.</Button>
                                </Col>

                                <Col xs="5">
                                    <Button size="lg" xs="4" color="light" className="col-6 border">/</Button>
                                    <Button size="lg" xs="4" color="light" className="col-6 border">%</Button>
                                    <Button size="lg" xs="4" color="light" className="col-6 border">*</Button>
                                    <Button size="lg" xs="4" color="light" className="col-6 border">√</Button>
                                    <Button size="lg" xs="4" color="light" className="col-6 border">-</Button>
                                    <Button size="lg" xs="4" color="light" className="col-6 border">+</Button>
                                    <Button size="lg" xs="4" color="primary" className="col-12 border">=</Button>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Row>
                </Container>
        );
    }
}