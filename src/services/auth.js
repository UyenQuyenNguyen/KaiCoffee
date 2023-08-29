import axios from "axios";
import { url } from "./api";

export const signIn = async(user) =>{
    return await axios.post(`${url}/auth/signin/`, user);
}

export const signUp = async (user) => {
    return await axios.post(`${url}/auth/signup/`, user);
};

export const logOutAcc = async () => {
    return await axios.post(`${url}/auth/logout`);
}