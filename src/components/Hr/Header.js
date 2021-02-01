import React from 'react';
import { Button, Container, Row, Col, Image, Navbar, DropdownButton, Dropdown ,SplitButton} from 'react-bootstrap';
import bunbu from '../../image/bunbu.png';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../Actions/index.js';

function Header(props) {
  return (


    <Container>
      <Row>
        <Navbar bg='light' expand="lg" fixed='top' style={{ paddingLeft: '20%' }}>

          <Navbar.Brand href="#home" style={{ fontSize: 35, color: '#2a448c' }}>
            <Image src={bunbu} width={50} height={50} />Bunbu</Navbar.Brand>
          <Col sm={4}></Col>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>

            <Link to='/accountHr' className='styleLink' style={{ color: props.colorLinkSkill }}>Accounts</Link>
            <Link to='/skillHr' className='styleLink' style={{ color: props.colorLinkProject }}>Skills</Link>


          </Navbar.Collapse>
          <SplitButton id='dropdown-split-varirants-Outline-primary' title="User">
            <dl style={{ textAlign : 'center'}}>
              <dt style={{ marginBottom : 10}}><Link to='/profileHr'>profile</Link></dt>
              <dt><Link to='/'onClick = {() =>{props.changeStatusLogin(false)}}>log out</Link></dt>
            </dl>
          </SplitButton>
          <Col sm={3}></Col>
        </Navbar>

      </Row>

    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    statusLogin: state.SignIn.statusLogin,
  }
}
const mapDispacthToProps = (dispatch, props) => {
  return {
    changeStatusLogin: (status) => {
      dispatch(actions.changeStatusLogin(status))
    },
  }
}
export default connect(mapStateToProps,mapDispacthToProps)(Header);