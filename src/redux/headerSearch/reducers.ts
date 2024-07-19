import { createSlice } from '@reduxjs/toolkit'
import staticData from '@/data/header-search.json'

interface headerSearchItem {
  id: number
  title: string
  count: number
}

const initData: Array<headerSearchItem> = staticData

const headerSearchReducer = createSlice({
  initialState: initData,
  name: 'headerSearch',
  reducers: {
    headerSearchAction(state, action) {
      return state.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()))
    },
  },
})

export const { headerSearchAction } = headerSearchReducer.actions
export default headerSearchReducer
