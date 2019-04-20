
import React, { Component } from 'react';
import { connect } from 'react-redux'
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
    Label,
    TabPane
  } from 'reactstrap';
import { ContractText } from '../../crypto/TemaTreCryptoCalculatorConstants.js'

export class SmartContractView extends Component {
    handleChange(){}
    render() {
        return  (
            <Container >
                <Row>
                    <Col xs="12">
                        <p/>
                        <Jumbotron>
                            <Row>
                                <Col xs="12">
                                    <FormGroup>
                                        <Label for="textElement">Full text of Solidity Smart Contract</Label>
                                        <Input type="textarea" id="textElement" style={{height: 500+'px'}} value={ContractText} onChange={this.handleChange} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }
}