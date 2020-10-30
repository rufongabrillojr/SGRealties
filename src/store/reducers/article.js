import { get } from 'lodash';
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
  DELETE_ARTICLE_SUCCESS,
  LOGOUT
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  isFetchingMy: false,
  isFetchingPublished: false,
  isFetchingPending: false,
  isFetchingApproved: false,
  isFetchingRejected: false,
  isRequesting: false,
  requestSuccessful: false,
  hasError: false,
  error: {},
  payload: {},
  articles: [],
  myArticles: [],
  publishedArticles: [],
  articleInfo: {},
  pendingArticles: [],
  approvedArticles: [],
  rejectedArticles: []
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLARTICLES_REQUEST:
    case GET_ARTICLEINFO_REQUEST:
      return {
        ...state,
        isFetching: true,
        hasError: false
      };

    case GET_PUBLISHEDARTICLES_REQUEST:
      return {
        ...state,
        isFetchingPublished: true,
        hasError: false
      };

    case GET_MYARTICLES_REQUEST:
      return {
        ...state,
        isFetchingMy: true,
        hasError: false
      };

    case GET_PENDINGARTICLES_REQUEST:
      return {
        ...state,
        isFetchingPending: true,
        hasError: false
      };

    case GET_APPROVEDARTICLES_REQUEST:
      return {
        ...state,
        isFetchingApproved: true,
        hasError: false
      };

    case GET_REJECTEDARTICLES_REQUEST:
      return {
        ...state,
        isFetchingRejected: true,
        hasError: false
      };
    case UPDATE_FEATUREDARTICLE_REQUEST:
    case UPDATE_ARTICLESTATUS_REQUEST:
    case PUBLISH_ARTICLE_REQUEST:
    case CREATE_ARTICLE_REQUEST:
    case UPDATE_ARTICLEINFO_REQUEST:
    case DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        isRequesting: true,
        requestSuccessful: false,
        hasError: false
      };

    case GET_ALLARTICLES_FAILURE:
    case GET_ARTICLEINFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_PUBLISHEDARTICLES_FAILURE:
      return {
        ...state,
        isFetchingPublished: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_MYARTICLES_FAILURE:
      return {
        ...state,
        isFetchingMy: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_PENDINGARTICLES_FAILURE:
      return {
        ...state,
        isFetchingPending: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_APPROVEDARTICLES_FAILURE:
      return {
        ...state,
        isFetchingApproved: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_REJECTEDARTICLES_FAILURE:
      return {
        ...state,
        isFetchingRejected: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case UPDATE_FEATUREDARTICLE_FAILURE:
    case UPDATE_ARTICLESTATUS_FAILURE:
    case PUBLISH_ARTICLE_FAILURE:
    case CREATE_ARTICLE_FAILURE:
    case UPDATE_ARTICLEINFO_FAILURE:
    case DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        isRequesting: false,
        requestSuccessful: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_ALLARTICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        articles: get(action, 'payload.articles')
      };
    case GET_MYARTICLES_SUCCESS:
      return {
        ...state,
        isFetchingMy: false,
        myArticles: get(action, 'payload.articles')
      };

    case UPDATE_FEATUREDARTICLE_SUCCESS:
    case CREATE_ARTICLE_SUCCESS:
    case UPDATE_ARTICLESTATUS_SUCCESS:
    case PUBLISH_ARTICLE_SUCCESS:
    case UPDATE_ARTICLEINFO_SUCCESS:
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        requestSuccessful: true,
        hasError: false,
        payload: get(action, 'payload')
      };

    case GET_PUBLISHEDARTICLES_SUCCESS:
      return {
        ...state,
        isFetchingPublished: false,
        publishedArticles: get(action, 'payload.articles')
      };

    case GET_ARTICLEINFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        articleInfo: get(action, 'payload.content')
      };

    case GET_PENDINGARTICLES_SUCCESS:
      return {
        ...state,
        isFetchingPending: false,
        pendingArticles: get(action, 'payload.articles')
      };

    case GET_APPROVEDARTICLES_SUCCESS:
      return {
        ...state,
        isFetchingApproved: false,
        approvedArticles: get(action, 'payload.articles')
      };

    case GET_REJECTEDARTICLES_SUCCESS:
      return {
        ...state,
        isFetchingRejected: false,
        rejectedArticles: get(action, 'payload.articles')
      };

    case LOGOUT:
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default article;
