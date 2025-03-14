import { ACCEPT_INVITATION_FAILURE, ACCEPT_INVITATION_REQUEST, CREATE_PROJECT_FAILURE, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECT_BY_ID_FAILURE, FETCH_PROJECT_BY_ID_REQUEST, FETCH_PROJECT_BY_ID_SUCCESS, FETCH_PROJECT_FAILURE, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS, INVITE_TO_PROJECT_FAILURE, INVITE_TO_PROJECT_REQUEST, SEARCH_PROJECT_FAILURE, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS } from "./ActionTypes";

const initialState = {
    projects: [],
    loading: false,
    error: null,
    projectDetails: null,
    searchProjects: []
}

export const ProjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROJECT_REQUEST:
        case CREATE_PROJECT_REQUEST:
        case FETCH_PROJECT_BY_ID_REQUEST:
        case DELETE_PROJECT_REQUEST:
        case SEARCH_PROJECT_REQUEST:
        case ACCEPT_INVITATION_REQUEST:
        case INVITE_TO_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }

        case FETCH_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: action.projects,
                error: null
            }

        case SEARCH_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                searchProjects: action.projects,
                error: null
            }

        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: [...state.projects, action.project],
                error: null
            }

        case FETCH_PROJECT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                projectDetails: action.project,
                error: null
            }

        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: state.projects.filter(
                    (project) => project.id !== action.projectId
                ),
                error: null
            }

        case FETCH_PROJECT_FAILURE:
        case CREATE_PROJECT_FAILURE:
        case FETCH_PROJECT_BY_ID_FAILURE:
        case DELETE_PROJECT_FAILURE:
        case SEARCH_PROJECT_FAILURE:
        case ACCEPT_INVITATION_FAILURE:
        case INVITE_TO_PROJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state;
    }
}