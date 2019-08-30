import { ICocktail } from '../entities/cocktail'

export enum CockTailActionTypes {
    FETCH_COCKTAILS_SUCCES = 'FETCH_COCKTAILS_SUCCES',
    FETCH_COCKTAILS_FAILED = 'FETCH_COCKTAILS_FAILED'
}

export interface IFetchCocktailsSuccesAction {
  type: CockTailActionTypes.FETCH_COCKTAILS_SUCCES
  payload: ICocktail[]
}

export interface IFetchCocktailsFailedAction {
  type: CockTailActionTypes.FETCH_COCKTAILS_FAILED,
  payload: {
      errormessage: string
  }
}

