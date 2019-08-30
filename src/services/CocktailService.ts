import { baseUrl } from '../config/constants'
import { Dispatch } from 'redux'
import { dispatch, getState } from '../config/store'

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
                this.dispatch({
                    type: 'FETCH_COCKTAILS_SUCCESS',
                    payload: json.drinks
                })
            } catch(error) {
                this.dispatch({
                    type: 'FETCH_COCKTAILS_FAILED',
                    payload: error
                })
            }
        })();
    }
}

const CocktailServiceInstance = new CocktailService(baseUrl, dispatch, getState)

export default CocktailServiceInstance