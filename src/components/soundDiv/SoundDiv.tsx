import React from "react";

import zeep from "../../assets/sounds/zeep.mp3";
import { useSettings } from "../../provider/Settings.provider";

const SoundDiv: React.FC<{ soundProp?: string }> = ({
    children,
    soundProp = zeep,
}) => {
    const audio = new Audio(soundProp);

    const { value: sound } = useSettings();

    return (
        <div
            onMouseEnter={() => {
                if (sound) {
                    audio.play().catch((err) => {
                        console.log(err);
                    });
                }
            }}
            style={{ width: "fit-content" }}
        >
            {children}
        </div>
    );
};

export default SoundDiv;
