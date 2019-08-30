import { ICocktailState } from '../entities/cocktail'
import { CockTailActionTypes } from '../actions/cocktails'

const reducer = (state: ICocktailState = [], action: any = {}) => {
    switch (action.type) {
        case CockTailActionTypes.FETCH_COCKTAILS_SUCCES:
            return [...state, ...action.payload]

        default:
            return state
    }
}
  
export default reducer;