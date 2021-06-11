import React from "react";

const SoundDiv: React.FC<{ soundProp?: string }> = ({ children }) => {
    return (
        <div onMouseEnter={() => {}} style={{ width: "fit-content" }}>
            {children}
        </div>
    );
};

export default SoundDiv;
