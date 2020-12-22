import React from 'react';
import StyledWrapper from "./EventsWrapper.styles";
import { EventsSection } from '../';

type Props = {};

const EventsWrapper = ({events}: Props) => {
    return (
        <StyledWrapper>
            <div className="container w-100">
                <div className='row'>
                    {
                        !!events.length ? events.map((event, index) => {
                            return (
                                <EventsSection
                                    key={index}
                                    event={event}
                                />
                            );
                        }) : null
                    }
                </div>
            </div>
        </StyledWrapper>
    );
};

export default EventsWrapper;