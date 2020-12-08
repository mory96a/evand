import React from 'react';
import moment from "moment-jalaali";
import StyledSlide, { StyledDiv } from "./Slide.styles";
import { Button, Icon, Text } from '../Kit';

type Props = {
    event: Object
};

//@todo edit price

const Slide = ({event}: Props) => {

    const {cover, name, start_date} = event;
    let persianDate = moment(start_date, 'YYYY/MM/DD').format('dddd d jMMMM ساعت MM:HH');

    return (
        <StyledSlide>
            <StyledDiv>
                <Text type='h6' className='my-2'>{name}</Text>
                <div className='mt-1'>
                    <Icon name='calendar' size={15}/>
                    <Text className='mr-2 my-2'>{persianDate}</Text>
                </div>
                <div className='mt-1'>
                    <Icon name='price-tag' size={15}/>
                    <Text className='mr-2'>قیمت بلیت</Text>
                </div>
                <Button className='align-self-end mt-4' height={50} width={110} background={'darkBlue'} color={'white'}>
                    ثبت نام
                </Button>
            </StyledDiv>
            <img src={cover.original} alt={cover.name}/>
        </StyledSlide>
    );
};

export default Slide;
