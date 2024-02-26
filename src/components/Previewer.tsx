import { Header } from "./Header"

import { useAppSelector } from "../app/hooks"
import { selectText } from "../features/generatePreview/generatePreviewSlice"
import { selectFullWindow } from "../features/fullWindow/fullWindowSlice"

import { marked } from "marked"
import { useEffect } from "react"

import "../styles/previewer.css"

marked.use({
  breaks: true,
})

export function Previewer() {
  const text = useAppSelector(selectText)
  const fullWindow = useAppSelector(selectFullWindow)

  useEffect(() => {
    parsePreview()
  }, [text])

  async function parsePreview() {
    const html = await marked.parse(text)
    const previewDiv: HTMLElement | null = document?.getElementById("preview")

    if (previewDiv) {
      previewDiv.innerHTML = html
    }
  }

  return (
    <div
      className={
        fullWindow === "Preview"
          ? "previewer-container full"
          : fullWindow === "Editor"
            ? "previewer-container hidden"
            : "previewer-container"
      }
    >
      <Header icon="fa fa-solid fa-file" text="Preview" />
      <div id="preview"></div>
    </div>
  )
}
