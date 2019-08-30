import { ICocktail } from '../entities/cocktail'

const reducer = (state: ICocktail[] | [] = [], action: any = {}) => {
    switch (action.type) {
        case 'FETCH_COCKTAILS_SUCCESS':
            return [...state, ...action.payload]

        default:
            return state
    }
}
  
export default reducer;