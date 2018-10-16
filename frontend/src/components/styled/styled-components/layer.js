import styled from 'styled-components'

export const Layer = styled.div`
  margin: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${ props => props.theme.layer };
`
