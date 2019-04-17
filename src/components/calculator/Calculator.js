import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import './Calculator.css';
import React, { Component } from 'react';
import { RpnCalculatorHelper }  from '../../helpers/rpnCalculatorHelper.js'
import {connect} from 'react-redux';

import * as logActions from '../../redux/actions/logActions.js';

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


const mapDispatchToProps = dispatch => ({
    dispatchLogEntry: (text) => dispatch(logActions.addLogEntry(text))
})

class Calculator extends Component
{
    
    constructor(props) {
        super(props);

        this.state = {
            calculationString: '',
            result: 0
        };

        this.props.dispatchLogEntry("Calculator created!");
    }

    addChar(char) {
        this.props.dispatchLogEntry("Key pressed:" + char);

        var oldString = this.state.calculationString;

        oldString += char;

        this.setState({
            calculationString: oldString
        });
    }

    reset() {
        this.props.dispatchLogEntry("Calculation expression was reseted");

        this.setState({
            calculationString: '',
            result: 0
        });
    }

    backspace() {
        this.props.dispatchLogEntry("Backspace was pressed");

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

        this.props.dispatchLogEntry("Calculation started");

        var helper = new RpnCalculatorHelper();

        try {
            var rpnString = helper.infixToPostfix(this.state.calculationString);

            this.props.dispatchLogEntry("Rpn string was got:" + rpnString);

            var result = helper.solvePostfix(rpnString, this);
    
            if(result == null)
            {
                this.setState({
                    result: "Incorrect input"
                });
                return;
            }
           
            this.setState({
                result: result
            });

            this.props.dispatchLogEntry("Calculation ends, result: " + result );
        }
        catch{
            
            this.props.dispatchLogEntry("Calculation ends with errors!");
    
            this.setState({
                result: "Incorrect input"
            });
        }
        
    }

    sum(a, b){
        this.props.dispatchLogEntry("Sum executed!");
        return a+b;
    }

    sub(a, b){
        this.props.dispatchLogEntry("Sub executed!");

        return a-b;
    }

    div(a, b){
        this.props.dispatchLogEntry("Div executed!");

        return a/b;
    }

    mul(a, b){
        this.props.dispatchLogEntry("Mul executed!");

        return a*b;
    }
    
    render() {
        return (
                <Container callName="calc-style">
                    <Row>
                        <Jumbotron>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Input value={this.state.result} disabled readOnly></Input> 
                                    </FormGroup>
                                    <FormGroup>
                                        <Input value={this.state.calculationString} readOnly></Input> 
                                    </FormGroup>
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
                                    <Button onClick={() => this.addChar('.') }  size="lg" xs="8" color="light" className="col-4 border">.</Button>
                                    <Button onClick={() => this.calculate() }  size="lg" xs="4" color="primary" className="col-4 border">=</Button>
                                </Col>

                                <Col xs="5">
                                    <Button onClick={() => this.reset() } size="lg" xs="6" color="danger" className="col-6 border" >C</Button>
                                    <Button onClick={() => this.backspace() } size="lg" xs="6" color="danger" className="col-6 border" >&larr;</Button>
                                    <Button onClick={() => this.addChar('(') }  size="lg" xs="4" color="light" className="col-6 border">(</Button>
                                    <Button onClick={() => this.addChar(')') }  size="lg" xs="4" color="light" className="col-6 border">)</Button>
                                    <Button onClick={() => this.addChar('/') }  size="lg" xs="4" color="light" className="col-6 border">/</Button>
                                    <Button onClick={() => this.addChar('*') }  size="lg" xs="4" color="light" className="col-6 border">*</Button>
                                    <Button onClick={() => this.addChar('-') }  size="lg" xs="4" color="light" className="col-6 border">-</Button>
                                    <Button onClick={() => this.addChar('+') }  size="lg" xs="4" color="light" className="col-6 border">+</Button>
                                    
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Row>
                </Container>
        );
    }
}

export default connect(null, mapDispatchToProps)(Calculator)