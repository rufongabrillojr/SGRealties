import { get } from 'lodash';
import { GET_PUBLICPHOTOS_REQUEST, GET_PUBLICPHOTOS_FAILURE, GET_PUBLICPHOTOS_SUCCESS, GET_PRIVATEPHOTOS_REQUEST, GET_PRIVATEPHOTOS_FAILURE, GET_PRIVATEPHOTOS_SUCCESS, ADD_PHOTOS_REQUEST, ADD_PHOTOS_FAILURE, ADD_PHOTOS_SUCCESS, LOGOUT } from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  isRequesting: false,
  isFetchingPublic: false,
  isFetchingPrivate: false,
  requestSuccessful: false,
  fetchSuccessful: false,
  hasError: false,
  error: {},
  payload: {},
  public: [],
  private: []
};

const photo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHOTOS_REQUEST:
      return {
        ...state,
        isRequesting: true,
        hasError: false
      };

    case GET_PUBLICPHOTOS_REQUEST:
      return {
        ...state,
        isFetchingPublic: true,
        isFetching: true,
        fetchSuccessful: false,
        hasError: false
      };

    case GET_PRIVATEPHOTOS_REQUEST:
      return {
        ...state,
        isFetchingPrivate: true,
        isFetching: true,
        fetchSuccessful: false,
        hasError: false
      };

    case ADD_PHOTOS_FAILURE:
      return {
        ...state,
        isRequesting: false,
        hasError: true,
        requestSuccessful: false
      };

    case GET_PUBLICPHOTOS_FAILURE:
    case GET_PRIVATEPHOTOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        payload: get(action, 'payload')
      };

    case ADD_PHOTOS_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        hasError: false,
        requestSuccessful: true,
        payload: get(action, 'payload')
      };

    case GET_PUBLICPHOTOS_SUCCESS:
      return {
        ...state,
        isFetchingPublic: false,
        isFetching: false,
        fetchSuccessful: true,
        public: get(action, 'payload.albums')
      };

    case GET_PRIVATEPHOTOS_SUCCESS:
      return {
        ...state,
        isFetchingPrivate: false,
        isFetching: false,
        fetchSuccessful: true,
        private: get(action, 'payload.albums')
      };

    case LOGOUT:
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default photo;
