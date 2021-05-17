import React from "react";
import { SocialBarWrapper, SocialButton } from "./SocialBar.style";

const SocialBar = () => {
    return (
        <SocialBarWrapper>
            <div>
                <SocialButton color="#cd486b" href="#!">
                    <i className="lab la-github la-3x" />
                    <span>Github</span>
                </SocialButton>
                <SocialButton color="#1da1f2" href="#!">
                    <i className="lab la-github la-3x" />
                    <span>Github</span>
                </SocialButton>
                <SocialButton color="#24292e" href="#!">
                    <i className="lab la-github la-3x" />
                    <span>Github</span>
                </SocialButton>
                <SocialButton color="#0072b1" href="#!">
                    <i className="lab la-github la-3x" />
                    <span>Github</span>
                </SocialButton>
                <SocialButton color="#181818" href="#!">
                    <i className="lab la-github la-3x" />
                    <span>Hello!</span>
                </SocialButton>
            </div>
        </SocialBarWrapper>
    );
};

export default SocialBar;
