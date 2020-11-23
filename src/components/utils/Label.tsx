import React from "react";
import styled from "@emotion/styled";
import { Space } from "antd";

export interface ILabelProps {
    label: string;
}

const Label: React.FC<ILabelProps> = (props) => {
    const { label, children } = props;
    return (
        <Space direction="vertical">
            <LabelDiv>{label}</LabelDiv>
            {children}
        </Space>
    );
};

export default Label;

const LabelDiv = styled.div({});
