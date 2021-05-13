import styled from "styled-components";
import { center, column } from "../../style/global";

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

const NavBrand = styled.a.attrs({ href: "/" })`
    text-decoration: none;
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
        font-size: 2.6rem;
    }
    p {
        font-size: 1.0rem;
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
    gap: 2rem;
`;

const SocialItems = styled(NavItems)`
    max-height: 150px;
    gap: 4px;
`;

const SocialItem = styled(NavItem)`
    i {
        font-size: 1.6rem;
    }
    &:hover {
        i {
            display: block;
            color: ${({ theme }) => theme.accentColor};
        }
    }
`;

export { Nav, NavBrand, NavItem, NavItems, SocialItem, SocialItems };
