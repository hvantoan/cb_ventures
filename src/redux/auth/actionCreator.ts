import authApi from '@/config/api/authApi'
import { LoginReq as LoginReq } from '@/models/AuthModel'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const LoginAction = createAsyncThunk('auth/login', async (userData: LoginReq, { rejectWithValue }) => {
  try {
    console.log(userData)
    const { data } = await authApi.login(userData)
    localStorage.setItem('userInfo', JSON.stringify(true))
    return true
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error?.response?.data)
  }
})
export const RegisterAction = createAsyncThunk('auth/register', () => {})
