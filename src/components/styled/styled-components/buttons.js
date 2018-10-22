import styled from 'styled-components'
import { media } from './medias'
import { css } from 'styled-components'

export const Button = styled.button`
  padding: ${props => props.small ? '0.3em 0.7em' : '1.5em 5em'};
  border: ${ props => props.theme.buttonBorder };
  color: ${ props => props.theme.buttonTextColor };
  font-size: 1.2em;
  background: ${ props => props.theme.buttonBG };
  margin-top: 0;
  cursor: pointer;
  &:hover {
    background: ${ props => props.theme.buttonHoverBG };
    border: ${ props => props.theme.buttonHoverBorder };
    color: ${ props => props.theme.buttonHoverColor };
    box-shadow: 0 0 20px 3px #777;
  }
  ${ media.desktop`
    padding: ${props => props.small ? '0.3em 0.7em' : '1.5em 4em'};
    font-size: 1em;
  `}
  ${ media.tablet`
    padding: ${props => props.small ? '0.3em 0.7em' : '1.5em 3em'};
    font-size: 0.9em;
  `}
  ${ media.handheld`
    padding: ${props => props.small ? '0.3em 0.7em' : '1em 2em'};
    font-size: 0.8em;
  `}
  `
  export const ButtonCTA = styled.button`
    width: ${props => props.primary ? '100%' : '100%'};
    height: ${props => props.primary ? '3.6em' : '3.2em'};
    color: #fff;
    font-size: ${props => props.primary ? '1.2em' : '1em'};
    border: none;
    border-radius: ${ props => props.theme.buttonCTABorderRadius };
    margin: 1%; padding: 1em 0.3em;
    background: ${ props => props.theme.colorCTA };
    cursor: pointer;
    &:hover {
      background: ${ props => props.theme.buttonCTAhoverBG };
      border: ${ props => props.theme.buttonCTAhoverBorder };
      box-shadow: 5px 5px 10px #333;
      color: ${ props => props.theme.buttonCTAhoverColor };
    }
    ${ media.tablet`
      font-size: ${props => props.primary ? '1.1em' : '0.9em'};
      width: 100%;
      height: ${props => props.primary ? '3.8em' : '3.7em'};
      padding: 0.5em 0.1em;
    `}
    ${ media.handheld`
      font-size: ${props => props.primary ? '0.9em' : '0.8em'};
      width: 100%;
      height: 3em;
    `}
  `
