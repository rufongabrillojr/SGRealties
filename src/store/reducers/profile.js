import { get } from 'lodash';
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
  LOGOUT
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  isRequesting: false,
  requestSuccessful: false,
  fetchSuccessful: false,
  hasError: false,
  error: {},
  payload: {},
  profiles: [],
  profileInfo: {}
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLPROFILES_REQUEST:
    case GET_PROFILEINFO_REQUEST:
      return {
        ...state,
        isFetching: true,
        fetchSuccessful: false,
        hasError: false
      };

    case ADD_PROFILE_REQUEST:
    case DELETE_PROFILE_REQUEST:
    case EDIT_PROFILE_REQUEST:
      return {
        ...state,
        isRequesting: true,
        hasError: false
      };

    case GET_ALLPROFILES_FAILURE:
    case GET_PROFILEINFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case ADD_PROFILE_FAILURE:
    case DELETE_PROFILE_FAILURE:
    case EDIT_PROFILE_FAILURE:
      return {
        ...state,
        isRequesting: false,
        requestSuccessful: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case GET_ALLPROFILES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        profiles: get(action, 'payload.profiles')
      };

    case GET_PROFILEINFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchSuccessful: true,
        profileInfo: get(action, 'payload.profiles')
      };

    case ADD_PROFILE_SUCCESS:
    case DELETE_PROFILE_SUCCESS:
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        requestSuccessful: true,
        isFetching: false,
        payload: get(action, 'payload')
      };

    case LOGOUT:
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default profile;
