import request from "../../../utils/api";
import { put } from "redux-saga/effects";
import handleErrors from "../../../utils/handleErrors";

export const LOGIN_USER = 'evand/users/LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'evand/users/LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'evand/users/LOGIN_USER_FAILURE';

export const LOGOUT_USER = 'evand/users/LOGOUT_USER';

export const loginUser = (user) => ({
    type: LOGIN_USER,
    payload: user
});

const loginUserSuccess = (loggedInUSER) => ({
    type: LOGIN_USER_SUCCESS,
    payload: loggedInUSER
});

const loginUserFailure = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: error
});

export const logoutUser = () => ({
    type: LOGOUT_USER
});

const initialState = {
    loading: false,
    loaded: false,
    user: {},
    error: null
};

const usersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case(LOGIN_USER):
            return {
                ...state,
                loading: true
            };
        case(LOGIN_USER_SUCCESS):
            return {
                ...state,
                loading: false,
                loaded: true,
                user: action.payload
            };
        case(LOGIN_USER_FAILURE):
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload
            };
        case(LOGOUT_USER):
            return {
                ...initialState
            };
        default:
            return state
    }
};

export function* watchUser(action) {
    try {
        const response = yield request('auth/login', {
            method: 'POST',
            body: JSON.stringify(action.payload)
        });
        localStorage.setItem('token', response.headers.get('authorization'));
        const data = yield response.json();
        yield put(loginUserSuccess(data));
    } catch (error) {
        const payload = yield error.json();
        yield handleErrors(payload);
        yield put(loginUserFailure(payload));
    }
}

export default usersReducer;
