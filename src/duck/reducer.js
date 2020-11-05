import Types from './types'

const iState = {}

const ReducerUserActivity = (state = iState, action) => {
    switch (action.type) {
        case Types.IS_USER_AUTH:
            return { ...state, isUserVerified: action.payload }
        case Types.USERS_LIST:
            return { ...state, userList: action.payload }
        case Types.ACTIVE_USER:
            return { ...state, activeUser: action.payload }
        case Types.INACTIVE_USER:
            return { ...state, inactiveUser: action.payload }

        default:
            return state;
    }
}


export default ReducerUserActivity;