import request from "../../../utils/api";
import { put } from "redux-saga/effects";

export const LOAD_EVENTS = 'evand/events/LOAD_EVENTS';
const LOAD_EVENTS_SUCCESS = 'evand/events/LOAD_EVENTS_SUCCESS';
const LOAD_EVENTS_FAILURE = 'evand/events/LOAD_EVENTS_FAILURE';

export const loadEvents = (options = '') => ({
    type: LOAD_EVENTS,
    payload: options
});

export const loadEventsSuccess = (events) => ({
    type: LOAD_EVENTS_SUCCESS,
    payload: events
});

export const loadEventsFailure = (error) => ({
    type: LOAD_EVENTS_FAILURE,
    payload: error
});

const initialState = {
    loading: false,
    loaded: false,
    data: [],
    error: null
};

const eventsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOAD_EVENTS:
            return {
                ...state,
                loading: true,
            }
        case LOAD_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload
            }
        case LOAD_EVENTS_FAILURE:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export function* watchLoadEvents(action) {
    try {
        const response = yield request(`/events${action.payload}`, {
            method: 'GET'
        });
        const events = yield response.json();
        yield put(loadEventsSuccess(events));
    } catch (error) {
        const payload = yield error.json();
        yield put(loadEventsFailure(payload));
    }
}

export default eventsReducer;

