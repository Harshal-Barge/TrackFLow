import {
    FETCH_CHAT_BY_PROJECT_REQUEST, FETCH_CHAT_MESSAGES_REQUEST, SEND_MESSAGE_REQUEST, FETCH_CHAT_MESSAGES_SUCCESS,
    SEND_MESSAGE_SUCCESS, FETCH_CHAT_BY_PROJECT_SUCCESS, SEND_MESSAGE_FAILURE, FETCH_CHAT_BY_PROJECT_FAILURE, FETCH_CHAT_MESSAGES_FAILURE
} from "./ActionTypes";

const initialState = {
    messages: [],
    loading: false,
    error: null,
    chat: null
}

export const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST:
        case FETCH_CHAT_BY_PROJECT_REQUEST:
        case FETCH_CHAT_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_CHAT_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: action.messages
            }

        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [...state.messages, action.message]
            }

        case FETCH_CHAT_BY_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: action.chat.messages,
                chat: action.chat
            }

        case SEND_MESSAGE_FAILURE:
        case FETCH_CHAT_MESSAGES_FAILURE:
        case FETCH_CHAT_BY_PROJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state;
    }
}