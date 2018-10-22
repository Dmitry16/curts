import { css } from 'styled-components'

export const media = {
  tiny: (...args) => css`
    @media (max-width: 260px) {
      ${ css(...args) }
    }
  `,
  handheld: (...args) => css`
    @media (max-width: 700px) {
      ${ css(...args) }
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 1000px) {
      ${ css(...args) }
    }
  `,
  desktop: (...args) => css`
    @media (max-width: 1500px) {
      ${ css(...args) }
    }
  `,
  wide: (...args) => css`
    @media (max-width: 2000px) {
      ${ css(...args) }
    }
  `
}

const sizes = {
giant: 1400,
desktop: 1100,
tablet: 800,
phone: 400
}
export const mediaQ = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label]/16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
