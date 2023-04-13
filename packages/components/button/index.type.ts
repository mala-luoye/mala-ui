export type ButtonType =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"

// 组件属性类型
export interface ButtonProps {
  children?: string
  type?: ButtonType
}
// 组件
export interface ButtonStyle {
  type: ButtonType
}
