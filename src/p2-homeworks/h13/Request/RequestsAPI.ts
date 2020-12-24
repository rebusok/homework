import axios from "axios";

const RequestsApi = {
    PostCall: async (check:boolean) => {
        return await axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {

            success: check

        })
    }
};

export default RequestsApi;