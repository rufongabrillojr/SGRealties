import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_ALLALBUMS_REQUEST,
  GET_ALLALBUMS_FAILURE,
  GET_ALLALBUMS_SUCCESS,
  CREATE_ALBUM_REQUEST,
  CREATE_ALBUM_FAILURE,
  CREATE_ALBUM_SUCCESS,
  GET_MYALBUM_REQUEST,
  GET_MYALBUM_FAILURE,
  GET_MYALBUM_SUCCESS,
  UPDATE_FEATUREDALBUM_REQUEST,
  UPDATE_FEATUREDALBUM_FAILURE,
  UPDATE_FEATUREDALBUM_SUCCESS,
  UPDATE_ALBUMPICTURE_REQUEST,
  UPDATE_ALBUMPICTURE_FAILURE,
  UPDATE_ALBUMPICTURE_SUCCESS,
  UPDATE_ALBUMVIDEO_REQUEST,
  UPDATE_ALBUMVIDEO_FAILURE,
  UPDATE_ALBUMVIDEO_SUCCESS,
  GET_PUBLISHEDALBUMS_REQUEST,
  GET_PUBLISHEDALBUMS_FAILURE,
  GET_PUBLISHEDALBUMS_SUCCESS,
  UPDATE_ALBUMSTATUS_REQUEST,
  UPDATE_ALBUMSTATUS_FAILURE,
  UPDATE_ALBUMSTATUS_SUCCESS,
  PUBLISH_ALBUM_REQUEST,
  PUBLISH_ALBUM_FAILURE,
  PUBLISH_ALBUM_SUCCESS,
  UPDATE_ALBUMINFO_REQUEST,
  UPDATE_ALBUMINFO_FAILURE,
  UPDATE_ALBUMINFO_SUCCESS,
  GET_ALBUMINFO_REQUEST,
  GET_ALBUMINFO_FAILURE,
  GET_ALBUMINFO_SUCCESS,
  GET_APPROVEDALBUMS_REQUEST,
  GET_APPROVEDALBUMS_FAILURE,
  GET_APPROVEDALBUMS_SUCCESS,
  GET_PENDINGALBUMS_REQUEST,
  GET_PENDINGALBUMS_FAILURE,
  GET_PENDINGALBUMS_SUCCESS,
  GET_REJECTEDALBUMS_REQUEST,
  GET_REJECTEDALBUMS_FAILURE,
  GET_REJECTEDALBUMS_SUCCESS,
  DELETE_ALBUM_REQUEST,
  DELETE_ALBUM_FAILURE,
  DELETE_ALBUM_SUCCESS
} from '../actions/actionTypes';

import { getAllAlbums, createAlbum, getMyAlbum, updateFeaturedAlbum, updateAlbumPicture, updateAlbumVideo, getPublishedAlbums, updateAlbumStatus, publishAlbum, updateAlbumInfo, getAlbumInfo, getApprovedAlbums, getPendingAlbums, getRejectedAlbums, removeAlbum } from '../api/album';

/* get rejected album */
function* getRejectedAlbumsWorker(action) {
  try {
    const result = yield call(getRejectedAlbums, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_REJECTEDALBUMS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_REJECTEDALBUMS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_REJECTEDALBUMS_FAILURE });
  }
}

export function* getRejectedAlbumsWatcher() {
  yield takeLatest(GET_REJECTEDALBUMS_REQUEST, getRejectedAlbumsWorker);
}

/* get pending album */
function* getPendingAlbumsWorker(action) {
  try {
    const result = yield call(getPendingAlbums, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_PENDINGALBUMS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_PENDINGALBUMS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_PENDINGALBUMS_FAILURE });
  }
}

export function* getPendingAlbumsWatcher() {
  yield takeLatest(GET_PENDINGALBUMS_REQUEST, getPendingAlbumsWorker);
}

/* get approved album */
function* getApprovedAlbumsWorker(action) {
  try {
    const result = yield call(getApprovedAlbums, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_APPROVEDALBUMS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_APPROVEDALBUMS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_APPROVEDALBUMS_FAILURE });
  }
}

export function* getApprovedAlbumsWatcher() {
  yield takeLatest(GET_APPROVEDALBUMS_REQUEST, getApprovedAlbumsWorker);
}

/* publish album */
function* publishAlbumWorker(action) {
  try {
    const result = yield call(publishAlbum, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: PUBLISH_ALBUM_SUCCESS, payload: result });
    } else {
      yield put({ type: PUBLISH_ALBUM_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: PUBLISH_ALBUM_FAILURE });
  }
}

export function* publishAlbumWatcher() {
  yield takeLatest(PUBLISH_ALBUM_REQUEST, publishAlbumWorker);
}

/* UPDATE ALBUM status */
function* updateAlbumStatusWorker(action) {
  try {
    const result = yield call(updateAlbumStatus, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: UPDATE_ALBUMSTATUS_SUCCESS, payload: result });
    } else {
      yield put({ type: UPDATE_ALBUMSTATUS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: UPDATE_ALBUMSTATUS_FAILURE });
  }
}

export function* updateAlbumStatusWatcher() {
  yield takeLatest(UPDATE_ALBUMSTATUS_REQUEST, updateAlbumStatusWorker);
}

/* UPDATE ALBUM VIDEO */
function* updateAlbumVideoWorker(action) {
  try {
    const result = yield call(updateAlbumVideo, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: UPDATE_ALBUMVIDEO_SUCCESS, payload: result });
    } else {
      yield put({ type: UPDATE_ALBUMVIDEO_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: UPDATE_ALBUMVIDEO_FAILURE });
  }
}

export function* updateAlbumVideoWatcher() {
  yield takeLatest(UPDATE_ALBUMVIDEO_REQUEST, updateAlbumVideoWorker);
}

/* UPDATE ALBUM PICTURE */
function* updateAlbumPictureWorker(action) {
  try {
    const result = yield call(updateAlbumPicture, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: UPDATE_ALBUMPICTURE_SUCCESS, payload: result });
    } else {
      yield put({ type: UPDATE_ALBUMPICTURE_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: UPDATE_ALBUMPICTURE_FAILURE });
  }
}

export function* updateAlbumPictureWatcher() {
  yield takeLatest(UPDATE_ALBUMPICTURE_REQUEST, updateAlbumPictureWorker);
}

/* UPDATE FEATURED ALBUM */
function* updateFeaturedAlbumWorker(action) {
  try {
    const result = yield call(updateFeaturedAlbum, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: UPDATE_FEATUREDALBUM_SUCCESS, payload: result });
    } else {
      yield put({ type: UPDATE_FEATUREDALBUM_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: UPDATE_FEATUREDALBUM_FAILURE });
  }
}

export function* updateFeaturedAlbumWatcher() {
  yield takeLatest(UPDATE_FEATUREDALBUM_REQUEST, updateFeaturedAlbumWorker);
}

/* FETCH CURRENT USER'S ALBUMS */
function* getMyAlbumWorker(action) {
  try {
    const result = yield call(getMyAlbum, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_MYALBUM_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_MYALBUM_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_MYALBUM_FAILURE });
  }
}

export function* getMyAlbumWatcher() {
  yield takeLatest(GET_MYALBUM_REQUEST, getMyAlbumWorker);
}

/* CREATE ALBUMS */
function* createAlbumWorker(action) {
  try {
    const result = yield call(createAlbum, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: CREATE_ALBUM_SUCCESS, payload: result });
    } else {
      yield put({ type: CREATE_ALBUM_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: CREATE_ALBUM_FAILURE });
  }
}

export function* createAlbumWatcher() {
  yield takeLatest(CREATE_ALBUM_REQUEST, createAlbumWorker);
}

/* FETCH ALL ALBUMS */
function* getAllAlbumsWorker(action) {
  try {
    const result = yield call(getAllAlbums, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_ALLALBUMS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_ALLALBUMS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_ALLALBUMS_FAILURE });
  }
}

export function* getAllAlbumsWatcher() {
  yield takeLatest(GET_ALLALBUMS_REQUEST, getAllAlbumsWorker);
}

/* FETCH PUBLISHED ALBUMS */
function* getPublishedAlbumsWorker(action) {
  try {
    const result = yield call(getPublishedAlbums, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_PUBLISHEDALBUMS_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_PUBLISHEDALBUMS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_PUBLISHEDALBUMS_FAILURE });
  }
}

export function* getPublishedAlbumsWatcher() {
  yield takeLatest(GET_PUBLISHEDALBUMS_REQUEST, getPublishedAlbumsWorker);
}

/* UPDATE ALBUM INFO */
function* updateAlbumInfoWorker(action) {
  try {
    const result = yield call(updateAlbumInfo, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: UPDATE_ALBUMINFO_SUCCESS, payload: result });
    } else {
      yield put({ type: UPDATE_ALBUMINFO_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: UPDATE_ALBUMINFO_FAILURE });
  }
}

export function* updateAlbumInfoWatcher() {
  yield takeLatest(UPDATE_ALBUMINFO_REQUEST, updateAlbumInfoWorker);
}

/* GET ALBUM INFO */
function* getAlbumInfoWorker(action) {
  try {
    const result = yield call(getAlbumInfo, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_ALBUMINFO_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_ALBUMINFO_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_ALBUMINFO_FAILURE });
  }
}

export function* getAlbumInfoWatcher() {
  yield takeLatest(GET_ALBUMINFO_REQUEST, getAlbumInfoWorker);
}

/* delete album */
function* deleteAlbumWorker(action) {
  try {
    const result = yield call(removeAlbum, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: DELETE_ALBUM_SUCCESS, payload: result });
    } else {
      yield put({ type: DELETE_ALBUM_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: DELETE_ALBUM_FAILURE });
  }
}

export function* deleteAlbumWatcher() {
  yield takeLatest(DELETE_ALBUM_REQUEST, deleteAlbumWorker);
}
