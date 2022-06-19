import styled, { css } from 'styled-components';

export const BannerWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
  `}
`;

export const LeftBannerWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.medium} 0 ${theme.spacings.medium}
      ${theme.spacings.small};
  `}
`;

export const BannerTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const BannerDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    margin: ${theme.spacings.xsmall} 0;
  `}
`;

export const RightBannerWrapper = styled.div``;
