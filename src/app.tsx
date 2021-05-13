import React, { useEffect } from "react";
import { GlobalStyle, theme } from "./style/global";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Base from "./components/base/Base";
import EntryPage from "./pages/entrypage/EntryPage";
import AboutPage from "./pages/aboutpage/AboutPage";
import SkillPage from "./pages/skillpage/SkillPage";
import EmailLine from "./components/email/EmailLine";
import WorkPage from "./pages/workPage/WorkPage";

const AppWrapper = styled.main`
    height: 100vh;
    width: 100vw;
    display: grid;
    background-color: ${({ theme }) => theme.primaryColor};
    grid-template-columns: ${({ theme }) => theme.navbarWidth} auto;
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
                    </Base>
                    <EmailLine />
                </AppWrapper>
            </ThemeProvider>
        </>
    );
};

export default App;
