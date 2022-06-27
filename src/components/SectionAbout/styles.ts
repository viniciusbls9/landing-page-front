import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.white};
    /* transform: skewY(3deg); */

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} 0;
    `}
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.small};
    /* transform: skewY(-3deg); */

    ${media.greaterThan('medium')`
      grid-template-columns: 39rem 1fr;
    `}

    ${media.greaterThan('large')`
      grid-template-columns: 1fr 1fr;
    `}
  `}
`

export const Image = styled.img`
  display: block;
  max-width: min(60rem, 100%);

  ${media.lessThan('medium')`
    max-width: 100%;
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    p {
      color: ${theme.colors.black};
      margin-bottom: ${theme.spacings.small};
    }

    strong {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`
