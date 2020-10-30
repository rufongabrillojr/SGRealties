import {
  GET_BANNERS_REQUEST,
  CREATE_BANNER_REQUEST,
  DELETE_BANNER_REQUEST,
} from './actionTypes';

export const getBanners = data => ({
  type: GET_BANNERS_REQUEST,
  data,
});

export const createBanner = data => ({
  type: CREATE_BANNER_REQUEST,
  data,
});

export const deleteBanner = data => ({
  type: DELETE_BANNER_REQUEST,
  data,
});
