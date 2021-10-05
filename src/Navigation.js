import React from "react";
import {NavLink} from "react-router-dom";
import { Navbar,Nav, Container } from "react-bootstrap";
import "./Form.css"


class Navigation extends React.Component{
    render(){
    return(
      <React.Fragment>
      <Navbar>
        <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <div className='container'>
          <NavLink  exact activeStyle={{color:"green"}} to="/">Home</NavLink>
          <NavLink  activeStyle={{color:"green"}} to="/login">Login</NavLink>
          <NavLink  activeStyle={{color:"green"}} to="/register">Register</NavLink>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </React.Fragment>
    )
    }
}

export default Navigation;