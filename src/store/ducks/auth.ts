import Router from 'next/router';

import { Dispatch } from 'react';
import { persistStore } from 'redux-persist';
import { store } from 'src/store';

//#region TYPES
const ADD_TOKEN_LOCAL = 'ADD_TOKEN_LOCAL';
const REMOVE_TOKEN = 'REMOVE_TOKEN';

//#region  EXEMPLO
export interface IReducerTokenState {
  token: string;
}
//#endregion

export interface IAddTokenAuth {
  type: typeof ADD_TOKEN_LOCAL;
  payload: boolean;
}
export interface IRemoveAuth {
  type: typeof REMOVE_TOKEN;
}

type AuthActionTypes = IAddTokenAuth | IRemoveAuth;

//#endregion

// #region REDUCER
const INITIAL_STATE: IReducerTokenState = {
  token: undefined
};

export default function auth(state = INITIAL_STATE, action: AuthActionTypes) {
  switch (action.type) {
    case ADD_TOKEN_LOCAL:
      return { token: action.payload };
    case REMOVE_TOKEN:
      return { token: undefined };
    default:
      return state;
  }
}
//#endregion

//#region  ACTIONS
export const Creators = {
  authenticated: (token: string) => (dispatch: Dispatch<any>) => {
    dispatch({
      type: ADD_TOKEN_LOCAL,
      payload: token
    });
  },
  logout: () => (dispatch: Dispatch<AuthActionTypes>) => {
    dispatch({
      type: REMOVE_TOKEN
    });
    persistStore(store).purge();
  }
};
//#endregion
