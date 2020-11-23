import { Space, Typography } from "antd";
import React from "react";
import { ITradeProgram, monthsToYears } from "../../models/tradeProgram";
import CalculateRemainingLoan from "./CalculateRemainingLoan";
import LoanInfoOnUnemployment from "./LoanInfoOnUnemployment";
import LoanTerms from "./LoanTerms";
import ProjectedSalarySlider from "./ProjectedSalarySlider";
import ProjectSalaryToggle from "./ProjectedSalaryToggle";
import styled from "@emotion/styled";

export interface ITradeProgramProps {
    program: ITradeProgram;
}

const TradeProgram: React.FC<ITradeProgramProps> = (props) => {
    const { program } = props;

    const [showSlider, setShowSlider] = React.useState(false);
    const [projectedSalary, setProjectedSalary] = React.useState(
        program.typical_salary
    );

    const toggleSlider = React.useCallback(() => setShowSlider(!showSlider), [
        showSlider,
    ]);

    let monthlyPayment = program.monthlyPayment;
    const numLoanYears = monthsToYears(program.isa_length);
    const isSalaryLowerThanThreshold = projectedSalary < program.isa_threshold;

    if (isSalaryLowerThanThreshold) {
        monthlyPayment = 0;
    }

    return (
        <Space direction="vertical" size={24} style={{ width: "100%" }}>
            <Typography.Title level={4}>{program.name}</Typography.Title>
            {showSlider && (
                <SliderContainer>
                    <ProjectedSalarySlider
                        programAnnualIncome={program.typical_salary}
                        projectedSalary={projectedSalary}
                        onChangeProjectedSalary={setProjectedSalary}
                    />
                </SliderContainer>
            )}
            <LoanTerms
                annualIncome={projectedSalary}
                monthlyPayment={monthlyPayment}
                numLoanYears={numLoanYears}
                threshold={program.isa_threshold}
                tuition={program.tuition}
                showSalaryLowerThanThresholdMsg={isSalaryLowerThanThreshold}
            />
            <CalculateRemainingLoan program={program} />
            <LoanInfoOnUnemployment />
            <ProjectSalaryToggle
                isOpen={showSlider}
                onToggleProjectedSalarySlider={toggleSlider}
            />
        </Space>
    );
};

export default TradeProgram;

const SliderContainer = styled.div({
    marginBottom: "48px",
});
