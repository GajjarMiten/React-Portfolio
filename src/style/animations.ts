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
const sparkle = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
  }
  50% {
    transform: scale(1) rotate(90deg);
  }
  100% {
    transform: scale(0) rotate(180deg);
  }
`;
const wave = keyframes`
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  `;

const swell = keyframes`
    0%, 100% {
      transform: translate3d(0,-25px,0);
    }
    50% {
      transform: translate3d(0,5px,0);
    }
  `;

const growAndShrink = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;
const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export {
    bounce,
    bounceIn,
    spark,
    wave,
    swell,
    sparkle,
    growAndShrink,
    spin,
    comeInOut,
};
