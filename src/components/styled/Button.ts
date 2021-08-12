import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
  theme: DefaultTheme;
}

const Button = styled.button<ButtonProps>`
  padding: 10px;
  border: 0;
  border-radius: 5px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
`;

export default Button;
