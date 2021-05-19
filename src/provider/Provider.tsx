import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../style/global";

const Provider: React.FC = (props: any) => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Provider;
