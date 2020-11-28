import React from "react";
import { StyledLink, StyledAnchor } from "./Link.styles";

type Props = {
    isanchor: boolean,
    children: Element,
    path: string,
    className?: string
};

const Link = ({isanchor, children, path, className, ...restProps}: Props) => {
    if (isanchor) {
        return (
            <StyledAnchor className={className} href={path} {...restProps}>
                {children}
            </StyledAnchor>
        );
    }
    return (
        <StyledLink className={className} to={path} {...restProps}>
            {children}
        </StyledLink>
    );
};

Link.defaultProps = {
    isanchor: 1,
    color: 'black'
};

export default Link;