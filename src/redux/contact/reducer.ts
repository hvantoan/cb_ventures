import { create } from 'domain'
import toData from '../../demoData/contact.json'
import { createSlice } from '@reduxjs/toolkit'
import { ContactAddData, ContactDeleteData, ContactGetData, ContactSearchData, OnStarUpdate } from './actionCreator'

export interface Contact {
  id: number
  time: number
  name: string
  designation: string
  stared: boolean
  phone: string
  company: string
  email: string
  img: string
}

interface ContactState {
  data: Contact[]
  loading: boolean
  error: null | string
}

const initialState: ContactState = {
  data: toData,
  loading: false,
  error: null,
}

const contactReducer = createSlice({
  name: 'contact',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ContactGetData.pending, (state) => {
        state.loading = true
      })
      .addCase(ContactGetData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(ContactGetData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || ''
      })
    // Add Contact
    builder
      .addCase(ContactAddData.pending, (state) => {
        state.loading = true
      })
      .addCase(ContactAddData.fulfilled, (state, action) => {
        state.loading = false
        state.data = [...state.data, action.payload]
      })
      .addCase(ContactAddData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || ''
      })

    builder
      .addCase(ContactDeleteData.pending, (state) => {
        state.loading = true
      })
      .addCase(ContactDeleteData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(ContactDeleteData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || ''
      })

    builder
      .addCase(ContactSearchData.pending, (state) => {
        state.loading = true
      })
      .addCase(ContactSearchData.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(ContactSearchData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || ''
      })

    builder
      .addCase(OnStarUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(OnStarUpdate.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(OnStarUpdate.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || ''
      })
  },
})

export default contactReducer
