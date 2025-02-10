import api from "@/config/api";
import { FETCH_CHAT_BY_PROJECT_FAILURE, FETCH_CHAT_BY_PROJECT_REQUEST, FETCH_CHAT_BY_PROJECT_SUCCESS, FETCH_CHAT_MESSAGES_FAILURE, FETCH_CHAT_MESSAGES_REQUEST, FETCH_CHAT_MESSAGES_SUCCESS, SEND_MESSAGE_FAILURE, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS } from "./ActionTypes"

export const sendMessage = (messageData) => {
    return async (dispatch) => {
        dispatch({ type: SEND_MESSAGE_REQUEST });
        try {
            const { data } = await api.post("/api/message/send", messageData);
            dispatch({
                type: SEND_MESSAGE_SUCCESS,
                message: data
            });
        } catch (error) {
            console.log(error)
            dispatch({
                type: SEND_MESSAGE_FAILURE,
                error: error.response.data
            })
        }
    }
}

export const fetchChatByProject = (projectId) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_CHAT_BY_PROJECT_REQUEST });
        try {
            const { data } = await api.get(`api/project/getChat/${projectId}`);
            dispatch({
                type: FETCH_CHAT_BY_PROJECT_SUCCESS,
                chat: data
            });
        } catch (error) {
            console.log(error)
            dispatch({
                type: FETCH_CHAT_BY_PROJECT_FAILURE,
                error: error.response.data
            })
        }
    }
}

export const fetchChatMessages = (chatId) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_CHAT_MESSAGES_REQUEST });
        try {
            const { data } = await api.get(`api/message/chat/${chatId}`);
            dispatch({
                type: FETCH_CHAT_MESSAGES_SUCCESS,
                messages: data
            });
        } catch (error) {
            console.log(error)
            dispatch({
                type: FETCH_CHAT_MESSAGES_FAILURE,
                error: error.response.data
            })
        }
    }
}