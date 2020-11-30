import React from 'react';
import StyledFiltersForm from "./FiltersForm.styles";
import { Button, Icon, Dropdown } from '../index';

import data from './data';

type FiltersFormProps = {};

type Props = FiltersFormProps;

const FiltersForm = ({takeOptions, handleCheck}: Props) => {

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
                            selectAble={true}
                            multiSelect={false}
                            buttonBackground={'lightGray'}
                            buttonClassName='px-2'
                            takeValues={(filters) => {
                                takeOptions(filters, 'sort');
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
                        selectAble={true}
                        multiSelect={true}
                        buttonBackground={'lightGray'}
                        buttonClassName='px-2'
                        takeValues={(filters) => {
                            takeOptions(filters, 'cities');
                        }}
                    />
                    <Dropdown
                        className='d-flex align-items-center col-12 col-sm-5 col-md-3 my-2 px-0 mx-sm-auto'
                        buttonName='انتخاب موضوع'
                        iconName='arrow-down'
                        dropdownList={data.categories}
                        selectAble={true}
                        multiSelect={true}
                        buttonBackground={'lightGray'}
                        buttonClassName='px-2'
                        takeValues={(filters) => {
                            takeOptions(filters, 'categories');
                        }}
                    />
                    <Dropdown
                        className='d-flex col-12 col-sm-5 col-md-3 my-2 px-0 mx-sm-auto'
                        buttonName='قیمت'
                        iconName='arrow-down'
                        dropdownList={data.price}
                        selectAble={true}
                        multiSelect={false}
                        buttonBackground={'lightGray'}
                        buttonClassName='px-2'
                        takeValues={(filters) => {
                            takeOptions(filters, 'price');
                        }}
                    />
                    <div className='d-flex align-items-center col-12 my-2'>جستجوی پیشرفته</div>
                </div>
            </div>
        </StyledFiltersForm>
    );
};

export default FiltersForm;