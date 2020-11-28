import React, { useEffect, useState } from 'react';
import StyledMultiSelectFilter from "./MultiSelectFilter.styles";
import { Dropdown, Button, Icon } from '../index';

type Props = {};

const MultiSelectFilter = ({placeHolder, filterOptions, filteredBy, filterName, ...restProps}: Props) => {

    const [show, setShow] = useState(false);
    const [selectedOptions, setSelected] = useState([]);

    const handleClick = () => {
        setShow(!show);
    };

    const handleSelect = (option) => {
        const exist = selectedOptions.findIndex((selected) => {
            return selected === option;
        });
        if (exist !== -1) {
            let newSelectedOptions = selectedOptions;
            newSelectedOptions.splice(exist, 1);
            setSelected(newSelectedOptions);
        } else {
            setSelected([
                ...selectedOptions,
                option
            ]);
        }
    };
    useEffect(() => {
        filteredBy(selectedOptions, filterName);
    }, [selectedOptions]);

    const numberOfSelected = selectedOptions.length ? ` :${selectedOptions.length}` : null;
    return (
        <StyledMultiSelectFilter {...restProps}>
            <Button
                className='d-flex flex-row-reverse justify-content-between w-100 px-2'
                background={'lightGray'}
                color={'black'}
                onClick={handleClick}
            >
                <Icon name='arrow-down' size={15}/><span className='ml-1'>{placeHolder} {numberOfSelected}</span>
            </Button>
            {
                show &&
                <Dropdown id='dropdown' top={50} className='w-100'>
                    {
                        filterOptions.map((option, index) => {
                            const isChecked = !!selectedOptions.find((selectedOption) => {
                                return selectedOption === option;
                            });
                            return (
                                <label
                                    className='py-2 w-100 d-flex align-items-center justify-content-start border-bottom my-0'
                                    key={index}
                                >
                                    <input
                                        name={option}
                                        type="checkbox"
                                        className='mx-1'
                                        checked={isChecked}
                                        onChange={() => {
                                            handleSelect(option);
                                        }}
                                    />
                                    <span>{option}</span>
                                </label>
                            );
                        })
                    }
                </Dropdown>
            }
        </StyledMultiSelectFilter>
    );
};

export default MultiSelectFilter;