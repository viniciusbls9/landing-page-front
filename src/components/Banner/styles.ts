import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const BannerWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    height: auto;

    ${media.greaterThan('medium')`
      grid-template-columns: 75rem 1fr;
    `}
  `}
`;

export const LeftBannerWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: ${theme.spacings.medium};
    
    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xxlarge};
    `}
  `}
`;

export const BannerTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.bannerTitleColor};
    text-align: center;
    
    ${media.greaterThan('medium')`
      text-align: left;
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
  /* background: url(https://img.freepik.com/fotos-gratis/foto-isolada-de-mulher-usando-aplicativo-de-smartphone-gosta-de-navegar-na-midia-social-cria-conteudo-de-noticias-faz-pedidos-online-usa-oculos-e-poses-casuais-de-macacao-sobre-a-parede-bege-do-estudio_273609-44111.jpg?w=1060&t=st=1655659745~exp=1655660345~hmac=d0d3bef33cfe245674cb366c6380d58ccbac249c52aed1ba1460588ba4cdfe86);
  background-size: contain;
  background-repeat: no-repeat; */
`;
