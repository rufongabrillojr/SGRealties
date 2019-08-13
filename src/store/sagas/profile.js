import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_ALLPROFILES_REQUEST,
  GET_ALLPROFILES_FAILURE,
  GET_ALLPROFILES_SUCCESS,
  ADD_PROFILE_REQUEST,
  ADD_PROFILE_FAILURE,
  ADD_PROFILE_SUCCESS,
  GET_PROFILEINFO_REQUEST,
  GET_PROFILEINFO_FAILURE,
  GET_PROFILEINFO_SUCCESS,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_FAILURE,
  DELETE_PROFILE_SUCCESS,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_FAILURE,
  EDIT_PROFILE_SUCCESS,
} from '../actions/actionTypes';

import {
  getAllProfiles,
  addProfile,
  getProfileInfo,
  deleteProfile,
  editProfile,
} from '../api/profile';

/* edit a profile */
function* editProfileWorker(action) {
  try {
    const result = yield call(editProfile, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: EDIT_PROFILE_SUCCESS, payload: result });
    } else {
      yield put({ type: EDIT_PROFILE_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: EDIT_PROFILE_FAILURE });
  }
}

export function* editProfileWatcher() {
  yield takeLatest(EDIT_PROFILE_REQUEST, editProfileWorker);
}

/* delete a profile */
function* deleteProfileWorker(action) {
  try {
    const result = yield call(deleteProfile, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: DELETE_PROFILE_SUCCESS, payload: result });
    } else {
      yield put({ type: DELETE_PROFILE_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: DELETE_PROFILE_FAILURE });
  }
}

export function* deleteProfileWatcher() {
  yield takeLatest(DELETE_PROFILE_REQUEST, deleteProfileWorker);
}

/* get a specific profile's info */
function* getProfileInfoWorker(action) {
  try {
    const result = yield call(getProfileInfo, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_PROFILEINFO_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_PROFILEINFO_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_PROFILEINFO_FAILURE });
  }
}

export function* getProfileInfoWatcher() {
  yield takeLatest(GET_PROFILEINFO_REQUEST, getProfileInfoWorker);
}

/* add a profile */
function* addProfileWorker(action) {
  try {
    const result = yield call(addProfile, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: ADD_PROFILE_SUCCESS, payload: result });
    } else {
      yield put({ type: ADD_PROFILE_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: ADD_PROFILE_FAILURE });
  }
}

export function* addProfileWatcher() {
  yield takeLatest(ADD_PROFILE_REQUEST, addProfileWorker);
}

/* fetch all profiles */
function* getAllProfilesWorker(action) {
  try {
    const result = yield call(getAllProfiles, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_ALLPROFILES_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_ALLPROFILES_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_ALLPROFILES_FAILURE });
  }
}

export function* getAllProfilesWatcher() {
  yield takeLatest(GET_ALLPROFILES_REQUEST, getAllProfilesWorker);
}
