import React from 'react';
import StyledSearchBox from "./SearchBox.styles";
import { Button, Icon, Input } from "../../index";

type Props = {
    className?: string,
    buttonClassName?: string,
    inputClassName?: string,
    buttonName?: string,
    iconName?: string,
    width?: string | number,
    height?: string | number,
    buttonWidth?: string | number,
    buttonBackground?: string,
    buttonColor?: string,
    handleChange?: Function,

};

const SearchBox = ({buttonName, iconName, ...restProps}: Props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.elements.input.value;
    };

    return (
        <StyledSearchBox className={restProps.className} height={restProps.height} onSubmit={handleSubmit}>
            <Input
                className={`flex-grow-1 h-100 ${restProps.inputClassName}`}
                type="text"
                name='input'
                onChange={restProps.handleChange}
                placeholder=''
            />
            <Button
                className={`h-100 ${restProps.buttonClassName}`}
                width={restProps.buttonWidth}
                background={restProps.buttonBackground}
                color={restProps.buttonColor}
            >
                <span>{!!buttonName && buttonName}</span>
                <Icon id='rotate-icon' name={iconName} color={restProps.buttonColor}/>
            </Button>
        </StyledSearchBox>
    );
};

export default SearchBox;