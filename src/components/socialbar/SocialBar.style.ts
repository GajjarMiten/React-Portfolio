import styled from "styled-components";

const SocialBarWrapper = styled.div`
    border: solid 1px white;
    height: 70px;
    width: 200px;
    position: fixed;
    top: 10%;
    right: 0;
`;

const SocialButton = styled.a<{ color: string }>``;

export { SocialBarWrapper, SocialButton };
