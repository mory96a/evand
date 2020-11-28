import React, { useEffect, useState } from 'react';
import StyledSortBy from "./SortBy.styles";
import { Button, Icon, Dropdown } from '../index';

const SortBy = ({sortedBy, sorts, ...restProps}) => {

    const [show, setShow] = useState(false);
    const [selectedOption, setSelected] = useState({name: 'زمان', value: ''});

    const handleClick = () => {
        setShow(!show);
    };

    useEffect(() => {
        sortedBy(selectedOption.value, 'sort');
    }, [selectedOption]);

    const handleSelect = (option) => {
        setSelected(option);
    };

    return (
        <StyledSortBy {...restProps}>
            <Button background={'lightGray'} onClick={handleClick} color={'black'}>
                <div className='d-flex flex-row-reverse justify-content-between align-items-center w-100 px-1'>
                    <Icon name='arrow-down' size={15}/><span className='ml-1'>{selectedOption.name}</span>
                </div>
            </Button>
            {
                show &&
                <Dropdown top={50} className='w-100'>
                    {sorts.map((option, index) => {
                        const isChecked = option.value === selectedOption.value;
                        return (
                            <label key={index}
                                   className='py-2 w-100 d-flex align-items-center justify-content-start border-bottom my-0'
                            >
                                <input
                                    name={option.name}
                                    type="checkbox"
                                    className='mx-1'
                                    checked={isChecked}
                                    onChange={() => {
                                        handleSelect(option);
                                    }}
                                />
                                <span>{option.name}</span>
                            </label>
                        );
                    })}
                </Dropdown>
            }
        </StyledSortBy>
    );
};

export default SortBy;