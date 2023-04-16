import React, { FC } from "react"
import { ButtonProps } from "./index.type"
import { MalaButton } from "./index.style"

const Button: FC<ButtonProps> = ({ children, size, theme, type, style }) => {
  return (
    <MalaButton
      style={style}
      theme={theme || "light"}
      type={type || "primary"}
      size={size || "default"}
    >
      {children}
    </MalaButton>
  )
}

export default Button
