import type { NextPage } from 'next';
import { Container, Menu, Banner } from 'components';

import * as S from './styles';

const Index: NextPage = () => {
  return (
    <S.HomeWrapper>
      <Container>
        <Menu />
      </Container>
      <S.BannerWrapper>
        <Banner />
      </S.BannerWrapper>
    </S.HomeWrapper>
  );
};

export default Index;
