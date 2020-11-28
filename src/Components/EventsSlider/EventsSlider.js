import React from 'react';
import StyledEventsSlider from "./EventsSlider.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "../index";

type Props = {
    events: Array
};

const EventsSlider = ({events}: Props) => {
    const settings = {
        className: 'slick-slider',
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <StyledEventsSlider>
            <Slider {...settings} >
                {events.map((event, index) => (
                    <Slide key={index} event={event}/>
                ))}
            </Slider>
        </StyledEventsSlider>
    );
};

export default EventsSlider;