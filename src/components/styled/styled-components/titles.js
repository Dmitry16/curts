import styled from 'styled-components'
import { media } from './medias'

export const LT = styled.h1`
  font-size: 2em;
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  color:  ${ props => props.theme.primaryTextColor || 'mediumseagreen' };
  &:hover {
    color: ${ props => props.theme.headerHoverTextColor || 'mediumseagreen' };
`
export const MT = styled.h3`
  font-size: 1.8em;
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  color:  ${ props => props.theme.primaryTextColor || 'mediumseagreen' };
  &:hover {
    color: ${ props => props.theme.primaryHoverTextColor || 'mediumseagreen' };
`
export const ST = styled.h4`
  font-size: 1.2em;
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  color:  ${ props => props.theme.primaryTextColor || 'mediumseagreen' };
  &:hover {
    color: ${ props => props.theme.primaryHoverTextColor || 'mediumseagreen' };
`
