import axiosClient from "./axiosClient";

const END_POINT = {
    USER: "User"
}

export const getUserAPI = () => {
    return axiosClient.get(`${END_POINT.USER}`)
}

export const deleteUserAPI = (id) => {
    return axiosClient.delete(`${END_POINT.USER}/${id}`);
}