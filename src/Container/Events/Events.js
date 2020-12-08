import React from 'react';
import StyledEvents from "./Events.styles";
import { connect } from 'react-redux';
import { loadEvents } from "../../redux/modules/events/eventsReducer";
import { EventsSlider, FiltersForm, EventsWrapper } from '../../Components';
import { loadCities } from "../../redux/modules/cities/cities";
import { slideEvents } from './slideEvents';

const Events = ({loadEvents, events, loadCities, cities, location}) => {

    const handleTakeOptions = (params) => {
        loadEvents(params);
    };

    return (
        <StyledEvents>
            <EventsSlider events={slideEvents}/>
            <FiltersForm location={location} takeOptions={handleTakeOptions}/>
            <EventsWrapper events={events.data}/>
        </StyledEvents>
    );
};

const mapStateToProps = (state) => ({
    events: state.events.data,
    cities: state.cities
});

export default connect(mapStateToProps, {loadEvents: loadEvents, loadCities: loadCities})(Events);