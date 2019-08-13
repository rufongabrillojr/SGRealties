import {
  GET_ALLDOWNLOADLINKS_REQUEST,
  ADD_DOWNLOAD_REQUEST,
  EDIT_DOWNLOAD_REQUEST,
  DELETE_DOWNLOAD_REQUEST,
} from './actionTypes';

export const getAllDownloadLinks = data => ({
  type: GET_ALLDOWNLOADLINKS_REQUEST,
  data,
});

export const addDownload = data => ({
  type: ADD_DOWNLOAD_REQUEST,
  data,
});

export const editDownload = data => ({
  type: EDIT_DOWNLOAD_REQUEST,
  data,
});

export const deleteDownload = data => ({
  type: DELETE_DOWNLOAD_REQUEST,
  data,
});
