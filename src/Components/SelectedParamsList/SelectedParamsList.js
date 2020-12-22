import React from 'react';
import StyledSelectedParamsList, { StyledOption } from "./SelectedParamsList.styles";
import { Text, Button, Icon } from '../Kit';

type Props = {};

const defaultOptions = {
    price: [{name: 'همه', value: ''}],
    sort: [{name: 'محبوب ترین', value: ''}],
    online: [{name: 'online', value: ''}],
};

const SelectedParamsList = ({options, eventsCount, handleRemoveSelectedOption}: Props) => {

    const keys = Object.keys(options);

    const selected = keys.reduce((acc, curr) => {
        const optionsRelatedToKey = options[curr];
        let filteredOptions = optionsRelatedToKey.filter((option) => {
            return option.name !== 'unknown' && option.value !== '';
        });
        return [
            ...acc,
            ...filteredOptions
        ];
    }, []);

    const handleRemoveOptions = (optionToRemove) => {

        const foundedKey = keys.find((key) => {
            const foundedOption = options[key].find((option) => {
                return option.name === option.name && option.value === option.value;
            });
            if (!!foundedOption) return key;
        });

        if(!!defaultOptions[foundedKey]){
            console.log('are');
        }

        const newOptions = options[foundedKey].filter((option) => {
            return option.name !== optionToRemove.name && option.value !== optionToRemove.value;
        });
        // handleRemoveSelectedOption(option);
    };

    return (
        <StyledSelectedParamsList>
            <Text hidden={!!!selected.length}>{eventsCount} رویداد یافت شد.</Text>
            {
                selected.map((option, index) => {
                    return (
                        <StyledOption hidden={!!!selected.length} key={index} className='m-2'
                                      onClick={() => handleRemoveOptions(option)}>
                            <Text className='ml-2' color={'white'}>{option.name}</Text>
                            <Text color={'white'}>X</Text>
                        </StyledOption>
                    );
                })
            }
            <Button hidden={!!!selected.length} className='my-2 bg-white'>
                <Icon name={'bin'}/>
                <Text className='mx-2'> پاک سازی فیلترها</Text>
            </Button>
        </StyledSelectedParamsList>
    );
};

export default SelectedParamsList;