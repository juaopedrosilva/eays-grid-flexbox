import styled from "styled-components";

import { device } from "../Grid/config";

import { IContainer } from "./index";

export const ContainerWrapper = styled.div<IContainer>`
  margin: ${({ isFluid }) => (isFluid ? 0 : "0 auto")};

  ${device.mobile} {
    width: 100%;
  }
  ${device.tablet} {
    width: 100%;
  }
  ${device.desktop} {
    width: 100%;
  }
`;
