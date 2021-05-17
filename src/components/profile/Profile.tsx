import React, { useEffect } from "react";
import styled from "styled-components";
import profile from "../../assets/me.jpg";
import { device } from "../../style/mediaQueries";

const ProfileStyle = styled.img.attrs({ id: "profile" })`
    place-self: center;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    transform: translateX(200%);
    transition: all 2s ease;
    opacity: 0;
    object-fit: contain;
    @media ${device.laptop} {
        max-width: 300px;
        max-height: 300px;
    }
`;

const Profile = () => {
    useEffect(() => {
        const container = document.getElementById("container")!;
        const profile = document.getElementById("profile")!;
        container.addEventListener("scroll", () => {
            let pos = profile.getBoundingClientRect().top;
            if (pos < 700) {
                profile.style.transform = "translateX(0)";
                profile.style.opacity = "1";
            }
        });
        return () => {};
    }, []);

    return <ProfileStyle src={profile} loading="lazy" alt="profile" />;
};

export default Profile;
