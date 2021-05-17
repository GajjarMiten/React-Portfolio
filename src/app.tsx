import React from "react";
import { GlobalStyle, theme } from "./style/global";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Base from "./components/base/Base";
import EntryPage from "./pages/entrypage/EntryPage";
import AboutPage from "./pages/aboutpage/AboutPage";
import SkillPage from "./pages/skillpage/SkillPage";
import EmailLine from "./components/email/EmailLine";
import WorkPage from "./pages/workPage/WorkPage";
import ContactPage from "./pages/contactpage/ContactPage";
import SocialBar from "./components/socialbar/SocialBar";
import { device } from "./style/mediaQueries";

const AppWrapper = styled.main`
    height: 100vh;
    width: 100vw;
    display: grid;
    background-color: ${({ theme }) => theme.primaryColor};
    grid-template-columns: ${({ theme }) => theme.navbarWidth} auto;

    @media ${device.laptop} {
        grid-template-columns: ${({ theme }) => theme.navbarWidthMD} auto;
    }
    @media ${device.tablet} {
        grid-template-columns: 1fr;
        grid-template-rows: ${({ theme }) => theme.navbarWidth} auto;
    }
`;

const App: React.VFC = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <AppWrapper>
                    <Navbar />
                    <Base>
                        <EntryPage />
                        <AboutPage />
                        <SkillPage />
                        <WorkPage />
                        <ContactPage />
                    </Base>
                    <EmailLine />
                    <SocialBar />
                </AppWrapper>
            </ThemeProvider>
        </>
    );
};

export default App;
