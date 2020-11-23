import { Alert, Button, InputNumber, Space, Tag } from "antd";
import React from "react";
import TradeUpAPI from "../../api/api";
import { ITradeProgram, yearsToMonths } from "../../models/tradeProgram";
import QuestionTitle from "../utils/QuestionTitle";

export interface ICalculateRemainingLoanProps {
    program: ITradeProgram;
}

const CalculateRemainingLoan: React.FC<ICalculateRemainingLoanProps> = (
    props
) => {
    const { program } = props;

    const [calculating, setCalculating] = React.useState(false);
    const [remainingPayment, setRemainingPayment] = React.useState(0);
    const [yrs, setYears] = React.useState(undefined);
    const [error, setError] = React.useState<string | null>(null);
    const [showContent, setShowContent] = React.useState(false);

    const toggle = () => setShowContent(!showContent);

    const onChangeYears = (inputYears: any) => {
        setYears(inputYears);
        setError(null);
        setRemainingPayment(0);
    };

    const onCalculate = async () => {
        if (!yrs) {
            return;
        }

        setCalculating(true);

        try {
            const paymentLeft = await TradeUpAPI.calculateLoanPayment({
                principal: program.tuition,
                interest: program.isa_take,
                months: yearsToMonths(yrs!),
            });

            setRemainingPayment(paymentLeft.payment);
        } catch (error) {
            setError("Error calculating payment");
        } finally {
            setCalculating(false);
        }
    };

    let content: React.ReactNode = null;

    if (showContent) {
        const input = (
            <Space>
                <InputNumber
                    value={yrs}
                    min={0}
                    disabled={calculating}
                    onChange={onChangeYears}
                    placeholder="Years"
                />
                <Button
                    type="primary"
                    disabled={!yrs}
                    loading={calculating}
                    onClick={onCalculate}
                >
                    {calculating ? "Calculating..." : "Calculate"}
                </Button>
            </Space>
        );

        const remainingPaymentNode = remainingPayment ? (
            <div>
                <span>After </span>
                <Tag style={{ margin: "0 8px" }}>{yrs}</Tag>
                <span>{yrs === 1 ? "year" : "years"}, you will have </span>
                <Tag style={{ margin: "0 8px" }}>${remainingPayment}</Tag>
                <span>left</span>
            </div>
        ) : null;

        content = (
            <Space size={16} direction="vertical">
                {input}
                {error && showContent ? (
                    <Alert type="error" message={error} />
                ) : (
                    remainingPaymentNode
                )}
            </Space>
        );
    }

    return (
        <Space direction="vertical" size={16}>
            <QuestionTitle
                questionOpen={showContent}
                question="How much would I have left after?"
                onClick={toggle}
            />
            {content}
        </Space>
    );
};

export default CalculateRemainingLoan;
