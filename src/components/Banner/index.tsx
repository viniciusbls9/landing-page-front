import { Button } from 'components';
import * as S from './styles';

const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.BannerContent>
        <S.BannerTitle>Title</S.BannerTitle>
        <S.BannerDescription>Description</S.BannerDescription>
        <Button href='/'>Btn Label</Button>
      </S.BannerContent>
    </S.BannerWrapper>
  );
};

export default Banner;
