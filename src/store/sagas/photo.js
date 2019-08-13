import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_PUBLICPHOTOS_REQUEST,
  GET_PUBLICPHOTOS_FAILURE,
  GET_PUBLICPHOTOS_SUCCESS,
  GET_PRIVATEPHOTOS_REQUEST,
  GET_PRIVATEPHOTOS_FAILURE,
  GET_PRIVATEPHOTOS_SUCCESS,
  ADD_PHOTOS_REQUEST,
  ADD_PHOTOS_FAILURE,
  ADD_PHOTOS_SUCCESS,
} from '../actions/actionTypes';

import { getPublicPhotos, getPrivatePhotos, addPhotos } from '../api/photo';

/* add photos of an album */
function* addPhotosWorker(action) {
  try {
    const result = yield call(addPhotos, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: ADD_PHOTOS_SUCCESS, payload: result });
    } else {
      yield put({ type: ADD_PHOTOS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: ADD_PHOTOS_FAILURE });
  }
}

export function* addPhotosWatcher() {
  yield takeLatest(ADD_PHOTOS_REQUEST, addPhotosWorker);
}

/* fetch public photos of an album */
function* getPublicPhotosWorker(action) {
  try {
    const result = yield call(getPublicPhotos, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_PUBLICPHOTOS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_PUBLICPHOTOS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_PUBLICPHOTOS_FAILURE });
  }
}

export function* getPublicPhotosWatcher() {
  yield takeLatest(GET_PUBLICPHOTOS_REQUEST, getPublicPhotosWorker);
}

/* fetch private photos of an album */
function* getPrivatePhotosWorker(action) {
  try {
    const result = yield call(getPrivatePhotos, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_PRIVATEPHOTOS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_PRIVATEPHOTOS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_PRIVATEPHOTOS_FAILURE });
  }
}

export function* getPrivatePhotosWatcher() {
  yield takeLatest(GET_PRIVATEPHOTOS_REQUEST, getPrivatePhotosWorker);
}
