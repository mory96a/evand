import React from 'react';
import StyledForm from "./Form.styles";
import { Button, Icon, Input } from "../../index";

type Props = {
    className?: string,
    buttonClassName?: string,
    inputClassName?: string,
    inputList: Array,
    buttonName?: string,
    iconName?: string,
    width?: string | number,
    height?: string | number,
    buttonHeight?: string | number,
    buttonWidth?: string | number,
    buttonBackground?: string,
    buttonColor?: string,
    handleChange?: Function,
    onSubmit: Function,
};


const Form = ({inputList,onSubmit, ...restProps}: Props) => {

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const formValues = inputList.reduce((acc, curr) => {
            const value = event.target.elements[curr.name].value;
            return {
                ...acc,
                [curr.name]: value
            };
        }, {});
        onSubmit(formValues);
    };

    const handleChangeInput = (event) => {
        !!restProps.handleChange && restProps.handleChange(event);
    };

    return (
        <StyledForm className={restProps.className} height={restProps.height} width={restProps.width}
                    onSubmit={handleSubmitForm}>
            {
                inputList.map((input, index) => {
                    return (
                        <Input
                            key={index}
                            className={input.className}
                            type={input.type}
                            name={input.name}
                            value={input.value}
                            label={input.label}
                            placeholder={input.placeholder}
                            onChange={handleChangeInput}
                            borderSize={input.borderSize}
                            borderColor={input.borderColor}
                        />
                    );
                })
            }

            <Button
                className={`h-100 ${restProps.buttonClassName}`}
                width={restProps.buttonWidth}
                height={restProps.buttonHeight}
                background={restProps.buttonBackground}
                color={restProps.buttonColor}
            >
                <span>{!!restProps.buttonName && restProps.buttonName}</span>
                <Icon id='rotate-icon' name={restProps.iconName} color={restProps.buttonColor}/>
            </Button>
        </StyledForm>
    );
};

export default Form;