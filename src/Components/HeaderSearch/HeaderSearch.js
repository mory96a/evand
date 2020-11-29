import React, { useState } from 'react';
import StyledHeaderSearch from "./HeaderSearch.styles";
import { Button, Icon } from '../index';

type Props = {};

const HeaderSearch = () => {

    const [hidden, setHidden] = useState(true);
    const [inputValue, setValue] = useState('');
    const formId = !hidden ? 'show-input' : 'hidden-input';

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!!inputValue) {

        } else {
            setHidden(false);
        }
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <StyledHeaderSearch>
            <form id={formId} onSubmit={handleSubmit}>
                <Button id='button' width={70} height={70}>
                    <Icon name='search' size={15} color={'black'}/>
                </Button>
                <input type="text" placeholder='جستجو' onChange={handleChange} value={inputValue}/>
            </form>
        </StyledHeaderSearch>
    );
};

export default HeaderSearch;