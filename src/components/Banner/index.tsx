import { Button } from 'components';
import * as S from './styles';

const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.LeftBannerWrapper>
        <S.BannerTitle>Title</S.BannerTitle>
        <S.BannerDescription>Description</S.BannerDescription>
        <Button href='/'>Btn Label</Button>
      </S.LeftBannerWrapper>
      <S.RightBannerWrapper></S.RightBannerWrapper>
    </S.BannerWrapper>
  );
};

export default Banner;
