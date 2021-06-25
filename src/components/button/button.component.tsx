import React from "react";

export interface Props {
    border?: string;
    color?: string;
    children?: React.ReactNode;
    height?: string;
    onClick: () => void;
    radius?: string
    width?: string;
}

export const ButtonComponent: React.FC<Props> = (props: Props) => {
    const {
        border,
        color,
        children,
        height,
        onClick,
        radius,
        width
    } = props;
    return (
        <button
            onClick={onClick}
            className={"divView"}
            style={{
                backgroundColor: color,
                border,
                borderRadius: radius,
                height,
                width
            }}
        >
            {children}
        </button>
    );
}