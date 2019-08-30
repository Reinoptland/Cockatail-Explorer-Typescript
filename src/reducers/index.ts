import { combineReducers } from 'redux';

import cocktails from './cocktails';
import errors from './errors';

export default combineReducers({ 
    cocktails,
    errors
});