import React, { useEffect, useState } from 'react';
import StyledEvents from "./Events.styles";
import { connect } from 'react-redux';
import { useHistory } from "react-router";
import { loadEvents } from "../../redux/modules/events/eventsReducer";
import { EventsSlider, FiltersForm } from '../../Components';
import { loadCities } from "../../redux/modules/cities/cities";
import { parseQueryParams } from "../../utils/functions";

const Events = ({loadEvents, events, loadCities, cities, location}) => {

    let history = useHistory();
    //const [options, setOptions] = useState('');

    // useEffect(() => {
    //     loadEvents(location.search);
    // }, [])

    // useEffect(() => {
    //     // const params = options.length ? ('?' + options) : '';
    //     // history.replace(`/events${params}`);
    // }, [options]);

    // const handleTakeOptions = (options) => {
    //     setOptions(options);
    // };

    if (events.data) {
        const eventsSlider = events.data.slice(0, 3);
        return (
            <StyledEvents>
                <EventsSlider events={eventsSlider}/>
                <FiltersForm  location={location}/>
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