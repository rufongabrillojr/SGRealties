import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_BANNERS_REQUEST,
  GET_BANNERS_FAILURE,
  GET_BANNERS_SUCCESS,
  CREATE_BANNER_REQUEST,
  CREATE_BANNER_FAILURE,
  CREATE_BANNER_SUCCESS,
  DELETE_BANNER_REQUEST,
  DELETE_BANNER_FAILURE,
  DELETE_BANNER_SUCCESS,
} from '../actions/actionTypes';

import { getBanners, createBanner, deleteBanner } from '../api/banner';

/* delete banner */
function* deleteBannerWorker(action) {
  try {
    const result = yield call(deleteBanner, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: DELETE_BANNER_SUCCESS, payload: result });
    } else {
      yield put({ type: DELETE_BANNER_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: DELETE_BANNER_FAILURE });
  }
}

export function* deleteBannerWatcher() {
  yield takeLatest(DELETE_BANNER_REQUEST, deleteBannerWorker);
}

/* create banner */
function* createBannerWorker(action) {
  try {
    const result = yield call(createBanner, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: CREATE_BANNER_SUCCESS, payload: result });
    } else {
      yield put({ type: CREATE_BANNER_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: CREATE_BANNER_FAILURE });
  }
}

export function* createBannerWatcher() {
  yield takeLatest(CREATE_BANNER_REQUEST, createBannerWorker);
}

/* fetch all banners */
function* getBannersWorker(action) {
  try {
    const result = yield call(getBanners, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_BANNERS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_BANNERS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_BANNERS_FAILURE });
  }
}

export function* getBannersWatcher() {
  yield takeLatest(GET_BANNERS_REQUEST, getBannersWorker);
}
