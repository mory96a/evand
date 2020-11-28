import React, { useState } from 'react';
import StyledFiltersForm from "./FiltersForm.styles";
import { Button, Icon, SortBy, MultiSelectFilter, SortByPrice } from '../index';
import { optionsToQueryString } from '../../utils/functions';
import data from './data';

type FiltersFormProps = {};

type Props = FiltersFormProps;

const FiltersForm = ({takeOptions}: Props) => {

    const [options, setOptions] = useState({
        cities: '',
        sort: '',
        categories: '',
        prices: '',
        online: false
    });

    takeOptions(optionsToQueryString(options));

    const handleSortBy = (option, sortName) => {
        setOptions({
            ...options,
            [sortName]: option
        });
    };

    const handleFilteredBy = (filters, filterName) => {
        setOptions({
            ...options,
            [filterName]: filters
        });
    };
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
                        <SortBy sorts={data.sorts} sortedBy={handleSortBy}/>
                    </div>
                    <div className='d-flex align-items-center col-12 col-md-6 col-lg-2 col-xl-2 my-2'>
                        <input type="checkbox"/>
                        <span className='mx-1'>رویداد های آنلاین</span>
                    </div>
                </div>
                <div className="row">
                    <div className='d-flex align-items-center col-12 col-sm-3 my-2 col-md-2'>نوع فیلتر</div>
                    <MultiSelectFilter
                        className='d-flex align-items-center col-12 col-sm-6 col-md-3 my-2 px-0'
                        placeHolder='انتخاب شهر'
                        filterOptions={data.cities}
                        filteredBy={handleFilteredBy}
                        filterName='cities'
                    />
                    <MultiSelectFilter
                        className='d-flex align-items-center col-12 col-sm-5 col-md-3 my-2 px-0 mx-sm-auto col-md-3'
                        placeHolder='موضوع'
                        filterOptions={data.categories}
                        filteredBy={handleFilteredBy}
                        filterName='categories'
                    />
                    <SortByPrice
                        className='d-flex align-items-center col-12 col-sm-5 col-md-3 my-2 px-0 mx-sm-auto col-md-3'
                        prices={data.prices}
                        sortedBy={handleSortBy}
                    />
                    <div className='d-flex align-items-center col-12 my-2'>جستجوی پیشرفته</div>
                </div>
            </div>
        </StyledFiltersForm>
    );
};

export default FiltersForm;