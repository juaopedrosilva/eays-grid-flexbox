import styled from 'styled-components'

import { getPropertyJustifyContent } from '../utils'

import { IRow } from './index'

export const RowWrapper = styled.div<IRow>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ${(props) => getPropertyJustifyContent(props)} 

` 
