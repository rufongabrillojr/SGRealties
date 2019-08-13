import {
  ADD_PHOTOS_REQUEST,
  GET_PUBLICPHOTOS_REQUEST,
  GET_PRIVATEPHOTOS_REQUEST,
} from './actionTypes';

export const addPhotos = data => ({
  type: ADD_PHOTOS_REQUEST,
  data,
});

export const getPublicPhotos = data => ({
  type: GET_PUBLICPHOTOS_REQUEST,
  data,
});

export const getPrivatePhotos = data => ({
  type: GET_PRIVATEPHOTOS_REQUEST,
  data,
});
