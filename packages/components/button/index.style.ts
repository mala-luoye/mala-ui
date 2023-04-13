import styled from "styled-components"
import { ButtonStyle } from "./index.type"
import {
  primary_color,
  success_color,
  warning_color,
  danger_color,
  info_color
} from "../style"

const typeMapBgColor = {
  primary: primary_color,
  success: success_color,
  warning: warning_color,
  danger: danger_color,
  info: info_color
}

export const MalaButton = styled.div<ButtonStyle>`
  background-color: ${(props) => typeMapBgColor[props.type]};
  color: #fff;
  display: inline-block;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  margin: 10px;
`
