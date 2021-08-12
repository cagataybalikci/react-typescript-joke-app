import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface WrapperProps {
  theme: DefaultTheme;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50rem;
  padding: 20px;
  margin: 0px auto;
`;

export default Wrapper;
