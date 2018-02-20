import types from "./types"
import axios from "axios";

const BASE_URL = "http://api.reactprototypes.com";

export function signUp(cred){
    return dispatch => {
        axios.post(`${BASE_URL}/signup`, cred).then(resp => {
            console.log("Sign Up Response:", resp);
            localStorage.setItem("token", response.data.token);
            dispatch({
                type: types.SIGN_UP
            });
        }).catch(err => {
            console.log("Sign Up ERROR:", err.response.data.error);
            if (err.response){
                return dispatch ({
                    type: types.ERROR,
                    error: err.response.data.error
                })
            }
            dispatch({
                type: types.ERROR,
                error: "Error creating account. Please try again."
            })
        });
    }
}

export function signIn(cred){
    return async dispatch => {
        try{
            const response = await axios.post(`${BASE_URL}/signin`, cred);
            console.log("sign in response:", response);
            localStorage.setItem("token", response.data.token);
            dispatch({
                type: types.SIGN_IN
            });
        } catch (err){
            console.log("Sign In Error:", err.message);
            dispatch({
                type: types.ERROR,
                error: "Invalid email or password"
            })
        }

    }
}