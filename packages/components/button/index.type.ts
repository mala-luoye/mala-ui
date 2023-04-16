import type { CSSProperties } from "react"
type ButtonType = "primary" | "success" | "warning" | "danger" | "info"
type ButtonTheme = "light" | "dark" | "none"
type ButtonSize = "large" | "default" | "small"

// 属性
export interface ButtonProps {
  children?: string
  type?: ButtonType
  theme?: ButtonTheme
  style?: CSSProperties
  size?: ButtonSize
}
// 样式
export interface ButtonStyle {
  type: ButtonType
  theme: ButtonTheme
  size: ButtonSize
}
