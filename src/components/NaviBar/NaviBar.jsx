import React from 'react';
import {Navbar, NavLink, NavbarBrand} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {Link} from "react-router-dom";
import {LinkArray} from "./LinkArray";
const NaviBar = () => {

    return (
        <>
            <Navbar collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"}>
                <NavbarBrand>World of Bee</NavbarBrand>
                <NavbarToggle aria-controls={"responsive-navbar-nav"}/>
                <NavbarCollapse id={"responsive-navbar-nav"}>
                    <>{LinkArray.map(link =>
                        <NavLink style={{paddingRight: 10}}><Link extend to={link.path}>{link.component}</Link></NavLink>
                    )}</>

                </NavbarCollapse>
            </Navbar>
        </>

    );
};

export default NaviBar;