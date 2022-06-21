import { Button } from 'components';
import * as S from './styles';

const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.LeftBannerWrapper>
        <S.BannerTitle>Title</S.BannerTitle>
        <S.BannerDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</S.BannerDescription>
        <Button href='/' maxWidth='150px'>Entre em contato</Button>
      </S.LeftBannerWrapper>
      <S.RightBannerWrapper>
        <S.BannerImage src='https://img.freepik.com/free-photo/happy-smiling-curly-haired-young-woman-types-message-mobile-phone-looks-with-glad-expression-display-wears-grey-jacket_273609-43347.jpg?t=st=1655809552~exp=1655810152~hmac=9928afd61df00ef2092f316eaba83fab7b9571348ea5f214418a64f7cb463593&w=1380' />
      </S.RightBannerWrapper>
    </S.BannerWrapper>
  );
};

export default Banner;
