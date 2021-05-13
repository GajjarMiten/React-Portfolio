import React, { useEffect } from "react";
import styled from "styled-components";
import profile from "../../assets/me.jpg";

const ProfileStyle = styled.img.attrs({ id: "profile" })`
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    transform: translateX(200%);
    transition: all 2s ease;
    opacity: 0;
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
