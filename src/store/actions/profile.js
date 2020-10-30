import { GET_ALLPROFILES_REQUEST, ADD_PROFILE_REQUEST, DELETE_PROFILE_REQUEST, EDIT_PROFILE_REQUEST, GET_PROFILEINFO_REQUEST } from './actionTypes';

export const getAllProfiles = data => ({
  type: GET_ALLPROFILES_REQUEST,
  data
});

export const addProfile = data => ({
  type: ADD_PROFILE_REQUEST,
  data
});

export const getProfileInfo = data => ({
  type: GET_PROFILEINFO_REQUEST,
  data
});

export const deleteProfile = data => ({
  type: DELETE_PROFILE_REQUEST,
  data
});

export const editProfile = data => ({
  type: EDIT_PROFILE_REQUEST,
  data
});
