import React from "react";

import { ContainerWrapper } from "./styles";

export interface IContainer {
  isFluid?: boolean;
}

export const Container: React.FC<IContainer> = ({ children, isFluid = false }) => {
  return (
    <>
      <ContainerWrapper isFluid={isFluid}>{children}</ContainerWrapper>
    </>
  );
};
 