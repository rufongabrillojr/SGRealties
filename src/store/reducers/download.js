import { get } from 'lodash';
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
  LOGOUT
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  isRequesting: false,
  requestSuccessful: false,
  hasError: false,
  addWallpaperSuccessful: false,
  error: {},
  payload: {},
  downloadlinks: []
};

const download = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLDOWNLOADLINKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        hasError: false
      };

    case ADD_DOWNLOAD_REQUEST:
    case EDIT_DOWNLOAD_REQUEST:
    case DELETE_DOWNLOAD_REQUEST:
      return {
        ...state,
        isRequesting: true,
        hasError: false
      };

    case GET_ALLDOWNLOADLINKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case ADD_DOWNLOAD_FAILURE:
    case EDIT_DOWNLOAD_FAILURE:
    case DELETE_DOWNLOAD_FAILURE:
      return {
        ...state,
        isRequesting: false,
        requestSuccessful: false,
        hasError: true
      };

    case GET_ALLDOWNLOADLINKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        downloadlinks: get(action, 'payload.data')
      };

    case ADD_DOWNLOAD_SUCCESS:
    case EDIT_DOWNLOAD_SUCCESS:
    case DELETE_DOWNLOAD_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        requestSuccessful: true,
        addWallpaperSuccessful: true,
        hasError: false
      };

    case LOGOUT:
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default download;
