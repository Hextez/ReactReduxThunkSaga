import { takeEvery, call, put } from 'redux-saga/effects';

export default function* watcherSaga(){
    yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga(){
    try {
        const response = yield call(getData);
        if (response.status >= 200 && response.status < 300) {
            const payload = yield response.json();
            
            yield put({ type: "DATA_LOADED", payload });
        } else {
            throw response;
        }
        
    }catch(e){
        
        yield put({type: "API_ERRORED", payload: [e.status]})
    }
}


function getData(){
    return fetch("https://jsonplaceholder.typicode.com/posts");
}