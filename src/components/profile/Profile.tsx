import React from "react";
import styled from "styled-components";

import { device } from "../../style/mediaQueries";
import { motion } from "framer-motion";
import useInViewAnimate from "../../hooks/useInViewAnimate";
import CursorFocus from "../../hoc/CursorFocus";

const ProfileStyle = styled(motion.img).attrs({ id: "profile" })`
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
    @media ${device.mobileL} {
        max-width: 280px;
        max-height: 280px;
    }

    @media ${device.mobileS} {
        max-width: 230px;
        max-height: 230px;
    }
`;

const profileVariants = {
    hidden: {
        opacity: 0,
        x: "100%",
    },
    visible: {
        opacity: 1,
        x: "0",
        transition: {
            type: "spring",
            stiffness: 120,
            duration: 0.8,
        },
    },
};

const Profile: React.VFC = () => {
    const { ref, controls } = useInViewAnimate("hidden", "visible");

    return (
        <CursorFocus>
            <ProfileStyle
                src="https://firebasestorage.googleapis.com/v0/b/myportfolio2692.appspot.com/o/projects%2Fme.jpg?alt=media&token=89b96c1b-1890-491b-ab6b-c9374cfb72b8"
                loading="lazy"
                alt="profile"
                ref={ref}
                variants={profileVariants}
                initial="hidden"
                animate={controls}
            />
        </CursorFocus>
    );
};

export default Profile;
