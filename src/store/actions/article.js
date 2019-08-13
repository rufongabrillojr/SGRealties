import {
  GET_ALLARTICLES_REQUEST,
  GET_MYARTICLES_REQUEST,
  CREATE_ARTICLE_REQUEST,
  GET_PUBLISHEDARTICLES_REQUEST,
  GET_ARTICLEINFO_REQUEST,
  UPDATE_ARTICLESTATUS_REQUEST,
  PUBLISH_ARTICLE_REQUEST,
  UPDATE_ARTICLEINFO_REQUEST,
  GET_PENDINGARTICLES_REQUEST,
  GET_APPROVEDARTICLES_REQUEST,
  GET_REJECTEDARTICLES_REQUEST,
  UPDATE_FEATUREDARTICLE_REQUEST,
  DELETE_ARTICLE_REQUEST
} from './actionTypes';

export const getRejectedArticles = data => ({
  type: GET_REJECTEDARTICLES_REQUEST,
  data
});

export const getApprovedArticles = data => ({
  type: GET_APPROVEDARTICLES_REQUEST,
  data
});

export const getPendingArticles = data => ({
  type: GET_PENDINGARTICLES_REQUEST,
  data
});

export const getAllArticles = data => ({
  type: GET_ALLARTICLES_REQUEST,
  data
});

export const getMyArticles = data => ({
  type: GET_MYARTICLES_REQUEST,
  data
});

export const createArticle = data => ({
  type: CREATE_ARTICLE_REQUEST,
  data
});

export const getPublishedArticles = data => ({
  type: GET_PUBLISHEDARTICLES_REQUEST,
  data
});

export const getArticleInfo = data => ({
  type: GET_ARTICLEINFO_REQUEST,
  data
});

export const updateArticleStatus = data => ({
  type: UPDATE_ARTICLESTATUS_REQUEST,
  data
});

export const publishArticle = data => ({
  type: PUBLISH_ARTICLE_REQUEST,
  data
});

export const updateArticleInfo = data => ({
  type: UPDATE_ARTICLEINFO_REQUEST,
  data
});

export const updateArticleFeatured = data => ({
  type: UPDATE_FEATUREDARTICLE_REQUEST,
  data
});

export const removeArticle = data => ({
  type: DELETE_ARTICLE_REQUEST,
  data
});
