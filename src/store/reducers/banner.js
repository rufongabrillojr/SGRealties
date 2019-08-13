import { get } from 'lodash';
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
  LOGOUT,
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  isRequesting: false,
  requestSuccessful: false,
  hasError: false,
  error: {},
  payload: {},
  banners: [],
};

const banner = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNERS_REQUEST:
      return {
        ...state,
        isFetching: true,
        hasError: false,
      };

    case CREATE_BANNER_REQUEST:
    case DELETE_BANNER_REQUEST:
      return {
        ...state,
        isRequesting: true,
        hasError: false,
      };

    case GET_BANNERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        payload: get(action, 'payload'),
      };

    case CREATE_BANNER_FAILURE:
    case DELETE_BANNER_FAILURE:
      return {
        ...state,
        isRequesting: false,
        requestSuccessful: false,
        hasError: true,
        payload: get(action, 'payload'),
      };

    case GET_BANNERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        banners: get(action, 'payload.banners'),
      };

    case CREATE_BANNER_SUCCESS:
    case DELETE_BANNER_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        requestSuccessful: true,
        payload: get(action, 'payload'),
      };

    case LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default banner;
