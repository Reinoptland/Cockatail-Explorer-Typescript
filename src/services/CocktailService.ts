import { baseUrl } from '../config/constants'
import { Dispatch } from 'redux'
import { dispatch, getState } from '../config/store'
import { 
    IFetchCocktailsSuccesAction,
    IFetchCocktailsFailedAction,
    CockTailActionTypes
} from '../actions/cocktails'
import { ICocktail } from '../entities/cocktail';

class CocktailService {
    baseUrl: string
    dispatch: Dispatch
    getState: any

    constructor(baseUrl: string, dispatch: Dispatch, getState: () => {}){
        this.baseUrl = baseUrl
        this.dispatch = dispatch
        this.getState = getState
    }

    public getMargaritas = (): Promise<any> => {
        return (async () => {
            // if(this.getState().cocktails !== 0) return 

            try {
                const res = await fetch(`${this.baseUrl}search.php?s=margarita`)
                const json = await res.json()
                const action: IFetchCocktailsSuccesAction = {
                    type: CockTailActionTypes.FETCH_COCKTAILS_SUCCES,
                    payload: json.drinks as ICocktail[]
                }
                this.dispatch(action)
            } catch(error) {
                const action: IFetchCocktailsFailedAction = {
                    type: CockTailActionTypes.FETCH_COCKTAILS_FAILED,
                    payload: {
                        errormessage: error 
                    }
                }
                this.dispatch(action)
            }
        })();
    }
}

const CocktailServiceInstance = new CocktailService(baseUrl, dispatch, getState)

export default CocktailServiceInstance