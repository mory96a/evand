import { combineReducers } from 'redux';

import eventsReducer from './modules/events/eventsReducer';
import usersReducer from "./modules/users/users";
import errorsReducer from "./modules/errors/errors";
import citiesReducer from "./modules/cities/cities";
import authModalReducer from "./modules/authModal/modal";

const rootReducer = combineReducers({
    events: eventsReducer,
    user: usersReducer,
    errors: errorsReducer,
    cities: citiesReducer,
    authModal: authModalReducer
});

export default rootReducer;