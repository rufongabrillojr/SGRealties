import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import user from './user';
import article from './article';
import profile from './profile';
import album from './album';
import banner from './banner';
import tag from './tag';
import download from './download';
import photo from './photo';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const userPersistConfig = {
  key: 'user',
  storage,
};

const articlePersistConfig = {
  key: 'article',
  storage,
};

const profilePersistConfig = {
  key: 'profile',
  storage,
};

const albumPersistConfig = {
  key: 'album',
  storage,
};

const bannerPersistConfig = {
  key: 'banner',
  storage,
};

const tagPersistConfig = {
  key: 'tag',
  storage,
};

const downloadPersistConfig = {
  key: 'download',
  storage,
};

const photoPersistConfig = {
  key: 'photo',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  user: persistReducer(userPersistConfig, user),
  article: persistReducer(articlePersistConfig, article),
  profile: persistReducer(profilePersistConfig, profile),
  album: persistReducer(albumPersistConfig, album),
  banner: persistReducer(bannerPersistConfig, banner),
  tag: persistReducer(tagPersistConfig, tag),
  download: persistReducer(downloadPersistConfig, download),
  photo: persistReducer(photoPersistConfig, photo),
});

export default rootReducer;
