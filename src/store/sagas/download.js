import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_ALLDOWNLOADLINKS_REQUEST,
  GET_ALLDOWNLOADLINKS_FAILURE,
  GET_ALLDOWNLOADLINKS_SUCCESS,
  ADD_DOWNLOAD_REQUEST,
  ADD_DOWNLOAD_FAILURE,
  ADD_DOWNLOAD_SUCCESS,
  EDIT_DOWNLOAD_REQUEST,
  EDIT_DOWNLOAD_FAILURE,
  EDIT_DOWNLOAD_SUCCESS,
  DELETE_DOWNLOAD_REQUEST,
  DELETE_DOWNLOAD_FAILURE,
  DELETE_DOWNLOAD_SUCCESS,
} from '../actions/actionTypes';

import {
  getAllDownloadLinks,
  addDownload,
  editDownload,
  deleteDownload,
} from '../api/download';

/* delete a specific download */
function* deleteDownloadWorker(action) {
  try {
    const result = yield call(deleteDownload, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: DELETE_DOWNLOAD_SUCCESS, payload: result });
    } else {
      yield put({ type: DELETE_DOWNLOAD_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: DELETE_DOWNLOAD_FAILURE });
  }
}

export function* deleteDownloadWatcher() {
  yield takeLatest(DELETE_DOWNLOAD_REQUEST, deleteDownloadWorker);
}

/* edit a specific download */
function* editDownloadWorker(action) {
  try {
    const result = yield call(editDownload, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: EDIT_DOWNLOAD_SUCCESS, payload: result });
    } else {
      yield put({ type: EDIT_DOWNLOAD_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: EDIT_DOWNLOAD_FAILURE });
  }
}

export function* editDownloadWatcher() {
  yield takeLatest(EDIT_DOWNLOAD_REQUEST, editDownloadWorker);
}

/* add to downloads */
function* addDownloadWorker(action) {
  try {
    const result = yield call(addDownload, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: ADD_DOWNLOAD_SUCCESS, payload: result });
    } else {
      yield put({ type: ADD_DOWNLOAD_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: ADD_DOWNLOAD_FAILURE });
  }
}

export function* addDownloadWatcher() {
  yield takeLatest(ADD_DOWNLOAD_REQUEST, addDownloadWorker);
}

/* fetch all download links */
function* getAllDownloadLinksWorker(action) {
  try {
    const result = yield call(getAllDownloadLinks, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_ALLDOWNLOADLINKS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_ALLDOWNLOADLINKS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_ALLDOWNLOADLINKS_FAILURE });
  }
}

export function* getAllDownloadLinksWatcher() {
  yield takeLatest(GET_ALLDOWNLOADLINKS_REQUEST, getAllDownloadLinksWorker);
}
