import { call, put, takeEvery } from 'redux-saga/effects';
import { hideLoader, showLoader } from './actions';
import { FETCH_TODO, REQUEST_TODOS } from './types';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_TODOS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_TODO, payload });
    yield put(hideLoader());
  } catch (e) {
    console.log(e);
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10'
  );
  return await response.json();
}
