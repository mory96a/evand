import React, { useEffect, useState } from 'react';
import StyledEvents from "./Events.styles";
import { connect } from 'react-redux';
import { loadEvents } from "../../redux/modules/events/eventsReducer";
import { loadModal } from "../../redux/modules/authModal/modal";
import { EventsSlider, FiltersForm, EventsWrapper, SignInSignUpAlert } from '../../Components';
import { loadCities } from "../../redux/modules/cities/cities";
import { slideEvents } from './slideEvents';
import { Button } from "../../Components/Kit";

const Events = ({loadEvents, events, loadCities, cities, user, loadModal, location}) => {

    const [showEvents, setEvents] = useState([]);
    const [page, setPage] = useState(1);

    let eventsCount = 0;
    if (!!events.meta) {
        const {pagination} = events.meta;
        eventsCount = pagination.total;
    }

    useEffect(() => {
        if (!!events.data && page !== 1) {
            setEvents([...showEvents, ...events.data])
        } else if (!!events.data) {
            setEvents([...events.data])
        }
    }, [events]);

    const handleLoadMore = () => {
        // loadEvents(buttonLink);
        // setPage(page + 1);
    };

    const handleTakeOptions = (params, defaultParams) => {
        // setPage(1);
        // loadEvents(params + defaultParams);
    };

    let buttonLink = '';
    if (!!events.meta) {
        const {pagination} = events.meta;
        if (!!pagination.links.length || !!pagination.links.next) {
            const index = pagination.links.next.indexOf('?');
            buttonLink = pagination.links.next.slice(index, pagination.links.next.length);
        }
    }

    return (
        <StyledEvents>
            <EventsSlider events={slideEvents}/>
            <FiltersForm location={location} takeOptions={handleTakeOptions} eventsCount={eventsCount}/>
            <SignInSignUpAlert isLoggedIn={!!user.data} loadAuthModal={loadModal}/>
            <EventsWrapper events={showEvents}/>
            {
                !!buttonLink.length && (
                    <Button className='mb-5' width={150} height={50} onClick={handleLoadMore}>
                        رویداد های بیشتر
                    </Button>
                )
            }
        </StyledEvents>
    );
};

const mapStateToProps = (state) => ({
    events: state.events.data,
    cities: state.cities,
    user: state.user.user
});

export default connect(
    mapStateToProps,
    {
        loadEvents: loadEvents,
        loadCities: loadCities,
        loadModal: loadModal
    }
)
(Events);