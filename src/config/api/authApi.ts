import { LoginState, RegisterState } from '@/redux'
import { Enpoints } from '../constants/enpoints'
import { axiosNotToken } from './axiosClient'

const authApi = {
  login: (data: LoginState) => axiosNotToken.post(Enpoints.LOGIN, data),
  register: (body: RegisterState) => axiosNotToken.post(Enpoints.REGISTER, body),
}

export default authApi
