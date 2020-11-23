import { Space } from "antd";
import React from "react";
import { CaretDownFilled, CaretRightFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export interface IQuestionTitleProps {
    questionOpen?: boolean;
    question: string;
    onClick?: () => void;
}

const QuestionTitle: React.FC<IQuestionTitleProps> = (props) => {
    const { question, questionOpen, onClick } = props;

    const content = (
        <Space>
            {/* <PlayCircleTwoTone
                style={{ fontSize: "14px", color: "rgb(66,133,244)" }}
            /> */}
            {questionOpen ? (
                <CaretDownFilled style={{ color: "rgb(66,133,244)" }} />
            ) : (
                <CaretRightFilled style={{ color: "rgb(66,133,244)" }} />
            )}
            <div
                style={{
                    color: "rgb(66,133,244)",
                    textDecoration: "underline",
                }}
            >
                {question}
            </div>
        </Space>
    );

    return onClick ? (
        <ClickableQuestionContainer onClick={onClick}>
            {content}
        </ClickableQuestionContainer>
    ) : (
        content
    );
};

export default QuestionTitle;

const ClickableQuestionContainer = styled.div({
    cursor: "pointer",
});
