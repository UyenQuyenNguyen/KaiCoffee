import axios from "axios";
import { url } from "./api";
let token = localStorage.getItem('token')
//GUEST

export const getallProducts = async (id) => {
    id = id || "";
    return await axios.get(`${url}/products/${id}`);
};

//ADMIN 
export const addProduct = async (product) => {
    return await axios.post(`${url}/products/`, product, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
};

export const editProduct = async (id, product) => {
    return await axios.put(`${url}/products/${id}`, product);
};

export const deleteProduct = async (id) => {
    return await axios.delete(`${url}/products/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },});
};