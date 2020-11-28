export const PUSH_ERROR = 'evand/errors/PUSH_ERROR';
export const REMOVE_ERROR = 'evand/errors/REMOVE_ERROR';

export const pushError = (error) => ({
    type: PUSH_ERROR,
    payload: error
});

export const removeError = () => ({
    type: REMOVE_ERROR
});

const initialState = {
    errors: []
};

const errorsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case (PUSH_ERROR):
            state.errors.push(action.payload);
            return {
                errors: [...state.errors]
            };
        case (REMOVE_ERROR):
            return {
                errors: []
            };
        default:
            return state;
    }
};

export default errorsReducer;

