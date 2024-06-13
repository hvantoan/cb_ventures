import { createAsyncThunk } from '@reduxjs/toolkit'
import initialState from '../../demoData/chatData.json'

export const filterSinglePage = createAsyncThunk(
  'chat/filterSinglePage',
  async (paramsId: any, { rejectWithValue }) => {
    try {
      const data = initialState[0].privetChat.filter((user) => {
        return user.email === paramsId
      })
      return data
    } catch (error: any) {
      if (!error?.response) {
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)
export const updatePrivetChat = createAsyncThunk('chat/updatePrivetChat', async (params: any, { rejectWithValue }) => {
  try {
    const data = initialState[0].privetChat.map((item) => {
      const user = item
      if (user.email === params.paramsId) {
        user.time = params.pushItem.time
        user.content = [...user.content, params.pushItem]
      }
      return user
    })
    return data
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error?.response?.data)
  }
})

export const filterSinglepageGroup = createAsyncThunk(
  'chat/filterSinglepageGroup',
  async (paramsId: any, { rejectWithValue }) => {
    try {
      const data = initialState[0].groupChat.filter((user) => {
        return user.id === paramsId
      })
      return data
    } catch (error: any) {
      if (!error?.response) {
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)
export const updateGroupChat = createAsyncThunk('chat/updateGroupChat', async (params: any, { rejectWithValue }) => {
  try {
    const data = initialState[0].groupChat.map((item) => {
      const user = item
      if (user.id === params.paramsId) {
        user.time = params.pushItem.time
        user.content = [...user.content, params.pushItem]
      }
      return user
    })
    return data
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error?.response?.data)
  }
})
