import React, { Component } from 'react';
import { Calculator } from './components/calculator/Calculator.js'
import { 
  Container, 
  Row, 
  Col,  
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  TabContent,
  Collapse,
  TabPane
} from 'reactstrap';
import classnames from 'classnames';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isOpen: false,
      activeTab: '1',
      
    };

    this.toggleActiveTab = this.toggleActiveTab.bind(this);
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleActiveTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        isOpen: false
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Crypto calculator, by TemaTre</NavbarBrand>
          <NavbarToggler onClick={this.toggleMenu} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#" onClick={() => { this.toggleActiveTab('1'); }}>Calculator</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => { this.toggleActiveTab('2'); }}>Logs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => { this.toggleActiveTab('3'); }}>Solidity sources</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>  
        
        <Container fluid className="App">
            <Row>
              <Col xs="12">
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col xl={{ size: '4', offset: 4 }}  xs="12"  sm={{ size: '10', offset: 1 }} lg={{ size: '8', offset: 2 }}>
                        <p></p>
                        <Calculator style={{ margin: 5 }} ></Calculator>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <h4>Tab 2 Contents</h4>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Col sm="12">
                        <h4>Tab 3 Contents</h4>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
