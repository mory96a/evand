import React from "react";
import StyledIcon from "./Icon.styles";

type Props = {
    name: string,
    size?: number | string,
    color?: string,
    children?: Element
};

const Icon = ({name, children, ...restProps}: Props) => {
    return (
        <StyledIcon className={`icon-${name}`} {...restProps}>
            {children}
        </StyledIcon>
    );
};

Icon.defaultProps = {
    color: 'black',
    size : '15px'
};

export default Icon;