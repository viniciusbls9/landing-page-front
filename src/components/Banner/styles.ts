import styled, { css } from 'styled-components';

export const BannerWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.large};
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    /* padding: ${theme.spacings.medium} 0 ${theme.spacings.medium}
      ${theme.spacings.small}; */
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
