import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionReviewsWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const SectionReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr 1fr;
    `}
  `}
`;
