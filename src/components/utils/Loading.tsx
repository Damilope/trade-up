import React from "react";

export interface ILoadingProps {
    message?: React.ReactNode;
}

const Loading: React.FC<ILoadingProps> = (props) => {
    const { message } = props;
    return <div>{message}</div>;
};

Loading.defaultProps = {
    message: "Loading...",
};

export default Loading;
