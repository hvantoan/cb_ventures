import authApi from '@/config/api/authApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface LoginState {
  username: string
  password: string
}

export interface RegisterState {
  username: string
  password: string
}

export const LoginAction = createAsyncThunk('auth/login', async (userData: LoginState, { rejectWithValue }) => {
  try {
    const { data } = await authApi.login(userData)
    localStorage.setItem('userInfo', JSON.stringify(data))
    return true
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error?.response?.data)
  }
})
export const RegisterAction = createAsyncThunk('auth/register', () => {})
