import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Acme&family=Pacifico&display=swap');
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`;

const theme = {
    midColor: "#cf8bf3",
    textColor: "#fdb99b",
    primaryColor: "#fff",
    iconColor: "#838383",
    accentColor: "#a770ef",
    navBackGround: "#181818",
    navbarWidth: "60px",
};

const column = css`
    display: flex;
    flex-direction: column;
`;
const center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export { GlobalStyle, theme, column, center };
