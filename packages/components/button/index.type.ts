export type ButtonType =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"

export interface ButtonProps {
  children?: string
  type?: ButtonProps
}
