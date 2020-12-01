import React, { useEffect, useState } from 'react';
import StyledFiltersForm from "./FiltersForm.styles";
import { Button, Icon, Dropdown } from '../index';
import {
    optionsToQueryString,
    parseQueryParams,
    createDefaultFiltersObject
} from '../../utils/functions';

import data from './data';
import { useHistory } from "react-router";

type FiltersFormProps = {};

type Props = FiltersFormProps;

const FiltersForm = ({handleCheck, takeOptions, location}: Props) => {

    let history = useHistory();

    const queryObject = parseQueryParams(location.search);
    const defaultOptions = {
        cities: queryObject.cities ? createDefaultFiltersObject(queryObject.cities, data.cities) : [],
        categories: queryObject.categories ? createDefaultFiltersObject(queryObject.categories, data.categories) : [],
        price: queryObject.price ? createDefaultFiltersObject(queryObject.price, data.price) : [{
            name: 'همه',
            value: ''
        }],
        sort: queryObject.sort ? createDefaultFiltersObject(queryObject.sort, data.sorts) : [{
            name: 'محبوب ترین',
            value: ''
        }]
    };

    const [options, setOptions] = useState(defaultOptions);

    const handleTakeValue = (filterName, filters) => {
        setOptions({
            ...options,
            [filterName]: filters
        });
    };

    useEffect(() => {
        let optionsString = optionsToQueryString(options)
        const params = optionsString.length ? ('?' + optionsString) : '';
        history.replace(`/events${params}`);
        //takeOptions(optionsToQueryString(options));
    }, [options]);

    return (
        <StyledFiltersForm>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex align-items-center col-12 col-lg-6 col-xl-6 my-2' id='search-box'>
                        <input
                            className='ml-1 flex-grow-1'
                            type='text'
                            placeholder='عنوان،شهر و یا موضوع رویداد مورد نظرتان را جست و جو کنید.'
                        />
                        <Button
                            height={40}
                            width={80}
                            background={'darkBlue'}
                            color={'black'}
                        >
                            <Icon name='search' size={15} color={'white'}/>
                        </Button>
                    </div>
                    <div className='d-flex align-items-center col-12 col-md-6 col-lg-4 col-xl-4 my-2'>
                        <span className='ml-3'>نوع مرتب سازی</span>
                        <Dropdown
                            className='sort-by my-2 px-0'
                            iconName='arrow-down'
                            dropdownList={data.sorts}
                            multiSelect={false}
                            buttonBackground={'lightGray'}
                            buttonClassName='px-2'
                            defaultSelected={options.sort}
                            takeValues={(filters) => {
                                handleTakeValue('sort', filters)
                            }}
                        />
                    </div>
                    <div className='d-flex align-items-center col-12 col-md-6 col-lg-2 col-xl-2 my-2'>
                        <input type="checkbox" onChange={(event) => {
                            handleCheck(event)
                        }}/>
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
                        buttonClassName='px-2'
                        defaultSelected={options.cities}
                        takeValues={(filters) => {
                            handleTakeValue('cities', filters)
                        }}
                    />
                    <Dropdown
                        className='d-flex align-items-center col-12 col-sm-5 col-md-3 my-2 px-0 mx-sm-auto'
                        buttonName='انتخاب موضوع'
                        iconName='arrow-down'
                        dropdownList={data.categories}
                        multiSelect={true}
                        buttonBackground={'lightGray'}
                        buttonClassName='px-2'
                        defaultSelected={options.categories}
                        takeValues={(filters) => {
                            handleTakeValue('categories', filters)
                        }}
                    />
                    <Dropdown
                        className='d-flex col-12 col-sm-5 col-md-3 my-2 px-0 mx-sm-auto'
                        buttonName='قیمت'
                        iconName='arrow-down'
                        dropdownList={data.price}
                        multiSelect={false}
                        buttonBackground={'lightGray'}
                        buttonClassName='px-2'
                        defaultSelected={options.price}
                        takeValues={(filters) => {
                            handleTakeValue('price', filters)
                        }}
                    />
                    <div className='d-flex align-items-center col-12 my-2'>جستجوی پیشرفته</div>
                </div>
            </div>
        </StyledFiltersForm>
    );
};

export default FiltersForm;