import React from "react";
import BouncyText from "../../components/bouncyText/BouncyText";
import Wrapper from "../../components/wrapper/Wrapper";

const EntryPage: React.VFC = () => {
    return (
        <Wrapper>
            <BouncyText text="About&nbsp;Me" offset={400} />
        </Wrapper>
    );
};

export default EntryPage;
