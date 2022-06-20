import styled, { css } from 'styled-components';

export const MenuWrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};
  `}
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.img``;

export const SocialMediasWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const SocialMedia = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
  `}
`;
