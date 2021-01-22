import React, { Component } from 'react';

//Stateless Functional Component 
// In function add parameter props and use it. In class directly we can use this.props 
const NavBar = ({totalCounters}) => {   //Object restructuring to remove props
    return ( 
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar
            <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </a>
        </nav> 
         );
}


 
export default NavBar;