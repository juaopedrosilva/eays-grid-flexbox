import styled from "styled-components";

import { device } from '../config'
import { getWidthGrid } from '../utils'
 
import { ICol } from './index'

export const Container = styled.div<ICol>` 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;  

  padding-top: .75rem;
  padding-bottom: .75rem; 
  position: relative; 
  padding-right: 15px;
  padding-left: 15px;

  ${({ mobile }) => {
    if (mobile) {
      return `${device.mobile} {  
        ${getWidthGrid(mobile)}
      }`;
    } else {
      return `${getWidthGrid(3)}`;
    }
  }}

  ${({ tablet }) => {
    if (tablet) {
      return `${device.tablet} {  
          ${getWidthGrid(tablet)} 
        }`;
    } else {
      return `${getWidthGrid(3)}`;
    }
  }}


  ${({ desktop }) => {
    if (desktop) {
      return `${device.desktop} {   
          background: pink;
          ${getWidthGrid(desktop)} 
        }`;
    } else {
      return `${getWidthGrid(3)}`;
    }
  }}
`;
