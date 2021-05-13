import { keyframes } from "styled-components";

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
 0%   { transform: scale(1,1)      translateY(0);opacity:0; }
 10%  { transform: scale(1.1,.9)   translateY(0); }
 30%  { transform: scale(.9,1.1)   translateY(-14px); }
 50%  { transform: scale(1.05,.95) translateY(0);}
 57%  { transform: scale(1,1)      translateY(-7px);}
 64%  { transform: scale(1,1)      translateY(0); }
 100% { transform: scale(1,1)      translateY(0);opacity:1;}
`;

const spark = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

export { bounce, bounceIn, spark };
