import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 1.2rem;
    min-height: 26rem;
  `}
`

export const User = styled.div`
  align-items: center;
  display: flex;
`

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
`

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`

export const Text = styled.blockquote`
  ${({ theme }) => css`
    display: grid;
    margin-top: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.font.sizes.medium};
    position: relative;
  `}
`
