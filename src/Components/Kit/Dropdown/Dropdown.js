import React, { useState } from 'react';
import StyledDropdown, { StyledContent } from "./Dropdown.styles";
import { Button, Icon } from "../../index";
import useClickOutSide from "../../Hooks/useClickOutSide";

type Props = {
    className?: string,
    buttonClassName?: string,
    contentClassName?: string,
    buttonName?: string,
    iconName?: string,
    dropdownList: Array,
    multiSelect: boolean,
    buttonBackground?: string,
    buttonColor?: string,
    takeValues: Function,
    top?: number | string,
    maxHeight?: number | string
};

const Dropdown = ({buttonName, dropdownList, selectAble, multiSelect, ...restProps}: Props) => {

    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };

    const handleSelect = (selectedItem) => {
        restProps.takeValues(selectedItem);
    };

    let buttonPlaceHolder;
    if (!!buttonName) {
        if (multiSelect) {
            buttonPlaceHolder = <span>{buttonName} {!!restProps.defaultSelected.length && (': ' +  restProps.defaultSelected.length)}</span>
        } else {
            buttonPlaceHolder = <span>{buttonName}: {restProps.defaultSelected[0].name}</span>
        }
    } else {
        buttonPlaceHolder = <span>{restProps.defaultSelected[0].name}</span>
    }

    let dropdownRef = useClickOutSide(setShow);

    return (
        <StyledDropdown className={restProps.className} ref={dropdownRef} isOpen={show}>
            <Button
                className={`${restProps.buttonClassName}`}
                color={restProps.buttonColor}
                background={restProps.buttonBackground}
                onClick={handleClick}
            >
                <span>{buttonPlaceHolder}</span>
                <Icon id='rotate-icon' name={restProps.iconName}/>
            </Button>
            {
                show &&
                <StyledContent className={restProps.contentClassName} top={restProps.top}
                               maxHeight={restProps.maxHeight}>
                    {
                        dropdownList.map((item, index) => {
                            const isChecked = !!restProps.defaultSelected.find((selectedOption) => {
                                return selectedOption.name === item.name;
                            });
                            return (
                                <label
                                    key={index}
                                    className='py-2 w-100 d-flex align-items-center justify-content-start border-bottom my-0'
                                >
                                    <input
                                        name={item.name}
                                        type="checkbox"
                                        className='mx-1'
                                        checked={isChecked}
                                        onChange={() => {
                                            handleSelect(item);
                                        }}
                                    />
                                    <span>{item.name}</span>
                                </label>
                            );
                        })
                    }
                </StyledContent>
            }
        </StyledDropdown>
    );
};

Dropdown.defaultProps = {
    iconName: 'arrow-down',
    top: 50,
    maxHeight: 228
};

export default Dropdown;


