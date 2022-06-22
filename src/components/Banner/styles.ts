import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const BannerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: auto;

  @media (min-width: 1024px) and (max-width: 1500px) {
    grid-template-columns: 58rem 1fr;
  }

  @media (min-width: 1501px) {
    grid-template-columns: 75rem 1fr;
  }

  @media (min-width: 1981px) {
    grid-template-columns: 110rem 1fr;
  }
`;

export const LeftBannerWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: ${theme.spacings.medium};
    
    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xxlarge};
      align-items: unset;
    `}
  `}
`;

export const BannerDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin: ${theme.spacings.xsmall} 0;
    color: ${theme.colors.bannerDescriptionColor};
    line-height: ${theme.spacings.small};
    text-align: center;

    ${media.greaterThan('medium')`
      text-align: left;
    `}
  `}
`;

export const RightBannerWrapper = styled.div`
  display: none;
  width: 100%;
  justify-content: center;

  @media (min-width: 1024px) {
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const BannerImage = styled.img`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 68vh;
  margin: 0 auto;
  align-self: flex-start;
  justify-content: flex-start;

`
