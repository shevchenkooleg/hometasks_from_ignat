import axios from "axios";

export const RequestAPI = {
    testingRequest(success: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: true})
            .then(response => {
                return response
            })
    }
}