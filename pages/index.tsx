import type { NextPage } from 'next';
import { Container, Menu, Banner } from 'components';

import * as S from './styles';

const Index: NextPage = () => {
  return (
    <S.HomeWrapper>
      <Menu />
      <S.BannerWrapper>
        <Banner />
      </S.BannerWrapper>
    </S.HomeWrapper>
  );
};

export default Index;
