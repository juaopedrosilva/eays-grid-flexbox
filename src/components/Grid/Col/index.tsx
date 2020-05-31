import React from 'react';

import { Container } from './styles'

export interface ICol {
  mobile?: number;
  tablet?: number;
  desktop?: number;
}


export const Col: React.FC<ICol> = ({
  children,
  mobile = 12,
  tablet = 6,
  desktop = 6,
  ...props
}) => {
  return <>
    <Container
      mobile={mobile}
      tablet={tablet}
      desktop={desktop}
      {...props}
    >
      {children}
    </Container>
  </>
} 
 