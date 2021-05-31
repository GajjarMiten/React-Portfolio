import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../style/global";
import SettingsProvider from "./Settings.provider";

const Provider: React.FC = (props: any) => {
    return (
        <SettingsProvider>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </SettingsProvider>
    );
};

export default Provider;
