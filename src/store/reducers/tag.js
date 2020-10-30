import { get } from 'lodash';
import { GET_TAGS_REQUEST, GET_TAGS_FAILURE, GET_TAGS_SUCCESS, ADD_TAG_REQUEST, ADD_TAG_FAILURE, ADD_TAG_SUCCESS, DELETE_TAG_REQUEST, DELETE_TAG_FAILURE, DELETE_TAG_SUCCESS, LOGOUT } from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  isRequesting: false,
  requestSuccessful: false,
  hasError: false,
  error: {},
  payload: {},
  tags: []
};

const tag = (state = initialState, action) => {
  switch (action.type) {
    case GET_TAGS_REQUEST:
      return {
        ...state,
        isFetching: true,
        hasError: false
      };

    case ADD_TAG_REQUEST:
    case DELETE_TAG_REQUEST:
      return {
        ...state,
        error: {},
        isRequesting: true,
        hasError: false
      };

    case GET_TAGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case ADD_TAG_FAILURE:
    case DELETE_TAG_FAILURE:
      return {
        ...state,
        isRequesting: false,
        hasError: true,
        error: get(action, 'payload'),
        requestSuccessful: false,
        payload: get(action, 'payload')
      };

    case GET_TAGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        requestSuccessful: true,
        isRequesting: false,
        tags: get(action, 'payload.tags.tag_name')
      };

    case ADD_TAG_SUCCESS:
    case DELETE_TAG_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        hasError: false,
        error: {},
        requestSuccessful: true,
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

export default tag;
