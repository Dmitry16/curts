import styled from 'styled-components'
import { media } from './medias'
import { css } from 'styled-components'
import { flex } from './flexes'

export const ContainerMain = styled.div`
  width: 100%;
  height: 'auto';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const WrapperMax1100 = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding: 3% 0;
`
export const Section = styled.section`
  width: 100%;
  margin: 5% auto;
  background: ${props => props.dark ? 'rgba(0,0,50,.2)' : 'none'};
  text-align: center;
`
export const PicWrapper = styled.div`
    width: 32%;
    margin: 0.4em;
    overflow: hidden;
  ${ media.wide`
    width: 32%;
    margin: 0.4em;
  ` };
  ${ media.desktop`
    width: 32%;
    margin: 0.3em;
  ` };
  ${ media.tablet`
    width: 32%;

    margin: 0.2em;
  ` };
  ${ media.handheld`
    width: 48%;
    margin: 0.1em;
  ` }
`
export const WrapperHeaderTop = styled.div`
  position: fixed;
  top: 0;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0; margin: 0;
  > a { margin: 0.5em 0 0 2em;}
  ${ media.tablet`height: auto;
    > img { margin: 0.5em 0 0; }
    > div > div { margin: 0.5em 0; width: 100%; }
  `};
  ${ media.handheld`
    ${ flex.column }
    height: auto;
    > a { margin: auto; }
    > a > img { margin: 0 0 0 3.5% }
  `};
  ${ media.tiny`height: auto;
    ${ flex.column }
  `};
`
export const WrapperHeaderScrolled = styled.div`
  position: fixed;
  top: 0;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0; margin: 0;
  background: rgba(0,0,150,.9);
  > a { margin: 0.5em 0 0 2em;}
  ${ media.tablet`height: auto;
    > img { margin: 0.5em 0 0; }
    > div > div { margin: 0.5em 0; width: 100%; }
  `};
  ${ media.handheld`height: auto;
    ${ flex.column }
    > a { margin: auto; }
    > a > img { margin: 0 0 0 3.5% }
  `};
  ${ media.tiny`height: auto;
    ${ flex.column }
  `};
  `
