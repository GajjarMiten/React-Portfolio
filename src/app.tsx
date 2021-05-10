import React from "react";
import { GlobalStyle, theme } from "./style/global_style";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/navbar/Navbar";

const AppStyle = styled.main`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: ${({ theme }) => theme.navbarWidth};
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <AppStyle>
                    <Navbar />
                </AppStyle>
            </ThemeProvider>
        </>
    );
};

export default App;
