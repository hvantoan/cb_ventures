import { Enpoints } from '../constants/enpoints'
import { axiosNotToken } from './axiosClient'
import { LoginState, RegisterState } from '@/libs/redux/auth/actionCreator'

const authApi = {
  login: (data: LoginState) => axiosNotToken.post(Enpoints.LOGIN, data),
  register: (body: RegisterState) => axiosNotToken.post(Enpoints.REGISTER, body),
}

export default authApi
