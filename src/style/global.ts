import { createGlobalStyle } from "styled-components";
import { bounce, bounceIn } from "./animations";
import { device } from "./mediaQueries";

const GlobalStyle = createGlobalStyle`
    *{  
        /* cursor: none; */
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

     .skill-svg{
         @media ${device.laptop}{
             transform:scale(1.2);

         }
         @media ${device.tablet}{
             transform:scale(1.5);
         }
         @media ${device.mobileL}{
             transform:scale(0.9);
         }
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
    navbarWidthMD: "60px",
    headingColor: "white",
    headingLG: "4rem",
    headingMD: "3rem",
    headingSM: "2rem",
    textLG: "1.5rem",
    textMD: "1.3rem",
    textSM: "1rem",
    fontText: "'Mali',sans-serif",
    fontHeading: "'Fredoka One', cursive",
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

export { GlobalStyle, theme, colors };
