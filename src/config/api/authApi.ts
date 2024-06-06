import { Enpoints } from "@/constants/enpoints";
import { axiosNotToken } from "./axiosClient";
import { loginReq, registerReq } from "@/models/authModel";

const authApi = {
    login: (data: loginReq) => axiosNotToken.post(Enpoints.LOGIN, data),
    register: (body: registerReq) => axiosNotToken.post(Enpoints.REGISTER, body),
};

export default authApi;
