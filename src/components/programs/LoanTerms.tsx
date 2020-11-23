import { Divider, Space, Tag, Typography } from "antd";
import React from "react";
import styled from "@emotion/styled";

export interface ILoanTermsProps {
    annualIncome: number;
    monthlyPayment: number;
    numLoanYears: number;
    threshold: number;
    tuition: number;
    showSalaryLowerThanThresholdMsg: boolean;
}

const LoanTerms: React.FC<ILoanTermsProps> = (props) => {
    const {
        annualIncome,
        monthlyPayment,
        numLoanYears,
        threshold,
        tuition,
        showSalaryLowerThanThresholdMsg,
    } = props;

    return (
        <Space
            direction="vertical"
            style={{ width: "100%" }}
            split={<Divider style={{ margin: "8px 0" }} />}
        >
            <ItemContainer>
                <ItemTitle>Projected salary</ItemTitle>
                <ItemContent>${annualIncome}</ItemContent>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>Tuition</ItemTitle>
                <ItemContent>${tuition}</ItemContent>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>Monthly payment</ItemTitle>
                <ItemContent>${monthlyPayment}</ItemContent>
            </ItemContainer>
            <ItemContainer>
                <ItemTitle>Years</ItemTitle>
                <ItemContent>{numLoanYears}</ItemContent>
            </ItemContainer>
            {showSalaryLowerThanThresholdMsg ? (
                <Typography.Paragraph type="secondary">
                    <div>
                        <span>If your annual income is less than</span>{" "}
                        <Tag>${threshold}</Tag>
                        <span>
                            , you won't pay anything until your annual income
                            increases.
                        </span>
                    </div>
                </Typography.Paragraph>
            ) : null}
        </Space>
    );
};

export default LoanTerms;

const ItemContainer = styled.div({
    display: "flex",
    width: "100%",
});

const ItemTitle = styled.div({
    flex: 1,
});

const ItemContent = styled.div({
    fontWeight: "bold",
});
