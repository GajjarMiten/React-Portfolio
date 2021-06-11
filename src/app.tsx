import React, { useState } from "react";
import { GlobalStyle } from "./style/global";
import styled from "styled-components";
import Base from "./components/base/Base";
import EntryPage from "./pages/entrypage/EntryPage";
import AboutPage from "./pages/aboutpage/AboutPage";
import SkillPage from "./pages/skillpage/SkillPage";
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
                    <Base>
                        <EntryPage />
                        <AboutPage />
                        <SkillPage />
                        <WorkPage />
                        <ContactPage />
                    </Base>
                    {/* <EmailLine /> */}
                </AppWrapper>
            </Provider>
        </>
    );
};

export default App;

const AppWrapper = styled.main`
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.primaryColor};

    max-width: ${size.laptopL};
    margin: 0 auto;
    position: relative;
    border-left: solid 2px ${({ theme }) => theme.accentColor};
    border-right: solid 2px ${({ theme }) => theme.accentColor};
    @media ${device.laptopL} {
        border: none;
    }
    @media ${device.laptop} {
    }
    @media ${device.tablet} {
    }
`;
