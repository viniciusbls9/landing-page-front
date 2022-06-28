import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionCTAWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const Box = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large};
    `}
  `}
`
