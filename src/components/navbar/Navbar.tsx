import React from "react";
import logo from "../../favicon.png";
import {
    Nav,
    NavBrand,
    NavItem,
    NavItems,
    SocialItem,
    SocialItems,
} from "./Navbar.style";

const Navbar = () => {
    return (
        <Nav>
            <NavBrand>
                <img src={logo} alt="logo" />
            </NavBrand>
            <NavItems>
                <NavItem className="active">
                    <i className="las la-home"></i>
                    <p>HOME</p>
                </NavItem>
                <NavItem>
                    <i className="las la-user-circle"></i>
                    <p>ABOUT</p>
                </NavItem>
                <NavItem>
                    <i className="las la-cog"></i>
                    <p>SKILLS</p>
                </NavItem>
                <NavItem>
                    <i className="las la-trophy"></i>
                    <p>WORK</p>
                </NavItem>
                <NavItem>
                    <i className="las la-envelope"></i>
                    <p>CONTACT</p>
                </NavItem>
            </NavItems>
            <SocialItems>
                <SocialItem>
                    <i className="lab la-github"></i>
                </SocialItem>
                <SocialItem>
                    <i className="lab la-twitter"></i>
                </SocialItem>
                <SocialItem>
                    <i className="lab la-linkedin"></i>
                </SocialItem>
                <SocialItem>
                    <i className="lab la-telegram"></i>
                </SocialItem>
                <SocialItem>
                    <i className="lab la-instagram"></i>
                </SocialItem>
            </SocialItems>
        </Nav>
    );
};

export default Navbar;
