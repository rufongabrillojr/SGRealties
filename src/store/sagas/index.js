import { fork, all } from 'redux-saga/effects';

import { loginWatcher } from './auth';
import {
  getAllArticlesWatcher,
  getMyArticlesWatcher,
  createArticleWatcher,
  getPublishedArticlesWatcher,
  getArticleInfoWatcher,
  updateArticleStatusWatcher,
  publishArticleWatcher,
  updateArticleInfoWatcher,
  getPendingArticlesWatcher,
  getApprovedArticlesWatcher,
  getRejectedArticlesWatcher,
  updateArticleFeaturedWatcher,
  deleteArticleWatcher
} from './article';
import { getCurrentUserWatcher, getUsersWatcher, getUserInfoWatcher, addUserWatcher, inviteUsersWatcher, updateAccountStatusWatcher, editUserInfoWatcher } from './user';
import { getAllProfilesWatcher, addProfileWatcher, getProfileInfoWatcher, deleteProfileWatcher, editProfileWatcher } from './profile';
import {
  getAllAlbumsWatcher,
  createAlbumWatcher,
  getMyAlbumWatcher,
  updateFeaturedAlbumWatcher,
  updateAlbumPictureWatcher,
  updateAlbumVideoWatcher,
  getPublishedAlbumsWatcher,
  updateAlbumStatusWatcher,
  publishAlbumWatcher,
  updateAlbumInfoWatcher,
  getAlbumInfoWatcher,
  getApprovedAlbumsWatcher,
  getPendingAlbumsWatcher,
  getRejectedAlbumsWatcher,
  deleteAlbumWatcher
} from './album';
import { getBannersWatcher, createBannerWatcher, deleteBannerWatcher } from './banner';
import { getTagsWatcher, addTagWatcher, deleteTagWatcher } from './tag';
import { getAllDownloadLinksWatcher, addDownloadWatcher, editDownloadWatcher, deleteDownloadWatcher } from './download';
import { getPublicPhotosWatcher, getPrivatePhotosWatcher, addPhotosWatcher } from './photo';

function* rootSaga() {
  yield all([fork(loginWatcher)]);
  yield all([fork(getCurrentUserWatcher)]);
  yield all([fork(getAllArticlesWatcher)]);
  yield all([fork(getUsersWatcher)]);
  yield all([fork(getAllProfilesWatcher)]);
  yield all([fork(getAllAlbumsWatcher)]);
  yield all([fork(getBannersWatcher)]);
  yield all([fork(getTagsWatcher)]);
  yield all([fork(getAllDownloadLinksWatcher)]);
  yield all([fork(getMyArticlesWatcher)]);
  yield all([fork(createArticleWatcher)]);
  yield all([fork(createAlbumWatcher)]);
  yield all([fork(createBannerWatcher)]);
  yield all([fork(deleteBannerWatcher)]);
  yield all([fork(getUserInfoWatcher)]);
  yield all([fork(getPublishedArticlesWatcher)]);
  yield all([fork(addUserWatcher)]);
  yield all([fork(getMyAlbumWatcher)]);
  yield all([fork(getArticleInfoWatcher)]);
  yield all([fork(updateFeaturedAlbumWatcher)]);
  yield all([fork(updateAlbumPictureWatcher)]);
  yield all([fork(updateAlbumVideoWatcher)]);
  yield all([fork(inviteUsersWatcher)]);
  yield all([fork(getPublishedAlbumsWatcher)]);
  yield all([fork(updateAccountStatusWatcher)]);
  yield all([fork(editUserInfoWatcher)]);
  yield all([fork(updateArticleStatusWatcher)]);
  yield all([fork(publishArticleWatcher)]);
  yield all([fork(addProfileWatcher)]);
  yield all([fork(getProfileInfoWatcher)]);
  yield all([fork(deleteProfileWatcher)]);
  yield all([fork(addTagWatcher)]);
  yield all([fork(deleteTagWatcher)]);
  yield all([fork(editProfileWatcher)]);
  yield all([fork(updateAlbumStatusWatcher)]);
  yield all([fork(addDownloadWatcher)]);
  yield all([fork(editDownloadWatcher)]);
  yield all([fork(publishAlbumWatcher)]);
  yield all([fork(deleteDownloadWatcher)]);
  yield all([fork(updateAlbumInfoWatcher)]);
  yield all([fork(getAlbumInfoWatcher)]);
  yield all([fork(updateArticleInfoWatcher)]);
  yield all([fork(getPendingArticlesWatcher)]);
  yield all([fork(getApprovedArticlesWatcher)]);
  yield all([fork(getRejectedArticlesWatcher)]);
  yield all([fork(getApprovedAlbumsWatcher)]);
  yield all([fork(getPendingAlbumsWatcher)]);
  yield all([fork(getRejectedAlbumsWatcher)]);
  yield all([fork(getPublicPhotosWatcher)]);
  yield all([fork(getPrivatePhotosWatcher)]);
  yield all([fork(addPhotosWatcher)]);
  yield all([fork(updateArticleFeaturedWatcher)]);
  yield all([fork(deleteAlbumWatcher)]);
  yield all([fork(deleteArticleWatcher)]);
}

export default rootSaga;
