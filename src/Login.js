import React from "react";
import {NavLink} from "react-router-dom";
import { Navbar,Nav, Container } from "react-bootstrap";
import "./Form.css";


function Login(){
    return(
        <>
        <React.Fragment>
        <Navbar>
        <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <div className='drop'>
          <NavLink  exact activeStyle={{color:"green"}} to="/employee">Employee</NavLink>
          <NavLink  activeStyle={{color:"green"}} to="/admin">Admin</NavLink>
          <NavLink  activeStyle={{color:"green"}} to="/management">Management</NavLink>
          </div>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
        </React.Fragment>
           
        <form align="center">
           <div className="form">
           <p><label className="label">Email Id</label><input className="text" name="id" type="text" required/><br/></p>
           <p><label className="label">Password</label><input className="text" name="pwd" type="text" required/><br/></p>
           <p><input name="Submit" type="submit"></input></p>
            </div>
            </form>   
        </>
    );
}

export default Login;