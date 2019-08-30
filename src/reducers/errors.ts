import { CockTailActionTypes } from '../actions/cocktails'
import { ErrorActionTypes } from '../actions/errors'

const reducer = (state: string | null = null, action: any = {}) => {
    switch (action.type) {
        case CockTailActionTypes.FETCH_COCKTAILS_FAILED:
            return action.payload.errormessage
        
        case ErrorActionTypes.RESET_ERRORS:
            return null
 
        default:
            return state
    }
}
  
export default reducer;