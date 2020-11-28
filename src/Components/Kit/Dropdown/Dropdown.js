import React from 'react';
import StyledDropdown from "./Dropdown.styles";

type Props = {
    top: number | string,
    children: Element
};

const Dropdown = (props: Props) => {
    return (
        <StyledDropdown {...props}>
            {props.children}
        </StyledDropdown>
    );
};

export default Dropdown;