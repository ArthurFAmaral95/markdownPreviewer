import { Editor } from "./components/Editor"
import { Previewer } from "./components/Previewer"

import { useAppSelector } from "./app/hooks"
import { selectFullWindow } from "./features/fullWindow/fullWindowSlice"

import "./styles/globals.css"

export function App() {
  const fullWindow = useAppSelector(selectFullWindow)

  return (
    <main id="markdown-editor" className={fullWindow ? "full-window" : ""}>
      <Editor />
      <Previewer />
    </main>
  )
}
