import React from 'react';
import moment from "moment-jalaali";
import StyledSlide, { StyledDiv } from "./Slide.styles";
import { Button, Icon } from '../';

type Props = {};

const Slide = ({event}: Props) => {

    const {cover, name, start_date} = event;

    return (
        <StyledSlide>
            <StyledDiv>
                <h6>{name}</h6>
                <div className='mt-1'>
                    <Icon name='calendar' size={15}/>
                    <span className='mr-2'>شروع رویداد</span>
                </div>
                <div className='mt-1'>
                    <Icon name='price-tag' size={15}/>
                    <span className='mr-2'>قیمت بلیت</span>
                </div>
                <Button className='align-self-end mt-4' height={50} width={110} background={'darkBlue'}>
                    ثبت نام
                </Button>
            </StyledDiv>
            <img src={cover.original} alt={cover.name}/>
        </StyledSlide>
    );
};

export default Slide;
