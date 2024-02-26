import { Header } from "./Header"

import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  selectText,
  generatePreview,
} from "../features/generatePreview/generatePreviewSlice"
import { selectFullWindow } from "../features/fullWindow/fullWindowSlice"

import "../styles/editor.css"

export function Editor() {
  const text = useAppSelector(selectText)
  const fullWindow = useAppSelector(selectFullWindow)
  const dispatch = useAppDispatch()

  function handleChange(e: any) {
    const value = e.target.value
    dispatch(generatePreview({ text: value }))
  }

  return (
    <div
      className={
        fullWindow === "Editor"
          ? "editor-container full"
          : fullWindow === "Preview"
            ? "editor-container hidden"
            : "editor-container"
      }
    >
      <Header icon="fa fa-solid fa-pencil" text="Editor" />
      <textarea value={text} id="editor" onChange={handleChange}></textarea>
    </div>
  )
}
