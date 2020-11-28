import React, { useEffect, useState } from 'react';
import StyledEvents from "./Events.styles";
import { connect } from 'react-redux';
import { loadEvents } from "../../redux/modules/events/eventsReducer";
import { EventsSlider, FiltersForm } from '../../Components';
import { loadCities } from "../../redux/modules/cities/cities";


const Events = ({loadEvents, events, loadCities, cities, ...restProps}) => {

    const [queryParams, setParams] = useState('');
    useEffect(() => {
        loadEvents();
    }, []);

    const handleOptions = (options) => {
        setParams(options);
    };
    console.log(queryParams);

    if (events.data) {
        const eventsSlider = events.data.slice(0, 3);
        return (
            <StyledEvents>
                <EventsSlider events={eventsSlider}/>
                <FiltersForm takeOptions={handleOptions}/>
            </StyledEvents>
        );
    } else {
        return <></>;
    }
};

const mapStateToProps = (state) => ({
    events: state.events.data,
    cities: state.cities
});

export default connect(mapStateToProps, {loadEvents: loadEvents, loadCities: loadCities})(Events);