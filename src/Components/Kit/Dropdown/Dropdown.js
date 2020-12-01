import React, { useEffect, useRef, useState } from 'react';
import StyledDropdown, { StyledContent } from "./Dropdown.styles";
import { Button, Icon } from "../../index";

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
    takeValues?: Function,
    showSelectedInPlaceHolder?: boolean,
    showNumberOfSelected?: boolean,
};

const Dropdown = ({buttonName, dropdownList, selectAble, multiSelect, ...restProps}: Props) => {

    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };

    const [selectedOptions, setSelected] = useState(restProps.defaultSelected);

    useEffect(() => {
        const values = selectedOptions.map((option) => {
            return option
        });
        restProps.takeValues(values);
    }, [selectedOptions]);

    const handleSelect = (selectedItem) => {
        const exist = selectedOptions.findIndex((selected) => {
            return selected.name === selectedItem.name;
        });
        if (exist !== -1) {         //exist
            if (multiSelect) {
                let newSelectedOptions = selectedOptions;
                newSelectedOptions.splice(exist, 1);
                setSelected([
                    ...newSelectedOptions
                ]);
            }
        } else {            //not exist
            if (multiSelect) {
                setSelected([
                    ...selectedOptions,
                    selectedItem
                ]);
            } else {
                setSelected([selectedItem]);
            }
        }
    };

    let shoSelectedItem = '';
    if (multiSelect) {
        shoSelectedItem = selectedOptions.length ? `: ${selectedOptions.length}` : null;
    } else {
        shoSelectedItem = !!selectedOptions[0].name.length ? `: ${selectedOptions[0].name}` : null;
        if (!!!buttonName) {
            shoSelectedItem = !!selectedOptions[0].name.length ? `${selectedOptions[0].name}` : null;
        }
    }


    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if (!dropdownRef.current.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    });

    return (
        <StyledDropdown className={restProps.className} ref={dropdownRef}>
            <Button
                onClick={handleClick}
                className={`w-100 h-100 ${restProps.buttonClassName}`} color={restProps.buttonColor}
                background={restProps.buttonBackground}
            >
                <div
                    className={`d-flex ${!!restProps.iconName ? 'justify-content-between' : 'justify-content-center'} 
                    align-items-center w-100 h-100`}
                >
                    {!!buttonName ? <span>{buttonName}{shoSelectedItem}</span> : <span>{shoSelectedItem}</span>}
                    {!!restProps.iconName && <Icon name={restProps.iconName}/>}
                </div>
            </Button>
            {
                show &&
                <StyledContent>
                    {
                        dropdownList.map((item, index) => {
                            const isChecked = !!selectedOptions.find((selectedOption) => {
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

export default Dropdown;

