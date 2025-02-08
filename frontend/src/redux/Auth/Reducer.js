import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null,
    projectSize: 0
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return { ...state, loading: true }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, loading: false, jwt: action.payload.jwt }

        case GET_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload }

        case LOGOUT:
            return initialState

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return { ...state, loading: false, error: action.error }

        default:
            return state;
    }
}