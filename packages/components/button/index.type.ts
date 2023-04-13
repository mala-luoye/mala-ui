type ButtonType = "primary" | "success" | "warning" | "danger" | "info"

// 属性
export interface ButtonProps {
  children?: string
  type?: ButtonType
}
// 样式
export interface ButtonStyle {
  type: ButtonType
}
