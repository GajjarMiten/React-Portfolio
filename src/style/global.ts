import { createGlobalStyle, css, keyframes } from "styled-components";

const bounce = keyframes`  
   from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
  `;
const bounceIn = keyframes`
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-14px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-7px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
`;

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
    navbarWidth: "60px",
    headingColor: "white",
    headingLG: "4rem",
    headingMD: "3rem",
    headingSM: "2rem",
    textLG: "1.5rem",
    textMD: "1.3rem",
    textSM: "1rem",
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
