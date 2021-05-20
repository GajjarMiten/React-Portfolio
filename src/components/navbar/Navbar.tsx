import React from "react";
import logo from "../../assets/logo.png";
import {
    Nav,
    NavBrand,
    NavItem,
    NavItems,
    ExtraItem,
    ExtraItems,
} from "./Navbar.style";

import { handleNavClick } from "../../helpers/helpers";

const navItems = [
    { icon: "las la-home", title: "HOME" },
    { icon: "las la-user-circle", title: "ABOUT" },
    { icon: "las la-cog", title: "SKILL" },
    { icon: "las la-trophy", title: "WORK" },
    { icon: "las la-envelope", title: "CONTACT" },
];

const Navbar: React.FC = () => {
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
                            onClick={() => handleNavClick(idx, navItems)}
                        >
                            <i className={`${item.icon}`}></i>
                            <p>{item.title}</p>
                        </NavItem>
                    );
                })}
            </NavItems>

            <ExtraItems>
                <ExtraItem>
                    <i className="lab la-blogger"></i>
                </ExtraItem>
                <ExtraItem>
                    <i className="las la-terminal"></i>
                </ExtraItem>
                <ExtraItem>
                    <i className="las la-volume-up"></i>
                </ExtraItem>
            </ExtraItems>
        </Nav>
    );
};

export default Navbar;
