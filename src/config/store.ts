import { compose,  createStore } from 'redux'
import reducer from '../reducers'
import { ICocktailState } from '../entities/cocktail'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

const store = createStore(reducer, enhancer)

export interface IStore {
  cocktails: ICocktailState;
}

export default store

export const dispatch = store.dispatch
export const getState = store.getState
export const subscribe = store.subscribe