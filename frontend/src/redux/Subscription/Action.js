import api from "@/config/api";
import { GET_USER_SUBSCRIPTION_FAILURE, GET_USER_SUBSCRIPTION_REQUEST, GET_USER_SUBSCRIPTION_SUCCESS, UPDATE_SUBSCRIPTION_FAILURE, UPDATE_SUBSCRIPTION_REQUEST, UPDATE_SUBSCRIPTION_SUCCESS } from "./ActionTypes"

export const getUserSubscription = () => {
    return async (dispatch) => {
        dispatch({ type: GET_USER_SUBSCRIPTION_REQUEST });
        try {
            const { data } = await api.get("/api/subscription/user");
            dispatch({
                type: GET_USER_SUBSCRIPTION_SUCCESS,
                subscription: data
            })
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: GET_USER_SUBSCRIPTION_FAILURE,
                error
            })
        }
    }
}

export const upgradeSubscription = ({ planType }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_SUBSCRIPTION_REQUEST });
        try {
            const { data } = await api.patch("/api/subscription/upgrade", null, {
                params: {
                    planType: planType
                }
            });
            dispatch({
                type: UPDATE_SUBSCRIPTION_SUCCESS,
                subscription: data
            })
        } catch (error) {
            console.log("error", error);
            dispatch({
                type: UPDATE_SUBSCRIPTION_FAILURE,
                error
            })
        }
    }
}