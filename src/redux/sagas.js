import { all, takeEvery } from 'redux-saga/effects';
import { watchLoadEvents, LOAD_EVENTS } from "./modules/events/eventsReducer";
import { LOGIN_USER, watchUser } from "./modules/users/users";
import { LOAD_CITIES, watchLoadCities } from "./modules/cities/cities";

export default function* root(store) {
    yield all([
        takeEvery(LOAD_EVENTS, watchLoadEvents),
        takeEvery(LOGIN_USER, watchUser),
        takeEvery(LOAD_CITIES, watchLoadCities)
    ]);
};