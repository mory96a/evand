import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import StyledFiltersForm from "./FiltersForm.styles";
import { Dropdown, Form, Input } from '../index';
import {
    optionsToQueryString,
    parseQueryParams,
    createDefaultFiltersObject
} from '../../utils/functions';

import data from './data';

type FiltersFormProps = {};

type Props = FiltersFormProps;

const FiltersForm = ({handleCheck, takeOptions, location}: Props) => {

    let history = useHistory();

    const queryObject = parseQueryParams(location.search);

    const defaultOptions = {
        cities: createDefaultFiltersObject(queryObject.cities, data.cities, []),
        categories: createDefaultFiltersObject(queryObject.categories, data.categories, []),
        price: createDefaultFiltersObject(queryObject.price, data.price, [{
            name: 'همه',
            value: ''
        }]),
        sort: createDefaultFiltersObject(queryObject.sort, data.sorts, [{
            name: 'محبوب ترین',
            value: ''
        }]),
        online: (!!queryObject.online && queryObject.online[0] === 'yes') ? [{
            name: 'online',
            value: 'yes'
        }] : [{name: 'online', value: ''}]
    };

    const [options, setOptions] = useState(defaultOptions);

    const handleTakeValue = (filterName, selectedItem, isMulti) => {
        const exist = options[filterName].findIndex((selected) => {
            return selected.name === selectedItem.name;
        });
        if (exist !== -1) {
            if (isMulti) {
                let newSelectedOptions = options[filterName];
                newSelectedOptions.splice(exist, 1);
                setOptions({
                    ...options,
                    [filterName]: [...newSelectedOptions]
                });
            }
        } else {
            if (isMulti) {
                setOptions({
                    ...options,
                    [filterName]: [...options[filterName], selectedItem]
                });
            } else {
                setOptions({
                    ...options,
                    [filterName]: [selectedItem]
                });
            }
        }
    };

    useEffect(() => {
        let optionsString = optionsToQueryString(options);
        const defaultParams = optionsString.length ? '&per_page=12' : '?per_page=12';
        const params = optionsString.length ? ('?' + optionsString) : '';
        history.replace(`/events${params}`);
        takeOptions(params + defaultParams);
    }, [options]);

    const handleSubmitSearch = (value) => {
        //
    };

    const handleOnlineInput = (inputRef) => {
        const isChecked = inputRef.current.checked ? 'yes' : '';
        setOptions({
            ...options,
            online: [{
                name: 'online',
                value: isChecked
            }]
        });
    };

    return (
        <StyledFiltersForm>
            <div className='container'>
                <div className='row'>
                    <Form
                        className='col-12 col-lg-6 col-xl-6 my-2 d-flex flex-row justify-content-between'
                        inputList={[
                            {
                                className: 'flex-grow-1 h-100',
                                type: 'text',
                                name: 'search',
                                placeholder: 'عنوان،شهر و یا موضوع رویداد مورد نظرتان را جست و جو کنید',
                                borderSize: 2,
                                borderColor: 'darkBlue'
                            }
                        ]}
                        buttonClassName='justify-content-between px-2'
                        buttonName='جستجو'
                        buttonBackground={'darkBlue'}
                        buttonColor={'white'}
                        height={50}
                        iconName='search'
                        buttonWidth={130}
                        onSubmit={handleSubmitSearch}
                    />
                    <div className='d-flex align-items-center col-12 col-md-6 col-lg-4 col-xl-4 my-2'>
                        <span className='ml-3'>نوع مرتب سازی</span>
                        <Dropdown
                            className='sort-by my-2 px-0'
                            iconName='arrow-down'
                            dropdownList={data.sorts}
                            multiSelect={false}
                            buttonBackground={'lightGray'}
                            buttonClassName='d-flex align-items-center justify-content-between w-100 h-100 px-2'
                            defaultSelected={options.sort}
                            takeValues={(selectedItem) => {
                                handleTakeValue('sort', selectedItem, false)
                            }}
                        />
                    </div>
                    <div className='d-flex align-items-center col-12 col-md-6 col-lg-2 col-xl-2 my-2'>
                        <Input
                            type='checkbox'
                            name='onlineEvents'
                            checked={options.online[0].value === 'yes'}
                            onChange={(inputRef) => {
                                handleOnlineInput(inputRef);
                            }}
                        />

                        <span className='mx-1'>رویداد های آنلاین</span>
                    </div>
                </div>
                <div className="row">
                    <div className='d-flex align-items-center col-12 col-sm-3 my-2 col-md-2'>نوع فیلتر</div>
                    <Dropdown
                        className='d-flex align-items-center col-12 col-sm-6 col-md-3 my-2 px-0'
                        buttonName='انتخاب شهر'
                        iconName='arrow-down'
                        dropdownList={data.cities}
                        multiSelect={true}
                        buttonBackground={'lightGray'}
                        buttonClassName='d-flex align-items-center justify-content-between w-100 h-100 px-2'
                        defaultSelected={options.cities}
                        takeValues={(selectedItem) => {
                            handleTakeValue('cities', selectedItem, true)
                        }}
                    />
                    <Dropdown
                        className='d-flex align-items-center col-12 col-sm-5 col-md-3 my-2 px-0 mx-sm-auto'
                        buttonName='انتخاب موضوع'
                        iconName='arrow-down'
                        dropdownList={data.categories}
                        multiSelect={true}
                        buttonBackground={'lightGray'}
                        buttonClassName='d-flex align-items-center justify-content-between w-100 h-100 px-2'
                        defaultSelected={options.categories}
                        takeValues={(selectedItem) => {
                            handleTakeValue('categories', selectedItem, true)
                        }}
                    />
                    <Dropdown
                        className='d-flex col-12 col-sm-5 col-md-3 my-2 px-0 mx-sm-auto'
                        buttonName='قیمت'
                        iconName='arrow-down'
                        dropdownList={data.price}
                        multiSelect={false}
                        buttonBackground={'lightGray'}
                        buttonClassName='d-flex align-items-center justify-content-between w-100 h-100 px-2'
                        defaultSelected={options.price}
                        takeValues={(selectedItem) => {
                            handleTakeValue('price', selectedItem, false)
                        }}
                    />
                    <div className='d-flex align-items-center col-12 my-2'>جستجوی پیشرفته</div>
                </div>
            </div>
        </StyledFiltersForm>
    );
};

export default FiltersForm;