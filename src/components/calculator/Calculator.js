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

        this.state = {
            calculationString: '',
            result: 0
        };
    }

    addChar(char) {
        var oldString = this.state.calculationString;

        oldString += char;

        this.setState({
            calculationString: oldString
        });
    }

    reset() {
        this.setState({
            calculationString: '',
            result: 0
        });
    }

    backspace() {

        var oldString = this.state.calculationString;

        if(oldString != null && oldString.length >0)
        {
            oldString = oldString.slice(0, -1);
        }

        this.setState({
            calculationString: oldString
        });
    }

    calculate(){
        this.setState({
            result: 100
        });
    }
    
    render() {
        return (
                <Container callName="calc-style">
                    <Row>
                        <Jumbotron>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Input value={this.state.result} disabled></Input> 
                                    </FormGroup>
                                    <FormGroup>
                                        <Input value={this.state.calculationString}></Input> 
                                    </FormGroup>
                                </Col>
                                   
                                <Col xs="7">
                                    <Button onClick={() => this.reset() } size="lg" xs="6" color="danger" className="col-6 border" >C</Button>
                                    <Button onClick={() => this.backspace() } size="lg" xs="6" color="danger" className="col-6 border" >&larr;</Button>
                                </Col>

                                <Col xs="5">
                                    <Button onClick={() => this.addChar('(') }  size="lg" xs="4" color="light" className="col-6 border">(</Button>
                                    <Button onClick={() => this.addChar(')') }  size="lg" xs="4" color="light" className="col-6 border">)</Button>
                                </Col>

                                <Col xs="7">
                                    <Button onClick={() => this.addChar('7') }  size="lg" xs="4" color="light" className="col-4 border">7</Button>
                                    <Button onClick={() => this.addChar('8') }  size="lg" xs="4" color="light" className="col-4 border">8</Button>
                                    <Button onClick={() => this.addChar('9') }  size="lg" xs="4" color="light" className="col-4 border">9</Button>
                                    <Button onClick={() => this.addChar('4') }  size="lg" xs="4" color="light" className="col-4 border">4</Button>
                                    <Button onClick={() => this.addChar('5') }  size="lg" xs="4" color="light" className="col-4 border">5</Button>
                                    <Button onClick={() => this.addChar('6') }  size="lg" xs="4" color="light" className="col-4 border">6</Button>
                                    <Button onClick={() => this.addChar('1') }  size="lg" xs="4" color="light" className="col-4 border">1</Button>
                                    <Button onClick={() => this.addChar('2') }  size="lg" xs="4" color="light" className="col-4 border">2</Button>
                                    <Button onClick={() => this.addChar('3') }  size="lg" xs="4" color="light" className="col-4 border">3</Button>
                                    <Button onClick={() => this.addChar('0') }  size="lg" xs="4" color="light" className="col-4 border">0</Button>
                                    <Button onClick={() => this.addChar('.') }  size="lg" xs="8" color="light" className="col-8 border">.</Button>
                                </Col>

                                <Col xs="5">
                                    <Button onClick={() => this.addChar('/') }  size="lg" xs="4" color="light" className="col-6 border">/</Button>
                                    <Button onClick={() => this.addChar('%') }  size="lg" xs="4" color="light" className="col-6 border">%</Button>
                                    <Button onClick={() => this.addChar('*') }  size="lg" xs="4" color="light" className="col-6 border">*</Button>
                                    <Button onClick={() => this.addChar('√') }  size="lg" xs="4" color="light" className="col-6 border">√</Button>
                                    <Button onClick={() => this.addChar('-') }  size="lg" xs="4" color="light" className="col-6 border">-</Button>
                                    <Button onClick={() => this.addChar('+') }  size="lg" xs="4" color="light" className="col-6 border">+</Button>
                                    <Button onClick={() => this.calculate() }  size="lg" xs="4" color="primary" className="col-12 border">=</Button>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Row>
                </Container>
        );
    }
}