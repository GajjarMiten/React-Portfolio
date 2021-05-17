import React, { useState } from "react";
import logo from "../../favicon.png";
import { Nav, NavBrand, NavItem, NavItems } from "./Navbar.style";

import { handleNavClick } from "../../helpers/helpers";

const navItems = [
    { icon: "las la-home", title: "HOME" },
    { icon: "las la-user-circle", title: "ABOUT" },
    { icon: "las la-cog", title: "SKILL" },
    { icon: "las la-trophy", title: "WORK" },
    { icon: "las la-envelope", title: "CONTACT" },
];

const Navbar = () => {
    return (
        <Nav>
            <NavBrand>
                <img src={logo} alt="logo" />
            </NavBrand>
            <NavItems>
                {navItems.map((item, idx) => {
                    return (
                        <NavItem
                            className={idx === 0 ? "active" : ""}
                            key={idx}
                            id={idx.toString()}
                            onClick={(e) => handleNavClick(idx, navItems)}
                        >
                            <i className={`${item.icon}`}></i>
                            <p>{item.title}</p>
                        </NavItem>
                    );
                })}
            </NavItems>
            {/* <SocialItems>
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
            </SocialItems> */}
        </Nav>
    );
};

export default Navbar;
