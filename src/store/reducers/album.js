import { get } from 'lodash';
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
  DELETE_ALBUM_SUCCESS,
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
  allAlbums: [],
  myAlbums: [],
  publishedAlbums: [],
  albumInfo: {},
  approvedAlbums: [],
  pendingAlbums: [],
  rejectedAlbums: []
};

const album = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLALBUMS_REQUEST:
    case GET_ALBUMINFO_REQUEST:
      return {
        ...state,
        isFetching: true,
        hasError: false
      };

    case GET_MYALBUM_REQUEST:
      return {
        ...state,
        isFetchingMy: true,
        hasError: false
      };

    case GET_PUBLISHEDALBUMS_REQUEST:
      return {
        ...state,
        isFetchingPublished: true,
        hasError: false
      };

    case GET_APPROVEDALBUMS_REQUEST:
      return {
        ...state,
        isFetchingApproved: true,
        hasError: false
      };

    case GET_PENDINGALBUMS_REQUEST:
      return {
        ...state,
        isFetchingPending: true,
        hasError: false
      };

    case GET_REJECTEDALBUMS_REQUEST:
      return {
        ...state,
        isFetchingRejected: true,
        hasError: false
      };

    case CREATE_ALBUM_REQUEST:
    case UPDATE_FEATUREDALBUM_REQUEST:
    case UPDATE_ALBUMPICTURE_REQUEST:
    case UPDATE_ALBUMVIDEO_REQUEST:
    case UPDATE_ALBUMSTATUS_REQUEST:
    case PUBLISH_ALBUM_REQUEST:
    case UPDATE_ALBUMINFO_REQUEST:
    case DELETE_ALBUM_REQUEST:
      return {
        ...state,
        isRequesting: true,
        hasError: false
      };

    case GET_ALLALBUMS_FAILURE:
    case GET_ALBUMINFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_MYALBUM_FAILURE:
      return {
        ...state,
        isFetchingMy: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_PUBLISHEDALBUMS_FAILURE:
      return {
        ...state,
        isFetchingPublished: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_APPROVEDALBUMS_FAILURE:
      return {
        ...state,
        isFetchingApproved: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_PENDINGALBUMS_FAILURE:
      return {
        ...state,
        isFetchingPending: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_REJECTEDALBUMS_FAILURE:
      return {
        ...state,
        isFetchingRejected: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case CREATE_ALBUM_FAILURE:
    case UPDATE_FEATUREDALBUM_FAILURE:
    case UPDATE_ALBUMPICTURE_FAILURE:
    case UPDATE_ALBUMVIDEO_FAILURE:
    case UPDATE_ALBUMSTATUS_FAILURE:
    case PUBLISH_ALBUM_FAILURE:
    case UPDATE_ALBUMINFO_FAILURE:
    case DELETE_ALBUM_FAILURE:
      return {
        ...state,
        isRequesting: false,
        hasError: true,
        requestSuccessful: false
      };

    case GET_ALLALBUMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allAlbums: get(action, 'payload.albums')
      };

    case CREATE_ALBUM_SUCCESS:
    case UPDATE_FEATUREDALBUM_SUCCESS:
    case UPDATE_ALBUMPICTURE_SUCCESS:
    case UPDATE_ALBUMVIDEO_SUCCESS:
    case UPDATE_ALBUMSTATUS_SUCCESS:
    case PUBLISH_ALBUM_SUCCESS:
    case UPDATE_ALBUMINFO_SUCCESS:
    case DELETE_ALBUM_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        hasError: false,
        requestSuccessful: true,
        payload: get(action, 'payload')
      };

    case GET_MYALBUM_SUCCESS:
      return {
        ...state,
        isFetchingMy: false,
        myAlbums: get(action, 'payload.albums')
      };

    case GET_PUBLISHEDALBUMS_SUCCESS:
      return {
        ...state,
        isFetchingPublished: false,
        publishedAlbums: get(action, 'payload.albums')
      };

    case GET_APPROVEDALBUMS_SUCCESS:
      return {
        ...state,
        isFetchingApproved: false,
        approvedAlbums: get(action, 'payload.albums')
      };

    case GET_PENDINGALBUMS_SUCCESS:
      return {
        ...state,
        isFetchingPending: false,
        pendingAlbums: get(action, 'payload.albums')
      };

    case GET_REJECTEDALBUMS_SUCCESS:
      return {
        ...state,
        isFetchingRejected: false,
        rejectedAlbums: get(action, 'payload.albums')
      };

    case GET_ALBUMINFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        albumInfo: get(action, 'payload.album')
      };

    case LOGOUT:
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default album;
