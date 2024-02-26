import "../styles/header.css"

import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  selectFullWindow,
  makeFullWindow,
} from "../features/fullWindow/fullWindowSlice"

interface HeaderProps {
  text: string
  icon: string
}

export function Header(props: HeaderProps) {
  const fullWindow = useAppSelector(selectFullWindow)
  const dispatch = useAppDispatch()

  return (
    <header>
      <div className="flex-left">
        <i className={props.icon}></i>
        <span>{props.text}</span>
      </div>
      <div className="flex-right">
        {fullWindow ? (
          <i
            className="fa fa-compress"
            onClick={() => {
              dispatch(makeFullWindow({ window: "" }))
            }}
          ></i>
        ) : (
          <i
            className="fa fa-arrows-alt"
            onClick={() => {
              dispatch(makeFullWindow({ window: props.text }))
            }}
          ></i>
        )}
      </div>
    </header>
  )
}
