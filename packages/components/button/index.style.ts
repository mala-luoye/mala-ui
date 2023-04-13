import styled from "styled-components"
import { ButtonStyle } from "./index.type"
import {
  primary_color,
  secondary_color,
  success_color,
  warning_color,
  danger_color,
  info_color
} from "../style"

const typeMapBgColor = {
  primary: primary_color,
  secondary: secondary_color,
  success: success_color,
  warning: warning_color,
  danger: danger_color,
  info: info_color
}

export const MalaButton = styled.div<ButtonStyle>`
  background-color: ${(props) => typeMapBgColor[props.type]};
  display: inline-block;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
`
