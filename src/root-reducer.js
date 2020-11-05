import { combineReducers } from 'redux';
import ReducerUserActivity from './duck/reducer'

const appReducer = combineReducers({
    userActivity : ReducerUserActivity
})
export const RootReducer = (state, action) => {
    // Clear all data in redux store to initial.
    if (action.type === 'CLEAR_SESSION')
        state = undefined;

    return appReducer(state, action);
};
