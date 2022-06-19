import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.buttonBackgroundColor};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.buttonColor};
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    transition: background 0.3s ease-in-out;
    &:hover {
      background: ${theme.colors.primaryHover};
    }
  `}
`;
