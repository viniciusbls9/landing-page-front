import styled, { css, DefaultTheme } from 'styled-components';

type ButtonProps = { maxWidth?: string; reverseColor?: boolean }

const wrapperModifiers = {

  reverseColor: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

export const ButtonWrapper = styled.a<ButtonProps>`
  ${({ theme, maxWidth, reverseColor }) => css`
    background: ${theme.colors.buttonBackgroundColor};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.buttonColor};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    max-width: ${maxWidth};
    transition: background 0.3s ease-in-out;
    &:hover {
      background: ${theme.colors.buttonBackgroundHover};
      color: ${theme.colors.buttonHoverColor};
    }

    ${reverseColor && wrapperModifiers.reverseColor(theme)};
  `}
`;
