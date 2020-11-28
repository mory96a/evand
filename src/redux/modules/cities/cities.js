import { put } from "redux-saga/effects";
import request from "../../../utils/api";

export const LOAD_CITIES = 'evand/cities/LOAD_CITIES';
const LOAD_CITIES_SUCCESS = 'evand/cities/LOAD_CITIES_SUCCESS';
const LOAD_CITIES_FAILURE = 'evand/cities/LOAD_CITIES_FAILURE';

export const loadCities = () => ({
    type: LOAD_CITIES
});

const loadCitiesSuccess = (data) => ({
    type: LOAD_CITIES_SUCCESS,
    payload: data
});

const loadCitiesFailure = (error) => ({
    type: LOAD_CITIES_FAILURE,
    payload: error
});

const initialState = {
    loading: false,
    loaded: false,
    data: [],
    error: null
};

const citiesReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case (LOAD_CITIES):
            return {
                ...state,
                loading: true
            }
        case (LOAD_CITIES_SUCCESS):
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload
            }
        case (LOAD_CITIES_FAILURE):
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload
            }
        default:
            return state;
    }
};

export function* watchLoadCities() {
    try {
        const response = yield request('/cities', {
            method: 'GET'
        });
        const cities = yield response.json();
        yield put(loadCitiesSuccess(cities));
    } catch (error) {
        const errors = yield error.json();
        yield put(loadCitiesFailure(errors));
    }
}

export default citiesReducer;


