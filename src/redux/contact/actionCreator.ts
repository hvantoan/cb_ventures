import { createAsyncThunk } from '@reduxjs/toolkit'
import initialState from '@/demoData/contact.json'
import { Contact } from './reducer'

export const ContactGetData = createAsyncThunk<Contact[]>('contact/get', async (_, { rejectWithValue }) => {
  try {
    return initialState
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error?.response?.data)
  }
})

export const ContactAddData = createAsyncThunk('contact/add', async (contact: Contact, { rejectWithValue }) => {
  try {
    return contact
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error?.response?.data)
  }
})

export const ContactDeleteData = createAsyncThunk('contact/delete', async (contact: Contact[], { rejectWithValue }) => {
  try {
    return contact
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error?.response?.data)
  }
})

export const ContactSearchData = createAsyncThunk('contact/search', async (searchText: string, { rejectWithValue }) => {
  try {
    const filterData = initialState.filter((item) => item.name.toUpperCase().startsWith(searchText.toUpperCase()))
    return filterData
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error?.response?.data)
  }
})

interface OnStartUpdateProp {
  data: Contact[]
  id: number
}

export const OnStarUpdate = createAsyncThunk(
  'contact/on-start-update',
  async (prop: OnStartUpdateProp, { rejectWithValue, getState, dispatch }) => {
    try {
      prop.data.map((item) => {
        if (item.id === prop.id) {
          const fav = item
          if (item.stared) {
            fav.stared = false
          } else {
            fav.stared = true
          }
        }
      })

      return prop.data
    } catch (error: any) {
      if (!error?.response) {
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)
