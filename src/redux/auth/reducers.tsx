import Cookies from 'js-cookie'
import { createSlice } from '@reduxjs/toolkit'
import { removeItem, setItem } from '@/utils/localStorageControl'
import { LoginAction } from './actionCreator'

const initState = {
  login: Cookies.get('loggedIn') || '',
  loading: false,
  error: '',
}

const authReducer = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    logOutAction(state) {
      removeItem('access_token')
      setItem('loggedIn', false)
      state.login = JSON.stringify(false)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(LoginAction.pending, (state) => {
        state.loading = true
      })
      .addCase(LoginAction.fulfilled, (state) => {
        state.loading = false
        state.login = JSON.stringify(true)
        setItem('loggedIn', true)
      })
      .addCase(LoginAction.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || ''
      })
  },
})
export const { logOutAction } = authReducer.actions
export default authReducer
