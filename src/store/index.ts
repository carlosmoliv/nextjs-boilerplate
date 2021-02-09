import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';
import rootReducer from './ducks';

import { IReducerTokenState } from './ducks/auth';

const persistConfig = {
  key: 'root',
  storage
  // blacklist: ['user'], // Não armazena no persist o state do user
  // whitelist: ['auth'] // Armazena apenas no auth no state
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(persistedReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

export { store, persistor };

export interface IReduxState {
  auth: IReducerTokenState;
}
