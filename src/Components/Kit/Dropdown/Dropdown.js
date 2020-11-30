import React, { useEffect, useRef, useState } from 'react';
import StyledDropdown, { StyledContent } from "./Dropdown.styles";
import { Button, Icon } from "../../index";

type Props = {
    className?: string,
    buttonName?: string,
    iconName?: string,
    dropdownList: Array,
    selectAble: boolean,
    multiSelect?: boolean,
    buttonBackground?: string,
    buttonColor?: string,
    buttonClassName?: string,
    takeValues?: Function,
    showSelectedInPlaceHolder?: boolean,
    showNumberOfSelected?: boolean,
    handleClick?: Function
};

const Dropdown = ({buttonName, dropdownList, selectAble, multiSelect, ...restProps}: Props) => {

    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };

    const [selectedOptions, setSelected] = useState(() => {
        if (selectAble) {
            if (!multiSelect) {
                return dropdownList[0];
            } else {
                return [];
            }
        } else {
            return null;
        }
    });

    useEffect(() => {
        if (selectAble) {
            let values;
            if (multiSelect) {
                values = selectedOptions.map((option) => {
                    return option.value;
                });
            } else {
                values = selectedOptions.value;
            }
            restProps.takeValues(values);
        }
    }, [selectedOptions]);

    const handleSelect = (selectedItem) => {
        if (multiSelect) {
            const exist = selectedOptions.findIndex((selected) => {
                return selected.name === selectedItem.name;
            });
            if (exist !== -1) {
                let newSelectedOptions = selectedOptions;
                newSelectedOptions.splice(exist, 1);
                setSelected([
                    ...newSelectedOptions
                ]);
            } else {
                setSelected([
                    ...selectedOptions,
                    selectedItem
                ]);
            }
        } else {
            setSelected(selectedItem);
        }
    }

    let placeHolder = '';
    if (selectAble) {
        if (multiSelect) {
            placeHolder = selectedOptions.length ? `: ${selectedOptions.length}` : null;
        } else if (!multiSelect) {
            placeHolder = !!selectedOptions.name.length ? `: ${selectedOptions.name}` : null;
            if (!!!buttonName) {
                placeHolder = !!selectedOptions.name.length ? `${selectedOptions.name}` : null;
            }
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
                    {!!buttonName ? <span>{buttonName}{placeHolder}</span> : <span>{placeHolder}</span>}
                    {!!restProps.iconName && <Icon name={restProps.iconName}/>}
                </div>
            </Button>
            {
                show &&
                <StyledContent>
                    {
                        dropdownList.map((item, index) => {
                            if (selectAble) {
                                let isChecked;
                                if (multiSelect) {
                                    isChecked = !!selectedOptions.find((selectedOption) => {
                                        return selectedOption.name === item.name;
                                    });
                                } else {
                                    isChecked = item.value === selectedOptions.value;
                                }

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
                            }
                            return (
                                <label
                                    key={index}
                                    className='py-2 px-2 w-100 d-flex align-items-center justify-content-start border-bottom my-0'
                                    onClick={() => {
                                        handleClick(item);
                                    }}
                                >
                                    <span>{item}</span>
                                </label>
                            )
                        })
                    }
                </StyledContent>
            }
        </StyledDropdown>
    );
};

export default Dropdown;

