import api from "@/config/api";
import {
    ASSIGN_ISSUE_FAILURE, ASSIGN_ISSUE_REQUEST, ASSIGN_ISSUE_SUCCESS, CREATE_ISSUE_FAILURE, CREATE_ISSUE_REQUEST,
    CREATE_ISSUE_SUCCESS, DELETE_ISSUE_FAILURE, DELETE_ISSUE_REQUEST, DELETE_ISSUE_SUCCESS, FETCH_ISSUE_BY_ID_FAILURE,
    FETCH_ISSUE_BY_ID_REQUEST, FETCH_ISSUE_BY_ID_SUCCESS, FETCH_ISSUES_FAILURE, FETCH_ISSUES_REQUEST, FETCH_ISSUES_SUCCESS,
    UPDATE_ISSUE_STATUS_FAILURE, UPDATE_ISSUE_STATUS_REQUEST, UPDATE_ISSUE_STATUS_SUCCESS
} from "./ActionTypes"

export const createIssues = (issueData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_ISSUE_REQUEST });
        try {
            const { data } = await api.post("/api/issues/create", issueData);
            dispatch({
                type: CREATE_ISSUE_SUCCESS,
                issue: data
            })
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: CREATE_ISSUE_FAILURE,
                error: error.response.data
            })
        }
    }
}

export const fetchIssues = (projectId) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ISSUES_REQUEST });
        try {
            const { data } = await api.get(`/api/issues/project/${projectId}`);
            dispatch({
                type: FETCH_ISSUES_SUCCESS,
                issues: data
            })
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: FETCH_ISSUES_FAILURE,
                error: error.response.data
            })
        }
    }
}

export const fetchIssueById = (issueId) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_ISSUE_BY_ID_REQUEST });
        try {
            const { data } = await api.get(`/api/issues/${issueId}`);
            dispatch({
                type: FETCH_ISSUE_BY_ID_SUCCESS,
                issue: data
            })
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: FETCH_ISSUE_BY_ID_FAILURE,
                error: error.response.data
            })
        }
    }
}

export const updateIssueStatus = (issueId, status) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_ISSUE_STATUS_REQUEST });
        try {
            const { data } = await api.patch(`/api/issues/${issueId}/status/${status}`);
            dispatch({
                type: UPDATE_ISSUE_STATUS_SUCCESS,
                issue: data
            })
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: UPDATE_ISSUE_STATUS_FAILURE,
                error: error.response.data
            })
        }
    }
}

export const assigneIssueToUser = (issueId, userId) => {
    return async (dispatch) => {
        dispatch({ type: ASSIGN_ISSUE_REQUEST });
        try {
            const { data } = await api.patch(`/api/issues/${issueId}/assignee/${userId}`);
            dispatch({
                type: ASSIGN_ISSUE_SUCCESS,
                issue: data
            })
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: ASSIGN_ISSUE_FAILURE,
                error: error.response.data
            })
        }
    }
}

export const deleteIssue = (issueId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_ISSUE_REQUEST });
        try {
            await api.delete(`/api/issues/${issueId}`);
            dispatch({
                type: DELETE_ISSUE_SUCCESS,
                issueId
            })
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: DELETE_ISSUE_FAILURE,
                error: error.response.data
            })
        }
    }
}

