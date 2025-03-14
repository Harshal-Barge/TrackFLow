import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"
import api from "@/config/api";

export const register = (userData) => {
    return async (dispatch) => {
        dispatch({ type: REGISTER_REQUEST })
        try {
            const { data } = await api.post("/auth/signup", userData);
            if (data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                api.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;
                dispatch({ type: REGISTER_SUCCESS, payload: data });
            }
            console.log("register success", data);
            return { meta: { requestStatus: "fulfilled" } };
        } catch (error) {
            console.log(error)
            dispatch({ type: REGISTER_FAILURE, error: error.response.data })
            return { meta: { requestStatus: "rejected" } };
        }
    }
}

export const login = (userData) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST })
        try {
            const { data } = await api.post("/auth/signin", userData);
            if (data.jwt) {
                localStorage.setItem("jwt", data.jwt)
                api.defaults.headers.common["Authorization"] = `Bearer ${data.jwt}`;
                dispatch({ type: LOGIN_SUCCESS, payload: data })
            }
            console.log("Login success", data);
            return { meta: { requestStatus: "fulfilled" } };
        } catch (error) {
            console.log(error.response.data)
            dispatch({ type: LOGIN_FAILURE, error: error.response.data })
            return { meta: { requestStatus: "rejected" } };
        }
    }
}

export const getUser = () => {
    return async (dispatch) => {
        dispatch({ type: GET_USER_REQUEST })
        try {
            const { data } = await api.get("/api/user/profile", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            dispatch({ type: GET_USER_SUCCESS, payload: data })
            return { meta: { requestStatus: "fulfilled" } };
        } catch (error) {
            console.log(error)
            dispatch({ type: GET_USER_FAILURE, error: error.response.data })
            return { meta: { requestStatus: "rejected" } };
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch({ type: LOGOUT });
        localStorage.clear();
    }
}