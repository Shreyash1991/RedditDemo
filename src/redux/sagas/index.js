import { call, put, takeLatest, all } from 'redux-saga/effects'
import {
    REQUEST_REDDITS,
    RESPONSE_REDDITS,
} from '../actions';

import { fetchReddits } from '../../api'

function* requestReddits(action) {
    try {
        
        const json = yield call(fetchReddits, action.reddit);
        yield put({ type: RESPONSE_REDDITS, data: json.data.data.children, });
    }
    catch (err) {
        
       //yield put({ type: ERROR_SEARCH, data: true, });
    }
}

function* actionWatcher() {
    yield takeLatest(REQUEST_REDDITS, requestReddits);
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}