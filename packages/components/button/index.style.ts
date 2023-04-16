import styled from "styled-components"
import { ButtonStyle } from "./index.type"
import { color } from "../style"

// type-color映射
const typeMapColor = {
  primary: [color.primary_color, color.primary4_color],
  success: [color.success_color, color.success4_color],
  warning: [color.warning_color, color.warning4_color],
  danger: [color.danger_color, color.danger4_color],
  info: [color.info_color, color.info4_color]
}

// 根据theme属性计算color和bgcolor
const calcColorByTheme = (props: ButtonStyle) => {
  switch (props.theme) {
    case "light":
      return {
        color: typeMapColor[props.type][0],
        "background-color": color.gray1_color
      }
    case "dark":
      return {
        color: color.gray1_color,
        "background-color": typeMapColor[props.type][0]
      }
    default:
      return {
        color: typeMapColor[props.type][0],
        "background-color": "none"
      }
  }
}

// 根据theme属性计算hover
const calcHoverByTheme = (props: ButtonStyle) => {
  switch (props.theme) {
    case "light":
      return {
        "background-color": color.gray2_color
      }
    case "dark":
      return {
        "background-color": typeMapColor[props.type][1]
      }
    default:
      return {
        "background-color": color.gray0_color
      }
  }
}

// 根据size属性计算padding
const calcPaddingBySize = (props: ButtonStyle) => {
  switch (props.size) {
    case "large":
      return {
        padding: "10px 16px"
      }
    case "small":
      return {
        padding: "2px 12px"
      }
    default:
      return {
        padding: "6px 12px"
      }
  }
}

export const MalaButton = styled.div<ButtonStyle>`
  font-size: 14px;
  font-weight: 600;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  ${(props) => calcPaddingBySize(props)}
  ${(props) => calcColorByTheme(props)}
  :hover {
    ${(props) => calcHoverByTheme(props)}
  }
`
