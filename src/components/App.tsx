import React from "react";
import styled from "@emotion/styled";
import TradeProgramsContainer from "./programs/TradeProgramsContainer";
import { Space } from "antd";

const App: React.FC<{}> = () => {
    return (
        <InnerAppContainer>
            <Space direction="vertical" style={{ width: "100%" }}>
                <ImageContainer
                    src="/assets/logo-black.png"
                    alt="TradeUp logo"
                />
                <TradeProgramsContainer />
            </Space>
        </InnerAppContainer>
    );
};

export default App;

const InnerAppContainer = styled("div")({
    padding: "16px",
    maxWidth: "400px",
    margin: "auto",
});

const ImageContainer = styled.img({
    width: "100px",
    height: "70px",
    objectFit: "scale-down",
});
