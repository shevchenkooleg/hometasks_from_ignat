import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
});

export const RequestAPI = {
    testingRequest(success: boolean) {
        return instance.post('auth/test', {success: success})
            .then(response => {
                return response
            })
    }
}