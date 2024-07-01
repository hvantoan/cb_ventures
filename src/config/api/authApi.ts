import { Enpoints } from '@/constants/enpoints'
import { axiosNotToken } from './axiosClient'
import { LoginReq, RegisterReq } from '@/models/AuthModel'

const authApi = {
  login: (data: LoginReq) => axiosNotToken.post(Enpoints.LOGIN, data),
  register: (body: RegisterReq) => axiosNotToken.post(Enpoints.REGISTER, body),
}

export default authApi
