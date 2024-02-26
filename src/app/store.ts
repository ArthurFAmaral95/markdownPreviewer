import { configureStore } from "@reduxjs/toolkit"
import generatePreviewReducer from "../features/generatePreview/generatePreviewSlice"
import fullWindowReducer from "../features/fullWindow/fullWindowSlice"

export const store = configureStore({
  reducer: {
    generatePreview: generatePreviewReducer,
    makeFullWindow: fullWindowReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
