import { createSlice } from '@reduxjs/toolkit'
import staticData from '../../demoData/chatData.json'
import { filterSinglePage, updatePrivetChat } from './actionCreator'

interface chat {
  data: group
  loading: boolean
  error: string | null
}

interface group {
  username: string
  groupName: string | null
  id: string | null
  time: number
  status: boolean
  img: string
  active: boolean
  email: string
  contents: content[]
}

interface content {
  content: string
  time: number
  seen: boolean
  reaction: boolean
  email: string
  img: string
  username: string
}

const initialState: chat = {
  data: staticData[0].privetChat,
  loading: false,
  error: null,
}

const initialStateGroupChat = {
  data: staticData[0].groupChat,
  loading: false,
  error: null,
}

const initialStateGroup = {
  data: staticData[0].groupChat,
  loading: false,
  error: null,
}

const initialStateUpdate = {
  data: staticData[0].privetChat,
  loading: false,
  error: null,
}

const chatReducer = createSlice({
  initialState: initialStateUpdate,
  name: 'chat',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(updatePrivetChat.pending, (state) => {
        state.loading = true
      })
      .addCase(updatePrivetChat.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(updatePrivetChat.rejected, (state: any, action) => {
        state.error = action.payload as string | null
        state.loading = false
      })
  },
})

const singleChatReducer = createSlice({
  initialState: initialState,
  name: 'singleChat',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(filterSinglePage.pending, (state) => {
        state.loading = true
      })
      .addCase(filterSinglePage.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(filterSinglePage.rejected, (state: any, action) => {
        state.error = action.payload as string | null
        state.loading = false
      })
  },
})

const groupChatReducer = createSlice({
  initialState: initialStateGroup,
  name: 'groupChat',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(filterSinglePage.pending, (state) => {
        state.loading = true
      })
      .addCase(filterSinglePage.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(filterSinglePage.rejected, (state: any, action) => {
        state.error = action.payload as string | null
        state.loading = false
      })
  },
})
