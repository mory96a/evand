import React, { useEffect, useState } from 'react';
import StyledEvents from "./Events.styles";
import { connect } from 'react-redux';
import { loadEvents } from "../../redux/modules/events/eventsReducer";
import { EventsSlider, FiltersForm } from '../../Components';
import { loadCities } from "../../redux/modules/cities/cities";
import { optionsToQueryString } from '../../utils/functions';

const Events = ({loadEvents, events, loadCities, cities}) => {

    const [options, setOptions] = useState({
        cities: '',
        price: '',
        sort: '',
        categories: ''
    });

    useEffect(() => {
        console.log(optionsToQueryString(options));
        loadEvents();
    }, [options]);

    const handleFilteredBy = (filters, filterName) => {
        setOptions({
            ...options,
            [filterName]: filters
        });
    };

    const handleCheck = (event) => {
    };

    if (events.data) {
        const eventsSlider = events.data.slice(0, 3);
        return (
            <StyledEvents>
                <EventsSlider events={eventsSlider}/>
                <FiltersForm takeOptions={handleFilteredBy} handleCheck={handleCheck}/>
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