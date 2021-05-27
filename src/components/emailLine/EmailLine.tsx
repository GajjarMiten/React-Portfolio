import React from "react";
import SoundDiv from "../soundDiv/SoundDiv";
import { Email } from "./EmailLine.style";

import beep from "../../assets/sounds/beep.mp3";

const EmailLine: React.FC = () => {
    return (
        <Email>
            <SoundDiv soundProp={beep}>miten3377@gmail.com</SoundDiv>
        </Email>
    );
};

export default EmailLine;
