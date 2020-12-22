import React, { useRef } from 'react';
import StyledInput from "./Input.styles";

type Props = {
    className?: string,
    type: string,
    name: string,
    value?: string,
    label?: string,
    placeholder?: string,
    width?: number | string,
    height?: number | string,
    borderSize?: string | number,
    borderColor?: string,
    onChange?: Function,
    size: number | string,
};

const Input = ({onChange, value, ...restProps}: Props) => {

    let inputRef = useRef();

    const handleInputChange = () => {
        if(!!onChange){
            onChange(inputRef);
        }
    };

    return (
        <StyledInput
            {...restProps}
            ref={inputRef}
            onChange={handleInputChange}
        />
    );
};

Input.defaultProps = {
    borderSize: 1,
    borderColor: 'black',
    size: 13
};

export default Input;