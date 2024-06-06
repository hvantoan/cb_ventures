import authApi from '@/config/api/authApi'
import { loginReq } from '@/models/authModel'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const LoginAction = createAsyncThunk('auth/login', async (userData: loginReq, { rejectWithValue }) => {
  try {
    const { data } = await authApi.login(userData)
    localStorage.setItem('userInfo', JSON.stringify(data))
    return data
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error?.response?.data)
  }
})
export const RegisterAction = createAsyncThunk('auth/register', () => {})
