import type { NextPage } from 'next';
import { Menu, Banner, About } from 'components';

import * as S from './styles';

const Index: NextPage = () => {
  return (
    <S.HomeWrapper>
      <Menu />
      <S.BannerWrapper>
        <Banner />
      </S.BannerWrapper>
      <About />
    </S.HomeWrapper>
  );
};

export default Index;
