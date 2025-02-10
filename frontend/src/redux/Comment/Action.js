import api from "@/config/api";
import { CREATE_COMMENT_FAILURE, CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, FETCH_COMMENT_FAILURE, FETCH_COMMENT_REQUEST, FETCH_COMMENT_SUCCESS } from "./ActionTypes"

export const createComment = (commentData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_COMMENT_REQUEST });
        try {
            const { data } = await api.post("/api/comment/create", commentData);
            dispatch({
                type: CREATE_COMMENT_SUCCESS,
                comment: data
            })
        } catch (error) {
            console.log("error", error)
            dispatch({ type: CREATE_COMMENT_FAILURE, error: error.response.data })
        }
    }
}

export const deleteComment = (commentId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_COMMENT_REQUEST });
        try {
            await api.delete(`/api/comment/${commentId}`);
            dispatch({
                type: DELETE_COMMENT_SUCCESS,
                commentId
            })
        } catch (error) {
            console.log("error", error)
            dispatch({ type: DELETE_COMMENT_FAILURE, error: error.response.data })
        }
    }
}

export const fetchComments = (issueId) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_COMMENT_REQUEST });
        try {
            const { data } = await api.get(`/api/comment/${issueId}`);
            dispatch({
                type: FETCH_COMMENT_SUCCESS,
                comments: data
            })
        } catch (error) {
            console.log("error", error)
            dispatch({ type: FETCH_COMMENT_FAILURE, error: error.response.data })
        }
    }
}