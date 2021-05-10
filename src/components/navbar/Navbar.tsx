import React from "react";
import styled from "styled-components";
import logo from "../../favicon.png";
import { center, column } from "../../style/global_style";

const Nav = styled.nav`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: ${({ theme }) => theme.navbarWidth};
    background: ${({ theme }) => theme.navBackGround};
`;

const NavBrand = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    & img {
        height: 100%;
        width: 100%;
    }
`;

const NavItem = styled.a.attrs({ href: "1#" })`
    ${center};
    text-decoration: none;
    color: ${({ theme }) => theme.iconColor};
    height: 40px;
    width: 100%;
    &.active {
        color: ${({ theme }) => theme.accentColor};
    }
    i {
        font-size: 1.7rem;
    }
    p {
        font-size: 0.7rem;
        display: none;
    }
    &:hover {
        i {
            display: none;
        }
        p {
            color: ${({ theme }) => theme.accentColor};
            display: block;
        }
    }
`;

const NavItems = styled.ul`
    ${column};
    align-items: center;
    width: 100%;
    gap: 8px;
`;

const SocialItems = styled(NavItems)`
   max-height:150px;
    gap: 4px;
`;

const SocialItem = styled(NavItem)`
    i {
        font-size: 1.5rem;
    }
    &:hover {
        i {
            display: block;
            color: ${({ theme }) => theme.accentColor};
        }
    }
`;

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
