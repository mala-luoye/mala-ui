import styled from "styled-components"
import {
  primary_color,
  secondary_color,
  success_color,
  warning_color,
  danger_color,
  info_color
} from "../style"

const typeMapColor = {
  primary: primary_color,
  secondary: secondary_color,
  success: success_color,
  warning: warning_color,
  danger: danger_color,
  info: info_color
}

export const MalaButton = styled.div`
  background-color: ${(props) => typeMapColor[props.type]};
  display: inline-block;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
`
