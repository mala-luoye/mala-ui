import React, { FC } from "react"
import { ButtonProps } from "./index.type"
import { MalaButton } from "./index.style"

const Button: FC<ButtonProps> = ({ children, type, theme, style }) => {
  return (
    <MalaButton type={type || "primary"} theme={theme || "light"} style={style}>
      {children}
    </MalaButton>
  )
}

export default Button
