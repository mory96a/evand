import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadEvents } from '../../redux/modules/events/eventsReducer';
import StyledEvent, { StyledHeader } from "./Event.styles";

const Event = ({loadEvent, event, location}) => {

    useEffect(() => {
        loadEvent(location.pathname.slice(7));
    }, []);

    const {cover} = event;
    console.log(cover);

    return (
        <StyledEvent>
            <StyledHeader>

            </StyledHeader>
        </StyledEvent>
    );
};

const mapStateToProps = (state) => ({
    event: state.events.data
})

export default connect(mapStateToProps, {loadEvent: loadEvents})(Event);