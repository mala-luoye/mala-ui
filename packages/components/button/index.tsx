import React, { FC } from "react"
import { ButtonProps } from "./index.type"
import { MalaButton } from "./index.style"

const Button: FC<ButtonProps> = ({ type, children }) => {
  return <MalaButton type={type || "primary"}>{children}</MalaButton>
}

export default Button
