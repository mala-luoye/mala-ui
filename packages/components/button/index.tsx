import React, { FC } from "react"

export interface ButtonProps {
  chilren?: string
}

const Button: FC<ButtonProps> = (props) => {
  return <div className="mala-button-primary">{props.chilren}</div>
}

export default Button
