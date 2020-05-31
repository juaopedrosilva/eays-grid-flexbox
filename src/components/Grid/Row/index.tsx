import React from "react";

import { RowWrapper } from "./styles";

export interface IRow { 
  flexStart?: boolean,
  flexEnd?: boolean,
  center?: boolean,
  spaceBetween?: boolean,
  spaceAround?: boolean,
  spaceEvenly?: boolean,
}
 

export const Row: React.FC<IRow> = ({
  flexStart = false,
  flexEnd = false,
  center = false,
  spaceBetween = false,
  spaceAround = false,
  spaceEvenly = false,
  children,
  ...props
}) => {
  return (
    <>
      <RowWrapper 
         flexStart={flexStart}
         flexEnd={flexEnd}
         center={center}
         spaceBetween={spaceBetween}
         spaceAround={spaceAround}
         spaceEvenly={spaceEvenly}
      >
        {children}
      </RowWrapper>
    </>
  );
};
