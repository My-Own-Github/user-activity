import Types from './types';

const isUserVerified = (payload) =>{
    return {
        type: Types.IS_USER_AUTH,
        payload: payload
    }
}

const getUserList = (payload) =>{
    return {
        type: Types.USERS_LIST,
        payload: payload
    }
}

const getActiveUser = (payload) =>{
    return {
        type: Types.ACTIVE_USER,
        payload: payload
    }
}
const getInActiveUser = (payload) =>{
    return {
        type: Types.INACTIVE_USER,
        payload: payload
    }
}

export default { 
    isUserVerified,
    getUserList,
    getInActiveUser,
    getActiveUser
};