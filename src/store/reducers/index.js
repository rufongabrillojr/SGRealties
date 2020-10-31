import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';

const authPersistConfig = {
  key: 'auth',
  storage,
};



const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
});

export default rootReducer;
