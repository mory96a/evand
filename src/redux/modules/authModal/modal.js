const LOAD_AUTH_MODAL = 'evand/authModal/LOAD_AUTH_MODAL';
const REMOVE_AUTH_MODAL = 'evand/authModal/REMOVE_AUTH_MODAL';

export const loadModal = () => ({
    type: LOAD_AUTH_MODAL
});

export const removeAuthModal = () => ({
    type: REMOVE_AUTH_MODAL
})

const initialState = {
    showModal: false
};

const authModalReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case(LOAD_AUTH_MODAL):
            return {
                showModal: true
            };
        case(REMOVE_AUTH_MODAL):
            return {
                showModal: false
            };
        default :
            return state;
    }
};

export default authModalReducer;