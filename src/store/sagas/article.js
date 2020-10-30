import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_ALLARTICLES_REQUEST,
  GET_ALLARTICLES_FAILURE,
  GET_ALLARTICLES_SUCCESS,
  GET_MYARTICLES_REQUEST,
  GET_MYARTICLES_FAILURE,
  GET_MYARTICLES_SUCCESS,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS,
  GET_PUBLISHEDARTICLES_REQUEST,
  GET_PUBLISHEDARTICLES_FAILURE,
  GET_PUBLISHEDARTICLES_SUCCESS,
  GET_ARTICLEINFO_REQUEST,
  GET_ARTICLEINFO_FAILURE,
  GET_ARTICLEINFO_SUCCESS,
  UPDATE_ARTICLESTATUS_REQUEST,
  UPDATE_ARTICLESTATUS_FAILURE,
  UPDATE_ARTICLESTATUS_SUCCESS,
  PUBLISH_ARTICLE_REQUEST,
  PUBLISH_ARTICLE_FAILURE,
  PUBLISH_ARTICLE_SUCCESS,
  UPDATE_ARTICLEINFO_REQUEST,
  UPDATE_ARTICLEINFO_FAILURE,
  UPDATE_ARTICLEINFO_SUCCESS,
  GET_PENDINGARTICLES_REQUEST,
  GET_PENDINGARTICLES_FAILURE,
  GET_PENDINGARTICLES_SUCCESS,
  GET_APPROVEDARTICLES_REQUEST,
  GET_APPROVEDARTICLES_FAILURE,
  GET_APPROVEDARTICLES_SUCCESS,
  GET_REJECTEDARTICLES_REQUEST,
  GET_REJECTEDARTICLES_FAILURE,
  GET_REJECTEDARTICLES_SUCCESS,
  UPDATE_FEATUREDARTICLE_REQUEST,
  UPDATE_FEATUREDARTICLE_FAILURE,
  UPDATE_FEATUREDARTICLE_SUCCESS,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_FAILURE,
  DELETE_ARTICLE_SUCCESS
} from '../actions/actionTypes';

import { getAllArticles, createArticle, getMyArticles, getPublishedArticles, getArticleInfo, updateArticleStatus, publishArticle, updateArticleInfo, getPendingArticles, getApprovedArticles, getRejectedArticles, updateArticleFeatured, removeArticle } from '../api/article';

function* updateArticleFeaturedWorker(action) {
  try {
    const result = yield call(updateArticleFeatured, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: UPDATE_FEATUREDARTICLE_SUCCESS, payload: result });
    } else {
      yield put({ type: UPDATE_FEATUREDARTICLE_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: UPDATE_FEATUREDARTICLE_FAILURE });
  }
}

export function* updateArticleFeaturedWatcher() {
  yield takeLatest(UPDATE_FEATUREDARTICLE_REQUEST, updateArticleFeaturedWorker);
}

/* fetch rejected articles */
function* getRejectedArticlesWorker(action) {
  try {
    const result = yield call(getRejectedArticles, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_REJECTEDARTICLES_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_REJECTEDARTICLES_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_REJECTEDARTICLES_FAILURE });
  }
}

export function* getRejectedArticlesWatcher() {
  yield takeLatest(GET_REJECTEDARTICLES_REQUEST, getRejectedArticlesWorker);
}

/* fetch approved articles */
function* getApprovedArticlesWorker(action) {
  try {
    const result = yield call(getApprovedArticles, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_APPROVEDARTICLES_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_APPROVEDARTICLES_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_APPROVEDARTICLES_FAILURE });
  }
}

export function* getApprovedArticlesWatcher() {
  yield takeLatest(GET_APPROVEDARTICLES_REQUEST, getApprovedArticlesWorker);
}

/* fetch pending articles */
function* getPendingArticlesWorker(action) {
  try {
    const result = yield call(getPendingArticles, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_PENDINGARTICLES_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_PENDINGARTICLES_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_PENDINGARTICLES_FAILURE });
  }
}

export function* getPendingArticlesWatcher() {
  yield takeLatest(GET_PENDINGARTICLES_REQUEST, getPendingArticlesWorker);
}

/* update an article's info */
function* updateArticleInfoWorker(action) {
  try {
    const result = yield call(updateArticleInfo, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: UPDATE_ARTICLEINFO_SUCCESS, payload: result });
    } else {
      yield put({ type: UPDATE_ARTICLEINFO_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: UPDATE_ARTICLEINFO_FAILURE });
  }
}

export function* updateArticleInfoWatcher() {
  yield takeLatest(UPDATE_ARTICLEINFO_REQUEST, updateArticleInfoWorker);
}

/* publish an article */
function* publishArticleWorker(action) {
  try {
    const result = yield call(publishArticle, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: PUBLISH_ARTICLE_SUCCESS, payload: result });
    } else {
      yield put({ type: PUBLISH_ARTICLE_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: PUBLISH_ARTICLE_FAILURE });
  }
}

export function* publishArticleWatcher() {
  yield takeLatest(PUBLISH_ARTICLE_REQUEST, publishArticleWorker);
}

/* update a single article's status */
function* updateArticleStatusWorker(action) {
  try {
    const result = yield call(updateArticleStatus, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: UPDATE_ARTICLESTATUS_SUCCESS, payload: result });
    } else {
      yield put({ type: UPDATE_ARTICLESTATUS_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: UPDATE_ARTICLESTATUS_FAILURE });
  }
}

export function* updateArticleStatusWatcher() {
  yield takeLatest(UPDATE_ARTICLESTATUS_REQUEST, updateArticleStatusWorker);
}

/* GET A SINGLE ARTICLE'S INFO */
function* getArticleInfoWorker(action) {
  try {
    const result = yield call(getArticleInfo, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_ARTICLEINFO_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_ARTICLEINFO_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_ARTICLEINFO_FAILURE });
  }
}

export function* getArticleInfoWatcher() {
  yield takeLatest(GET_ARTICLEINFO_REQUEST, getArticleInfoWorker);
}

/* CREATE ARTICLE */
function* createArticleWorker(action) {
  try {
    const result = yield call(createArticle, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: CREATE_ARTICLE_SUCCESS, payload: result });
    } else {
      yield put({ type: CREATE_ARTICLE_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: CREATE_ARTICLE_FAILURE });
  }
}

export function* createArticleWatcher() {
  yield takeLatest(CREATE_ARTICLE_REQUEST, createArticleWorker);
}

/* FETCH ALL ARTICLES */
function* getAllArticlesWorker(action) {
  try {
    const result = yield call(getAllArticles, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_ALLARTICLES_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_ALLARTICLES_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_ALLARTICLES_FAILURE });
  }
}

export function* getAllArticlesWatcher() {
  yield takeLatest(GET_ALLARTICLES_REQUEST, getAllArticlesWorker);
}

/* FETCH MY ARTICLES */
function* getMyArticlesWorker(action) {
  try {
    const result = yield call(getMyArticles, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_MYARTICLES_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_MYARTICLES_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_MYARTICLES_FAILURE });
  }
}

export function* getMyArticlesWatcher() {
  yield takeLatest(GET_MYARTICLES_REQUEST, getMyArticlesWorker);
}

/* FETCH PUBLISHED ARTICLES */
function* getPublishedArticlesWorker(action) {
  try {
    const result = yield call(getPublishedArticles, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: GET_PUBLISHEDARTICLES_SUCCESS, payload: result });
    } else {
      yield put({ type: GET_PUBLISHEDARTICLES_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: GET_PUBLISHEDARTICLES_FAILURE });
  }
}

export function* getPublishedArticlesWatcher() {
  yield takeLatest(GET_PUBLISHEDARTICLES_REQUEST, getPublishedArticlesWorker);
}

/* delete article */
function* deleteArticleWorker(action) {
  try {
    const result = yield call(removeArticle, action.data);
    // dispatch success action
    if (result.ok) {
      yield put({ type: DELETE_ARTICLE_SUCCESS, payload: result });
    } else {
      yield put({ type: DELETE_ARTICLE_FAILURE, payload: result });
    }
  } catch (error) {
    // dispatch failure action
    yield put({ type: DELETE_ARTICLE_FAILURE });
  }
}

export function* deleteArticleWatcher() {
  yield takeLatest(DELETE_ARTICLE_REQUEST, deleteArticleWorker);
}
