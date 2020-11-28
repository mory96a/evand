import { pushError } from '../redux/modules/errors/errors';
import { Errors } from '../Components';
import { put } from "redux-saga/effects";

function* handleErrors(error) {
    const {status_code} = error;
    switch (status_code) {
        case (422):
            yield put(pushError(error));
    }
}

export default handleErrors;