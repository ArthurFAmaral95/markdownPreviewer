import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface FullWindow {
  window: string
}

const initialState: FullWindow = {
  window: "",
}

export const fullWindowSlice = createSlice({
  name: "fullWindow",
  initialState,
  reducers: {
    makeFullWindow: (state, action: PayloadAction<FullWindow>) => {
      state.window = action.payload.window
    },
  },
})

export const { makeFullWindow } = fullWindowSlice.actions
export const selectFullWindow = (state: RootState) =>
  state.makeFullWindow.window

export default fullWindowSlice.reducer
