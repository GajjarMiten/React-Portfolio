import React from "react";
import { GlobalStyle } from "./style/global";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Base from "./components/base/Base";
import EntryPage from "./pages/entrypage/EntryPage";
import AboutPage from "./pages/aboutpage/AboutPage";
import SkillPage from "./pages/skillpage/SkillPage";
import EmailLine from "./components/emailLine/EmailLine";
import WorkPage from "./pages/workPage/WorkPage";
import ContactPage from "./pages/contactpage/ContactPage";
import { device, size } from "./style/mediaQueries";
import Cursor from "./components/cursor/Cursor";
import Provider from "./provider/Provider";

const App: React.VFC = () => {
    return (
        <>
            <GlobalStyle />
            <Provider>
                <AppWrapper>
                    <Cursor />
                    <Navbar />
                    <Base>
                        <EntryPage />
                        <AboutPage />
                        <SkillPage />
                        <WorkPage />
                        <ContactPage />
                    </Base>
                    <EmailLine />
                </AppWrapper>
            </Provider>
        </>
    );
};

export default App;

const AppWrapper = styled.main`
    height: 100vh;
    width: 100vw;
    display: grid;
    background-color: ${({ theme }) => theme.primaryColor};
    grid-template-columns: ${({ theme }) => theme.navbarWidth} auto;
    max-width: ${size.laptopL};
    margin: 0 auto;
    position: relative;
    border-left: solid 2px white;
    border-right: solid 2px white;
    overflow: hidden;
    @media ${device.laptopL} {
        border: none;
    }
    @media ${device.laptop} {
        grid-template-columns: ${({ theme }) => theme.navbarWidthMD} auto;
    }
    @media ${device.tablet} {
        grid-template-columns: 1fr;
        grid-template-rows: ${({ theme }) => theme.navbarWidth} auto;
    }
`;
