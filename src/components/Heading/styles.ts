import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { Props } from '.'

const wrapperModifiers = {
  defaultColor: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,

  reverseColor: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `
}

export const Wrapper = styled.h2<Props>`
  ${({ theme, reverseColor, lineBottom }) => css`
    padding-left: 1rem;
    font-size: ${theme.font.sizes.large};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
    ${!reverseColor && wrapperModifiers.defaultColor(theme)};
    ${reverseColor && wrapperModifiers.reverseColor(theme)};
  `}
`
