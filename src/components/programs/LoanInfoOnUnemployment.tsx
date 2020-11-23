import { Alert, Space, Typography } from "antd";
import React from "react";
import QuestionTitle from "../utils/QuestionTitle";

const LoanInfoOnUnemployment: React.FC<{}> = () => {
    const [showContent, setShowContent] = React.useState(false);

    const toggle = () => setShowContent(!showContent);

    return (
        <Space direction="vertical">
            <QuestionTitle
                questionOpen={showContent}
                question="What happens if I become unemployed?"
                onClick={toggle}
            />
            {showContent && (
                <Space direction="vertical">
                    <Alert
                        type="warning"
                        message="Information may be inaccurate"
                    />
                    <Typography.Paragraph>
                        If you ever become unemployed, your loan payment would
                        be paused...
                    </Typography.Paragraph>
                </Space>
            )}
        </Space>
    );
};

export default LoanInfoOnUnemployment;
