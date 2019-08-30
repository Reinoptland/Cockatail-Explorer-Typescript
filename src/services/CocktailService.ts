import { BASE_URL, RETRY_COUNT } from '../config/constants'
import { Dispatch } from 'redux'
import { dispatch, getState } from '../config/store'
import { 
    IFetchCocktailsSuccesAction,
    IFetchCocktailsFailedAction,
    CockTailActionTypes
} from '../actions/cocktails'
import {
    IResetErrorAction,
    ErrorActionTypes
} from '../actions/errors'

import { ICocktail } from '../entities/cocktail';

class CocktailService {
    BASEURL: string
    dispatch: Dispatch
    getState: any
    retries: number
    maxretries: number

    constructor(BASEURL: string, dispatch: Dispatch, getState: () => {}, RETRY_COUNT: number){
        this.BASEURL = BASEURL
        this.dispatch = dispatch
        this.getState = getState
        this.maxretries = RETRY_COUNT
        this.retries = RETRY_COUNT
    }

    public getMargaritas = (): Promise<any> => {
        return (async () => {
            // only fetch cocktails if we don't have them in the state
            const state = this.getState()
            if(state.cocktails.length !== 0) return 

            try {
                const res = await fetch(`${this.BASEURL}search.php?s=margarita`)
                const json = await res.json()
                const action: IFetchCocktailsSuccesAction = {
                    type: CockTailActionTypes.FETCH_COCKTAILS_SUCCES,
                    payload: json.drinks as ICocktail[]
                }
                this.dispatch(action)
                this.resetErrors()
            } catch(error) {
                const action: IFetchCocktailsFailedAction = {
                    type: CockTailActionTypes.FETCH_COCKTAILS_FAILED,
                    payload: {
                        errormessage: error.message
                    }
                }
                this.dispatch(action)

                setTimeout(() => {
                    this.retries = this.retries - 1
                    this.getMargaritas()
                }, 10000)
            }
        })();
    }

    public resetErrors = () => {
        const state = this.getState()
        if(state.errors !== null){
            const resetErrorAction: IResetErrorAction = {
                type: ErrorActionTypes.RESET_ERRORS
            }
            this.dispatch(resetErrorAction)
            this.retries = this.maxretries
        }
    }

}

const CocktailServiceInstance = new CocktailService(BASE_URL, dispatch, getState, RETRY_COUNT)

export default CocktailServiceInstance