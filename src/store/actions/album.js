import {
  GET_ALLALBUMS_REQUEST,
  CREATE_ALBUM_REQUEST,
  GET_MYALBUM_REQUEST,
  UPDATE_FEATUREDALBUM_REQUEST,
  UPDATE_ALBUMPICTURE_REQUEST,
  UPDATE_ALBUMVIDEO_REQUEST,
  GET_PUBLISHEDALBUMS_REQUEST,
  UPDATE_ALBUMSTATUS_REQUEST,
  PUBLISH_ALBUM_REQUEST,
  UPDATE_ALBUMINFO_REQUEST,
  GET_ALBUMINFO_REQUEST,
  GET_APPROVEDALBUMS_REQUEST,
  GET_PENDINGALBUMS_REQUEST,
  GET_REJECTEDALBUMS_REQUEST,
  DELETE_ALBUM_REQUEST
} from './actionTypes';

export const getApprovedAlbums = data => ({
  type: GET_APPROVEDALBUMS_REQUEST,
  data
});

export const getPendingAlbums = data => ({
  type: GET_PENDINGALBUMS_REQUEST,
  data
});

export const getRejectedAlbums = data => ({
  type: GET_REJECTEDALBUMS_REQUEST,
  data
});

export const getAllAlbums = data => ({
  type: GET_ALLALBUMS_REQUEST,
  data
});

export const createAlbum = data => ({
  type: CREATE_ALBUM_REQUEST,
  data
});

export const getMyAlbum = data => ({
  type: GET_MYALBUM_REQUEST,
  data
});

export const updateFeaturedAlbum = data => ({
  type: UPDATE_FEATUREDALBUM_REQUEST,
  data
});

export const updateAlbumPicture = data => ({
  type: UPDATE_ALBUMPICTURE_REQUEST,
  data
});

export const updateAlbumVideo = data => ({
  type: UPDATE_ALBUMVIDEO_REQUEST,
  data
});

export const getPublishedAlbums = data => ({
  type: GET_PUBLISHEDALBUMS_REQUEST,
  data
});

export const updateAlbumStatus = data => ({
  type: UPDATE_ALBUMSTATUS_REQUEST,
  data
});

export const publishAlbum = data => ({
  type: PUBLISH_ALBUM_REQUEST,
  data
});

export const updateAlbumInfo = data => ({
  type: UPDATE_ALBUMINFO_REQUEST,
  data
});

export const getAlbumInfo = data => ({
  type: GET_ALBUMINFO_REQUEST,
  data
});

export const removeAlbum = data => ({
  type: DELETE_ALBUM_REQUEST,
  data
});
