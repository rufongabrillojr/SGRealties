import {
  GET_TAGS_REQUEST,
  ADD_TAG_REQUEST,
  DELETE_TAG_REQUEST,
} from './actionTypes';

export const getTags = data => ({
  type: GET_TAGS_REQUEST,
  data,
});

export const addTag = data => ({
  type: ADD_TAG_REQUEST,
  data,
});

export const deleteTag = data => ({
  type: DELETE_TAG_REQUEST,
  data,
});
