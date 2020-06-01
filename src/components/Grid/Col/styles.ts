import styled from "styled-components";

import { device } from "../config";
import { getWidthGrid } from "../utils";

import { ICol } from "./index";

export const Container = styled.div<ICol>` 
  position: relative; 
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px; 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;


  ${({ mobile }) => {
    return `${device.mobile} {  
      ${mobile && getWidthGrid(mobile)}
    }`;
  }}

  ${({ tablet }) => {
    return `${device.tablet} {  
      ${tablet && getWidthGrid(tablet)}
    }`;
  }}
  
  ${({ desktop }) => {
    return `${device.desktop} {  
      ${desktop && getWidthGrid(desktop)}
    }`;
  }} 
`;
