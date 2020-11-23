import React from "react";
import styled from "@emotion/styled";

export interface IBoxProps {}

const Box: React.FC<IBoxProps> = (props) => {
    const { children } = props;
    return <Container>{children}</Container>;
};

export default Box;

const Container = styled.div({
    fontSize: "32px",
    backgroundColor: "#eee",
    borderRadius: "8px",
    padding: "8px 16px",
});
