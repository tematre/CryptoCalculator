
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


const mapStateToProps = (state) => {
    return {
        logs: state.logs
    }
}

class OperationsLog extends Component {
    constructor(props) {
        super(props);
    }

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
                                        <Label for="logsElement">Full actions logs</Label>
                                        <Input type="textarea" id="logsElement" value={this.props.logs} />
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

//wrap App in connect and pass in mapStateToProps
export default connect(mapStateToProps)(OperationsLog)