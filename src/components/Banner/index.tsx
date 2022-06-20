import { Button } from 'components';
import * as S from './styles';

const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.LeftBannerWrapper>
        <S.BannerTitle>Title</S.BannerTitle>
        <S.BannerDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</S.BannerDescription>
        <Button href='/'>Btn Label</Button>
      </S.LeftBannerWrapper>
      <S.RightBannerWrapper></S.RightBannerWrapper>
    </S.BannerWrapper>
  );
};

export default Banner;
