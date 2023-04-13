import React, { FC } from "react"
import { ButtonProps } from "./index.type"
import { MalaButton } from "./index.style"

const Button: FC<ButtonProps> = (props) => {
  return <MalaButton type={props.type}>{props.children}</MalaButton>
}

export default Button
