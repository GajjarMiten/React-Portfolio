import { createGlobalStyle, css, DefaultTheme } from "styled-components";
import { bounce, bounceIn } from "./animations";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
   
    ::-webkit-scrollbar {
        display: none; 
     }
     .bounce{
         animation-name:${bounce};
     }
     .bounceIn{
        animation-name: ${bounceIn};
        animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
     }
    
   
`;

const theme = {
    midColor: "#cf8bf3",
    textColor: "#fdb99b",
    primaryColor: "#252627",
    iconColor: "#838383",
    accentColor: "#a770ef",
    navBackGround: "#181818",
    navbarWidth: "80px",
    headingColor: "white",
    headingLG: "5rem",
    headingMD: "3rem",
    headingSM: "2rem",
    textLG: "1.5rem",
    textMD: "1.3rem",
    textSM: "1rem",
};

const colors = [
    "f55c47",
    "907fa4",
    "ff7b54",
    "3d84b8",
    "393e46",
    "eca3f5",
    "fb3640",
    "f05945",
    "2b2e4a",
    "7eca9c",
    "b8b5ff",
    "ff75a0",
    "f9f871",
];

const column = css`
    display: flex;
    flex-direction: column;
`;
const center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export { GlobalStyle, theme, column, center, colors };
