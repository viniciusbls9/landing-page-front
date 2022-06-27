import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { Props } from '.'

const wrapperModifiers = {
  defaultColor: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,

  reverseColor: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `
}

export const Wrapper = styled.h2<Props>`
  ${({ theme, reverseColor }) => css`
    font-size: ${theme.font.sizes.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}

    ${!reverseColor && wrapperModifiers.defaultColor(theme)};
    ${reverseColor && wrapperModifiers.reverseColor(theme)};
  `}
`
