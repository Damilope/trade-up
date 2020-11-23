import { Space, Typography } from "antd";
import React from "react";
import QuestionTitle from "../utils/QuestionTitle";
import styled from "@emotion/styled";

export interface IProjectSalaryToggleProps {
    isOpen: boolean;
    onToggleProjectedSalarySlider: () => void;
}

const ProjectSalaryToggle: React.FC<IProjectSalaryToggleProps> = (props) => {
    const { isOpen, onToggleProjectedSalarySlider } = props;

    return (
        <Space direction="vertical">
            <QuestionTitle
                questionOpen={isOpen}
                question="What happens if my annual income increases?"
                onClick={onToggleProjectedSalarySlider}
            />
            {isOpen && (
                <Typography.Text>
                    You can use the slider above to see how much you would pay
                    if your annual income increases.
                </Typography.Text>
            )}
            {isOpen && <HideSliderContainer>Hide slider</HideSliderContainer>}
        </Space>
    );
};

export default ProjectSalaryToggle;

const HideSliderContainer = styled.span({
    padding: 0,
    color: "rgb(66,133,244)",
    textDecoration: "underline",
    cursor: "pointer",
});
