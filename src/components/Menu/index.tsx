import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Whatsapp,
} from '@styled-icons/boxicons-logos';
import * as S from './styles';

const Menu = () => {
  const socialMediaIcons = {
    facebook: <Facebook size={20} color='#000' />,
    instagram: <Instagram size={20} color='#000' />,
    twitter: <Twitter size={20} color='#000' />,
    linkedin: <Linkedin size={20} color='#000' />,
    whatsapp: <Whatsapp size={20} color='#000' />,
  };
  return (
    <S.MenuWrapper>
      <S.LogoWrapper>
        <S.Logo src='https://preview.uideck.com/items/freelancer/assets/images/logo.svg' />
      </S.LogoWrapper>

      <S.SocialMediasWrapper>
        <S.SocialMedia>
          <Facebook size={20} color='#000' />
          <Twitter size={20} color='#000' />
        </S.SocialMedia>
      </S.SocialMediasWrapper>
    </S.MenuWrapper>
  );
};

export default Menu;
