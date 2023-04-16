import styled from "styled-components"
import { ButtonStyle } from "./index.type"
import {
  primary_color,
  success_color,
  warning_color,
  danger_color,
  info_color,
  gray1_color,
  gray2_color
} from "../style"

const typeMapColor = {
  primary: primary_color,
  success: success_color,
  warning: warning_color,
  danger: danger_color,
  info: info_color
}

const themeMapBgColor = (props: ButtonStyle) => {
  switch (props.theme) {
    case "light":
      return {
        color: typeMapColor[props.type],
        "background-color": gray2_color
      }
    case "dark":
      return {
        color: gray1_color,
        "background-color": typeMapColor[props.type]
      }
    default:
      return {
        color: typeMapColor[props.type],
        "background-color": "none"
      }
  }
}

export const MalaButton = styled.div<ButtonStyle>`
  font-size: 14px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 3px;
  display: inline-block;
  cursor: pointer;
  ${(props) => themeMapBgColor(props)}
`
