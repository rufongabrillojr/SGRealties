import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_TAGS_REQUEST,
  GET_TAGS_FAILURE,
  GET_TAGS_SUCCESS,
  ADD_TAG_REQUEST,
  ADD_TAG_FAILURE,
  ADD_TAG_SUCCESS,
  DELETE_TAG_REQUEST,
  DELETE_TAG_FAILURE,
  DELETE_TAG_SUCCESS,
} from '../actions/actionTypes';

import { getTags, addTag, deleteTag } from '../api/tag';

/* add tag */
function* deleteTagWorker(action) {
  try {
    const result = yield call(deleteTag, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: DELETE_TAG_SUCCESS, payload: result });
    } else {
      yield put({ type: DELETE_TAG_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: DELETE_TAG_FAILURE });
  }
}

export function* deleteTagWatcher() {
  yield takeLatest(DELETE_TAG_REQUEST, deleteTagWorker);
}

/* add tag */
function* addTagWorker(action) {
  try {
    const result = yield call(addTag, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: ADD_TAG_SUCCESS, payload: result });
    } else {
      yield put({ type: ADD_TAG_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: ADD_TAG_FAILURE });
  }
}

export function* addTagWatcher() {
  yield takeLatest(ADD_TAG_REQUEST, addTagWorker);
}

/* fetch all tags */
function* getTagsWorker(action) {
  try {
    const result = yield call(getTags, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_TAGS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_TAGS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_TAGS_FAILURE });
  }
}

export function* getTagsWatcher() {
  yield takeLatest(GET_TAGS_REQUEST, getTagsWorker);
}
