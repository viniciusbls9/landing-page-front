import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
  href: string;
};

const Button: React.FC<Props> = ({ children, href }) => (
  <S.ButtonWrapper href={href}>{children}</S.ButtonWrapper>
);

export default Button;
