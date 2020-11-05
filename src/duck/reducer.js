import Types from './types'

const iState = {}

const ReducerUserActivity = (state = iState, action) => {
    switch (action.type) {
        case Types.IS_USER_AUTH:
            return { ...state, isUserVerified: action.payload }
        case Types.USERS_LIST:
            return { ...state, userList: action.data }

        default:
            return state;
    }
}


export default ReducerUserActivity;