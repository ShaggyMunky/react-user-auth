import types from "./types"
import axios from "axios";

const BASE_URL = "http://api.reactprototypes.com";

export function signUp(cred){
    return dispatch => {
        axios.post(`${BASE_URL}/signup`, cred).then(resp => {
            console.log("Sign Up Response:", resp)
        }).catch(err => {
            console.log("Sign Up ERROR:", err.message)
        });
    }
}

export function signIn(cred){
    return async dispatch => {
        try{
            const response = await axios.post(`${BASE_URL}/signin`, cred);
            console.log("sign in response:", response);
        } catch (err){
            console.log("Sign In Error:", err.message);
        }

    }
}