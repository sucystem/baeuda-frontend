import axiosClient from "./axios";

const userAPI = {
    loginUser: (params) => {
        const url = '/users/login';
        return axiosClient.post(url, params);
    }
}

export default userAPI;