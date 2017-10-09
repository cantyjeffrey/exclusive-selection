// @flow

import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  ${space} ${width} ${fontSize} ${color};
`;

export default {};
