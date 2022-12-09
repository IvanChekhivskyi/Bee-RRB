import React from 'react';
import {Button, Navbar, NavbarBrand} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {refLinkAdmin, refLinkClient} from "./LinkArray";

const NaviBar = () => {
    return (
        <Navbar collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"}>
            <NavbarBrand>World of Bee</NavbarBrand>
            <NavbarToggle aria-controls={"responsive-navbar-nav"}/>
            <NavbarCollapse id={"responsive-navbar-nav"}>
                {isAdmin
                    ?
                        {refLinkAdmin.map(link =>
                            <Link to={link.path}>{link.component}</Link>
                        )}

                    :
                        {refLinkClient.map(link =>
                            <Link to={link.path}>{link.component}</Link>
                        )}
                }

                <Button variant={"primary"} className={"me-2"}>Log In</Button>
                <Button variant={"secondary"} className={"me-2"}>Sign Out</Button>
            </NavbarCollapse>
        </Navbar>
    );
};

export default NaviBar;