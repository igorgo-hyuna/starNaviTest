import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://demo1030918.mockable.io/'
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data});
    }
};



