import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER} from '../actions/session_action';

const nullSession ={
    id:null
}

const sessionReducer = (oldState = nullSession,action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {id:[action.currentUser.id]}
        case LOGOUT_CURRENT_USER:
            return nullSession
    
        default:
           return oldState;
    }
}

export default sessionReducer