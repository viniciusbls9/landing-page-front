import * as S from './styles';

const Menu = () => {
  const socialMediaMock = [
    { socialMedia: 'facebook', link: '#' },
    { socialMedia: 'instagram', link: '#' },
    { socialMedia: 'twitter', link: '#' },
  ];
  return (
    <S.MenuWrapper>
      <S.LogoWrapper>
        <S.Logo>LOGO</S.Logo>
      </S.LogoWrapper>

      <S.SocialMediasWrapper></S.SocialMediasWrapper>
    </S.MenuWrapper>
  );
};

export default Menu;
