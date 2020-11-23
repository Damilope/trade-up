import React, { ReactNode } from "react";
import { Alert, Button } from "antd";
import { RedoOutlined } from "@ant-design/icons";

export interface IDisplayErrorProps {
    message?: ReactNode;
    onReload: () => void;
}

const DisplayError: React.FC<IDisplayErrorProps> = (props) => {
    const { message, onReload } = props;
    const closeText = onReload ? (
        <Button shape="circle" icon={<RedoOutlined />} onClick={onReload} />
    ) : undefined;

    return (
        <Alert showIcon type="error" message={message} closeText={closeText} />
    );
};

export default DisplayError;
