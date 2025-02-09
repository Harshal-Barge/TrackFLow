import api, { API_BASE_URL } from "@/config/api"
import { ACCEPT_INVITATION_FAILURE, ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, CREATE_PROJECT_FAILURE, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECT_BY_ID_FAILURE, FETCH_PROJECT_BY_ID_REQUEST, FETCH_PROJECT_BY_ID_SUCCESS, FETCH_PROJECT_FAILURE, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS, INVITE_TO_PROJECT_FAILURE, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS, SEARCH_PROJECT_FAILURE, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS } from "./ActionTypes"

export const fetchProjects = ({ category, tag }) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_PROJECT_REQUEST })
        try {
            const { data } = await api.get("/api/project/getProjects", { params: { category, tag } })
            console.log("fetch projects", data)
            dispatch({ type: FETCH_PROJECT_SUCCESS, projects: data })
        } catch (error) {
            console.log(error);
            dispatch({ type: FETCH_PROJECT_FAILURE, error: error })
        }
    }
}

export const searchProjects = ({ keyWord }) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_PROJECT_REQUEST })
        try {
            const { data } = await api.get("/api/project/search", { params: { keyWord } })
            console.log("search projects", data)
            dispatch({ type: SEARCH_PROJECT_SUCCESS, projects: data })
        } catch (error) {
            console.log(error);
            dispatch({ type: SEARCH_PROJECT_FAILURE, error: error })
        }
    }
}

export const createProjects = (projectData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_PROJECT_REQUEST })
        try {
            const { data } = await api.post("/api/project/create", projectData)
            console.log("create project", data)
            dispatch({ type: CREATE_PROJECT_SUCCESS, project: data })
        } catch (error) {
            console.log(error);
            dispatch({ type: CREATE_PROJECT_FAILURE, error: error })
        }
    }
}

export const fetchProjectByID = (projectId) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_PROJECT_BY_ID_REQUEST })
        try {
            const { data } = await api.get(`/api/project/${projectId}`)
            console.log("fetch by id project", data)
            dispatch({ type: FETCH_PROJECT_BY_ID_SUCCESS, project: data })
        } catch (error) {
            console.log(error);
            dispatch({ type: FETCH_PROJECT_BY_ID_FAILURE, error: error })
        }
    }
}

export const deleteProject = (projectId) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_PROJECT_REQUEST })
        try {
            const { data } = await api.delete(`/api/project/${projectId}`)
            console.log("delete project", data)
            dispatch({ type: DELETE_PROJECT_SUCCESS, projectId })
        } catch (error) {
            console.log(error);
            dispatch({ type: DELETE_PROJECT_FAILURE, error: error })
        }
    }
}

export const inviteToProject = ({ email, projectId }) => {
    return async (dispatch) => {
        dispatch({ type: INVITE_TO_PROJECT_REQUEST })
        try {
            const { data } = await api.post("/api/project/invite", { email, projectId })
            console.log("invite project", data)
            dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data })
        } catch (error) {
            console.log(error);
            dispatch({ type: INVITE_TO_PROJECT_FAILURE, error: error })
        }
    }
}

export const acceptProjectInvite = ({ invitationToken, navigate }) => {
    return async (dispatch) => {
        dispatch({ type: ACCEPT_INVITATION_REQUEST })
        try {
            const { data } = await api.get("/api/project/accept_invite", { params: { token: invitationToken } })
            navigate("/project" + data.projectId)
            console.log("accept invite project", data)
            dispatch({ type: ACCEPT_INVITATION_SUCCESS, payload: data })
        } catch (error) {
            console.log(error);
            dispatch({ type: ACCEPT_INVITATION_FAILURE, error: error })
        }
    }
}